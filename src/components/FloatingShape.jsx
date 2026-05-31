import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FloatingShape({ color1 = 0x5227FF, color2 = 0xFF9FFC }) {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Setup
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.05);

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
        camera.position.z = 8;
        camera.position.y = 2;
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // Particles - "Neural Cloud"
        const geometry = new THREE.BufferGeometry();
        const count = 2000;
        const positions = new Float32Array(count * 3);
        const originalPositions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const colors = new Float32Array(count * 3);

        const c1 = new THREE.Color(color1);
        const c2 = new THREE.Color(color2);

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 4 + Math.random() * 0.5;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            originalPositions[i * 3] = x;
            originalPositions[i * 3 + 1] = y;
            originalPositions[i * 3 + 2] = z;

            sizes[i] = Math.random() * 0.1 + 0.05;

            // Mix colors
            const mixed = c1.clone().lerp(c2, Math.random());
            colors[i * 3] = mixed.r;
            colors[i * 3 + 1] = mixed.g;
            colors[i * 3 + 2] = mixed.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Custom shader for shiny dots
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                pointTexture: { value: new THREE.TextureLoader().load('https://assets.codepen.io/127738/dotTexture.png') }
            },
            vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Subtle wave movement
          pos.x += sin(time * 0.5 + position.y) * 0.2;
          pos.y += cos(time * 0.3 + position.x) * 0.2;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
            fragmentShader: `
        varying vec3 vColor;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if(d > 0.5) discard;
          gl_FragColor = vec4(vColor, 1.0 - (d * 2.0)); // soft edge
        }
      `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Connecting Lines (simulated with standard geometry for specific prominent connections or just lines)
        // Actually simpler: Add an inner Icosahedron wireframe for structure
        const wireGeo = new THREE.IcosahedronGeometry(3.5, 1);
        const wireMat = new THREE.MeshBasicMaterial({
            color: color1,
            wireframe: true,
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending
        });
        const wireMesh = new THREE.Mesh(wireGeo, wireMat);
        scene.add(wireMesh);


        // Animation
        const clock = new THREE.Clock();
        let frameId;

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();

            material.uniforms.time.value = t;

            // Rotate cloud
            particles.rotation.y = t * 0.05;
            particles.rotation.z = t * 0.02;

            wireMesh.rotation.x = -t * 0.1;
            wireMesh.rotation.y = -t * 0.1;

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            if (!mountRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [color1, color2]);

    return <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} />;
}
