import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Exact bounding boxes measured from the extracted point clouds
const LEFT_HAND  = { minX: -1.859, maxX: -0.369, minY: -0.988, maxY:  0.023 };
const RIGHT_HAND = { minX:  0.428, maxX:  1.860, minY:  0.029, maxY:  0.904 };

function buildPointCloud(points) {
  const total = points.length;
  const positions = new Float32Array(total * 3);
  const colors    = new Float32Array(total * 3);
  const sizes     = new Float32Array(total);

  for (let i = 0; i < total; i++) {
    const [x, y, z, brightness] = points[i];
    positions[i * 3]     = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    colors[i * 3]     = brightness;
    colors[i * 3 + 1] = brightness;
    colors[i * 3 + 2] = brightness;
    sizes[i] = 0.008 + brightness * 0.005;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.ShaderMaterial({
    uniforms: { pixelRatio: { value: Math.min(window.devicePixelRatio, 2) } },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      uniform float pixelRatio;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * pixelRatio * (800.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = smoothstep(0.5, 0.2, dist);
        gl_FragColor = vec4(vColor * 1.5, alpha * vColor.r);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  return { mesh: new THREE.Points(geometry, material), geometry, material };
}

export default function AsciiHandsHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // FOV calibrated to the source image: tan(fov/2) = 1/5 → fov ≈ 22.62°
    const IMAGE_FOV    = 22.619865;
    const IMAGE_ASPECT = 1024 / 571; // ~1.793

    const camera = new THREE.PerspectiveCamera(IMAGE_FOV, IMAGE_ASPECT, 0.1, 200);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const leftGroup  = new THREE.Group();
    const rightGroup = new THREE.Group();
    scene.add(leftGroup);
    scene.add(rightGroup);

    const disposables = [];

    Promise.all([
      fetch('/left-hand-points.json?v=1').then(r => r.json()),
      fetch('/right-hand-points.json?v=1').then(r => r.json()),
    ]).then(([leftPoints, rightPoints]) => {
      const left  = buildPointCloud(leftPoints);
      const right = buildPointCloud(rightPoints);

      leftGroup.add(left.mesh);
      rightGroup.add(right.mesh);

      disposables.push(left.geometry, left.material);
      disposables.push(right.geometry, right.material);

      positionHands();
      renderer.render(scene, camera);
    });

    // Compute half-width of visible world space at Z=0 for current camera state
    const getHalfWidth = () => {
      const halfH = camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
      return halfH * camera.aspect;
    };

    const positionHands = () => {
      const hw = getHalfWidth();

      // LEFT hand: align its LEFT outer edge to the LEFT screen edge.
      // Screen left edge  = -hw
      // Hand's minX (natural) = LEFT_HAND.minX = -1.859
      // We need: LEFT_HAND.minX + offsetX = -hw
      // => offsetX = -hw - LEFT_HAND.minX
      const leftOffsetX = -hw - LEFT_HAND.minX;
      leftGroup.position.set(leftOffsetX, 0, 0);

      // RIGHT hand: align its RIGHT outer edge to the RIGHT screen edge.
      // Screen right edge = +hw
      // Hand's maxX (natural) = RIGHT_HAND.maxX = 1.860
      // We need: RIGHT_HAND.maxX + offsetX = +hw
      // => offsetX = hw - RIGHT_HAND.maxX
      const rightOffsetX = hw - RIGHT_HAND.maxX;
      rightGroup.position.set(rightOffsetX, 0, 0);
    };

    let animationFrameId;
    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);
      renderer.render(scene, camera);
    };
    renderLoop();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      const screenAspect = w / h;

      renderer.setSize(w, h);
      camera.aspect = screenAspect;

      if (screenAspect < IMAGE_ASPECT) {
        const scale = IMAGE_ASPECT / screenAspect;
        camera.fov = THREE.MathUtils.radToDeg(
          2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(IMAGE_FOV) / 2) * scale)
        );
      } else {
        camera.fov = IMAGE_FOV;
      }

      camera.updateProjectionMatrix();

      // Re-snap hands to edges whenever viewport changes
      positionHands();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      disposables.forEach(d => d.dispose());
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        overflow: 'hidden',
      }}
    />
  );
}
