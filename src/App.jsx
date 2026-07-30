import React, { useState, useRef, useEffect } from 'react';
import WorkflowBuilder from './components/WorkflowBuilder.jsx';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';
import LogoLoop from './components/LogoLoop.jsx';
import CardSwap, { Card } from './components/CardSwap.jsx';
import FloatingShape from './components/FloatingShape.jsx';
import Clients from './components/Clients.jsx';
import { LiquidButton, LiquidContainer } from '@/components/ui/liquid-glass-button';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiThreedotjs, SiNodedotjs, SiGraphql, SiCplusplus, SiPython } from 'react-icons/si';
import { FaJava, FaImage, FaFolderOpen } from 'react-icons/fa';
import { DiMsqlServer } from "react-icons/di";
import { BsBarChartFill } from "react-icons/bs";
import './App.css';

import iotOdorDashboardImg from './assets/iot_odor_dashboard_1780215127104.png';
import fleetManagementImg from './assets/fleet_management_1780215142704.png';
import pickleballBookingImg from './assets/pickleball_booking_1780215165753.png';
import companyLandingImg from './assets/company_landing_1780215181913.png';
import adminDashboardImg from './assets/admin_dashboard_1780215213097.png';
import ecommerceDashboardImg from './assets/ecommerce_dashboard_1780215227709.png';
import agenticOsImg from './assets/agentic_os_1780215244839.png';
import cognitiveArchitectureImg from './assets/cognitive_architecture_1780215262175.png';
import localEdgeAiImg from './assets/local_edge_ai_1780215278661.png';
import multiAgentEnvImg from './assets/multi_agent_env_1780215303756.png';
import iotCleaningMonitorImg from './assets/iot_cleaning_monitor_1780215323477.png';
import homestayLandingImg from './assets/homestay_landing_1780215338906.png';
import inventoryDashboardImg from './assets/inventory_dashboard_1780215363502.png';
import travelSystemImg from './assets/travel_system_1780215380155.png';
import docControlSystemImg from './assets/doc_control_system_1780215403691.png';
import localllmAppImg from './assets/localllm_app_1780215419776.png';
import corpManagementImg from './assets/corp_management_1780215436956.png';
import socialAppImg from './assets/social-app.png';
import aiDashboardImg from './assets/ai-dashboard.png';


const techLogos = [
  { node: <SiReact title="React" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs title="Next.js" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript title="TypeScript" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss title="Tailwind CSS" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVite title="Vite" />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiThreedotjs title="Three.js" />, title: "Three.js", href: "https://threejs.org" },
  { node: <SiNodedotjs title="Node.js" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiGraphql title="GraphQL" />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiCplusplus title="C++" />, title: "C++", href: "https://isocpp.org/" },
  { node: <FaJava title="Java" />, title: "Java", href: "https://www.java.com/" },
  { node: <SiPython title="Python" />, title: "Python", href: "https://www.python.org/" },
  { node: <DiMsqlServer title="SQL Server" size={36} />, title: "SQL Server", href: "https://www.microsoft.com/en-us/sql-server" },
  { node: <BsBarChartFill title="Power BI" size={26} />, title: "Power BI", href: "https://powerbi.microsoft.com/" },
];

function App() {
  const [imagePreview, setImagePreview] = useState(null);
  const [workflowDetails, setWorkflowDetails] = useState("");
  const heroVideoRef = useRef(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    let lastY = window.scrollY;
    let stopTimer;
    const handleScroll = () => {
      const video = heroVideoRef.current;
      if (!video) return;
      // Ignore spurious scroll events with no actual movement (e.g. on load).
      if (window.scrollY === lastY) return;
      lastY = window.scrollY;

      // Play while the user is actively scrolling...
      if (video.paused) video.play().catch(() => {});

      // ...and pause shortly after scrolling stops.
      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => {
        if (video && !video.paused) video.pause();
      }, 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(stopTimer);
    };
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="portfolio-app">
      <nav style={{ padding: '20px 40px', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, color: 'white', display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box', alignItems: 'center', backdropFilter: 'blur(5px)' }}>
        <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em' }}></div>
        <LiquidContainer className="px-8 py-2 gap-8 hidden md:flex">
          <a href="#hero" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.9, transition: 'opacity 0.2s', fontWeight: 500 }}>Home</a>
          <a href="#services" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.9, transition: 'opacity 0.2s', fontWeight: 500 }}>Services</a>
          <a href="#journey" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.9, transition: 'opacity 0.2s', fontWeight: 500 }}>Journey</a>
          <a href="#work" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.9, transition: 'opacity 0.2s', fontWeight: 500 }}>Work</a>
        </LiquidContainer>
        <LiquidButton href="#contact" variant="default" size="default" style={{ textDecoration: 'none', color: 'white' }}>
          Let's Talk
        </LiquidButton>
      </nav>

      <section id="hero" style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
        <video
          ref={heroVideoRef}
          src="/3dhero.mp4"
          loop
          muted
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.15) 50%, rgba(5,5,5,0.65) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', pointerEvents: 'none', padding: '0 24px' }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#FF9FFC', marginBottom: '18px', opacity: 0.9 }}>
            Muhammad Muaz — Portfolio
          </span>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', margin: 0, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05, textAlign: 'center', textShadow: '0 6px 30px rgba(0,0,0,0.45)' }}>
            Yeah that's me, <br />
            <span style={{ background: 'linear-gradient(90deg, #FF9FFC 0%, #B19EEF 50%, #5227FF 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Developer u looking for</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1rem, 1.4vw, 1.25rem)', marginTop: '24px', maxWidth: '620px', textAlign: 'center', opacity: 0.85, lineHeight: 1.7, fontWeight: 400, letterSpacing: '0.01em', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            My name is Muhammad Muaz, graduate from UMPSA, and currently work as Executive System Developer at UMPSA Holdings
          </p>
        </div>
      </section>

      {/* Unified Background Container */}
      <div style={{ background: '#050505', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
        
        {/* Background 3D Decorations */}
        <div className="absolute top-40 left-0 w-64 h-64 opacity-20 blur-[2px] pointer-events-none transform -rotate-12 z-0">
            <img src="/3dasset/0004.png" alt="bg-decor" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-1/4 right-0 w-80 h-80 opacity-10 blur-[4px] pointer-events-none transform rotate-12 z-0">
            <img src="/3dasset/0005.png" alt="bg-decor" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-1/2 left-10 w-96 h-96 opacity-10 blur-[6px] pointer-events-none transform -rotate-6 z-0">
            <img src="/3dasset/0006.png" alt="bg-decor" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-40 right-20 w-72 h-72 opacity-20 blur-[2px] pointer-events-none transform rotate-45 z-0">
            <img src="/3dasset/0007.png" alt="bg-decor" className="w-full h-full object-contain" />
        </div>

        {/* Tech Stack */}
        <div style={{ padding: '40px 0', position: 'relative', zIndex: 10 }}>
          <div style={{ position: 'relative', overflow: 'hidden', width: '100%', margin: '0' }}>
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut={true}
              fadeOutColor="#050505"
              ariaLabel="Technology stack"
            />
          </div>
        </div>

        <Services />
        <Experience />

        {/* Work Section */}
        <section id="work" style={{ padding: '100px 40px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.8, pointerEvents: 'none' }}>
            <FloatingShape color1="#5227FF" color2="#FF9FFC" />
          </div>

          <div style={{ flex: '0 0 auto', maxWidth: '450px', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '5rem', margin: '0 0 30px 0', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1 }}>
              My <br /> Project
            </h2>
            <p style={{ fontSize: '1.5rem', opacity: 0.8, lineHeight: 1.5 }}>
              Here are some of the projects I've worked on, showcasing my skills in development and design.
            </p>
            <div style={{ marginTop: '30px' }}>
              <LiquidButton href="/project" variant="default" size="default" style={{ textDecoration: 'none', color: 'white' }}>
                See More
              </LiquidButton>
            </div>
          </div>
          <div style={{ height: '600px', position: 'relative', width: '100%', maxWidth: '800px', zIndex: 1 }}>
            <CardSwap
              width="100%"
              height="100%"
              cardDistance={60}
              verticalDistance={70}
              delay={4000}
              pauseOnHover={false}
              skewAmount={4}
            >
              {[
                {
                  title: "IOT Odor Analytic Dashboard",
                  desc: "Real-time tracking and analysis of odor data utilizing connected IoT sensors and data visualization.",
                  tags: ["React", "Node.js", "IoT"],
                  image: iotOdorDashboardImg
                },
                {
                  title: "Fleet Management System",
                  desc: "Comprehensive system for tracking, maintaining, and managing vehicle fleets efficiently.",
                  tags: ["Next.js", "PostgreSQL", "Tailwind"],
                  image: fleetManagementImg
                },
                {
                  title: "Pickleball Booking System",
                  desc: "Court booking system featuring user reservations and a comprehensive admin management dashboard.",
                  tags: ["React", "Firebase", "Tailwind"],
                  image: pickleballBookingImg
                },
                {
                  title: "Company Landing Page",
                  desc: "Modern, responsive, and high-performance landing page designed to enhance corporate online presence.",
                  tags: ["React", "Vite", "Tailwind"],
                  image: companyLandingImg
                },
                {
                  title: "Admin Dashboard",
                  desc: "Centralized analytics dashboard providing business intelligence and user management capabilities.",
                  tags: ["React", "Typescript", "Tailwind"],
                  image: adminDashboardImg
                },
                {
                  title: "E-Commerce Platform",
                  desc: "Full-stack e-commerce platform including a management dashboard and secure payment system integration.",
                  tags: ["Next.js", "Node.js", "PostgreSQL"],
                  image: ecommerceDashboardImg
                },
                {
                  title: "Agentic Operating System (AOS)",
                  desc: "Next-generation operating system powered by autonomous agents to handle complex workflows.",
                  tags: ["Python", "AI", "System"],
                  image: agenticOsImg
                },
                {
                  title: "Cognitive Architecture & LTM",
                  desc: "Advanced AI system featuring cognitive architecture and Long-Term Memory (LTM) for continuous learning.",
                  tags: ["Python", "TensorFlow", "AI"],
                  image: cognitiveArchitectureImg
                },
                {
                  title: "Local-Edge AI",
                  desc: "Deployment of highly efficient machine learning models running locally on edge devices for fast inference.",
                  tags: ["Python", "TensorFlow", "Edge Computing"],
                  image: localEdgeAiImg
                },
                {
                  title: "Multi-Agent Dev Env",
                  desc: "Robust environment designed specifically for developing, testing, and deploying multi-agent systems.",
                  tags: ["Typescript", "Node.js", "React"],
                  image: multiAgentEnvImg
                },
                {
                  title: "IoT Cleaning Monitor",
                  desc: "Mobile IoT monitoring system designed for the cleaning department to track tasks and equipment.",
                  tags: ["React Native", "IoT", "Node.js"],
                  image: iotCleaningMonitorImg
                },
                {
                  title: "Homestay Landing Page",
                  desc: "Elegant, fully responsive landing page optimized for homestay bookings and promotions.",
                  tags: ["React", "Vite", "Tailwind"],
                  image: homestayLandingImg
                },
                {
                  title: "Inventory Dashboard",
                  desc: "Comprehensive inventory management system integrated with an intuitive analytics dashboard.",
                  tags: ["Next.js", "PostgreSQL", "Tailwind"],
                  image: inventoryDashboardImg
                },
                {
                  title: "Travel System",
                  desc: "End-to-end travel booking platform featuring itinerary management and real-time updates.",
                  tags: ["React", "Firebase", "Stripe"],
                  image: travelSystemImg
                },
                {
                  title: "Document Control",
                  desc: "Highly secure document control and version management system for enterprise compliance.",
                  tags: ["React", "Node.js", "MongoDB"],
                  image: docControlSystemImg
                },
                {
                  title: "LocalLLM Desktop App",
                  desc: "Cross-platform desktop application to run and manage Large Language Models entirely locally.",
                  tags: ["Electron", "Python", "React"],
                  image: localllmAppImg
                },
                {
                  title: "Corporation Management",
                  desc: "Enterprise-grade corporation management and workflow automation system.",
                  tags: ["Next.js", "PostgreSQL", "Docker"],
                  image: corpManagementImg
                },
                {
                  title: "Job Offering System",
                  desc: "Dynamic platform connecting employers with job seekers through advanced matching algorithms.",
                  tags: ["React", "Node.js", "Tailwind"],
                  image: socialAppImg
                },
                {
                  title: "Toilet Monitoring System",
                  desc: "IoT-based toilet monitoring and maintenance tracking system for facility management.",
                  tags: ["React Native", "IoT", "Firebase"],
                  image: aiDashboardImg
                }
              ].map((project, i) => (
                <Card
                  key={i}
                  customClass="project-card"
                  style={{
                    background: 'rgba(20, 20, 20, 0.4)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    borderWidth: '1px',
                    padding: '24px',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)', pointerEvents: 'none' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: '100%', height: '240px', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: '#fff', fontWeight: 600, letterSpacing: '-0.02em', position: 'relative' }}>{project.title}</h3>
                      <p style={{ fontSize: '1.05rem', color: '#ccc', lineHeight: 1.5, position: 'relative', flexGrow: 1 }}>{project.desc}</p>
                      <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative' }}>
                        {project.tags.map((tag, idx) => (
                          <span key={idx} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.05)' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </section>

        {/* Clients Section */}
        <Clients />

        {/* Contact Section */}
        <section id="contact" style={{ padding: '100px 40px', color: 'white', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>Let's Build Something Great</h2>
            <p style={{ marginBottom: '50px', fontSize: '1.2rem', opacity: 0.7, maxWidth: '500px', margin: '0 auto 50px' }}>
              Fill out the form below to pitch your project, upload files, and send it directly to my inbox.
            </p>

            <form 
              action="https://formsubmit.co/mmmm.muaz03@gmail.com" 
              method="POST" 
              encType="multipart/form-data"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                padding: '40px',
                textAlign: 'left',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="workflow_details" value={workflowDetails} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    placeholder="John Labu"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s, box-shadow 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                      e.target.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s, box-shadow 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                      e.target.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="title" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Subject / Project Title</label>
                <input 
                  type="text" 
                  id="title"
                  name="title" 
                  required 
                  placeholder="E.g., Web App Development Inquiry"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                    e.target.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="description" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Message / Description</label>
                <textarea 
                  id="description"
                  name="description" 
                  required 
                  rows="5"
                  placeholder="Outline the details of your inquiry or project here..."
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                    e.target.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '10px' }}>
                {/* Image Upload */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Reference Image</span>
                  <label 
                    htmlFor="image-upload" 
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px dashed rgba(255, 255, 255, 0.15)',
                      borderRadius: '12px',
                      padding: '20px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      minHeight: '120px',
                      transition: 'border-color 0.3s, background-color 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    {imagePreview ? (
                      <img src={imagePreview} alt="Upload Preview" style={{ maxWidth: '100%', maxHeight: '80px', borderRadius: '6px', objectFit: 'contain' }} />
                    ) : (
                      <>
                        <FaImage size={28} style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }} />
                        <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Upload Reference Image</span>
                      </>
                    )}
                    <input 
                      type="file" 
                      id="image-upload" 
                      name="image" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      style={{ display: 'none' }} 
                    />
                  </label>
                </div>

                {/* File Upload */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Project Files / Brief</span>
                  <label 
                    htmlFor="file-upload" 
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px dashed rgba(255, 255, 255, 0.15)',
                      borderRadius: '12px',
                      padding: '20px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      minHeight: '120px',
                      transition: 'border-color 0.3s, background-color 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    <FaFolderOpen size={28} style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }} />
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Upload Doc/PDF/ZIP</span>
                    <input 
                      type="file" 
                      id="file-upload" 
                      name="attachment" 
                      accept=".pdf,.doc,.docx,.zip,.rar,.txt"
                      style={{ display: 'none' }} 
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const label = e.currentTarget.parentElement.querySelector('span:nth-child(2)');
                          if (label) label.textContent = file.name;
                        }
                      }}
                    />
                  </label>
                </div>
              </div>

              <WorkflowBuilder onWorkflowChange={setWorkflowDetails} />

              <button 
                type="submit"
                style={{
                  marginTop: '15px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px 30px',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)',
                  alignSelf: 'center',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(168, 85, 247, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(168, 85, 247, 0.3)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
