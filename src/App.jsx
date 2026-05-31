import React, { useState } from 'react';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';
import LiquidEther from './components/LiquidEther.jsx';
import LogoLoop from './components/LogoLoop.jsx';
import CardSwap, { Card } from './components/CardSwap.jsx';
import FloatingShape from './components/FloatingShape.jsx';
import Clients from './components/Clients.jsx';
import { LiquidButton, LiquidContainer } from '@/components/ui/liquid-glass-button';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiThreedotjs, SiNodedotjs, SiGraphql, SiCplusplus, SiPython } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { DiMsqlServer } from "react-icons/di";
import { BsBarChartFill } from "react-icons/bs";
import './App.css';

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
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.35}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', pointerEvents: 'none' }}>
          <h1 style={{ fontSize: '5vw', margin: 0, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, textAlign: 'center', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            Yeah that's me, <br />
            <span style={{ color: '#FF9FFC' }}>Developer u looking for</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginTop: '20px', maxWidth: '600px', textAlign: 'center', opacity: 0.9, lineHeight: 1.6, textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
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
                { title: "IOT Odor Analytic Dashboard", desc: "Real-time tracking and analysis of odor data using IoT sensors.", color: "#1a1a1a" },
                { title: "Fleet Management System", desc: "Complete vehicle tracking and fleet operation management platform.", color: "#222" },
                { title: "Pickleball Booking System", desc: "User booking platform and admin dashboard for pickleball courts.", color: "#151515" },
                { title: "Company Landing Page", desc: "Modern, responsive landing page designed for corporate presence.", color: "#1c1c1c" },
                { title: "Admin Dashboard", desc: "Centralized dashboard for analytics and user management.", color: "#1a1a1a" },
                { title: "E-commerce Platform", desc: "Full online store with admin dashboard and integrated payment system.", color: "#222" },
                { title: "Agentic Operating System (AOS)", desc: "Next-generation operating system driven by autonomous agents.", color: "#151515" },
                { title: "Cognitive Architecture & LTM", desc: "Advanced AI cognitive architecture with Long-Term Memory capabilities.", color: "#1c1c1c" },
                { title: "Local-Edge AI", desc: "Efficient machine learning models deployed directly to edge devices.", color: "#1a1a1a" },
                { title: "Multi-Agent Dev Env", desc: "Development environment tailored for multi-agent systems.", color: "#222" },
                { title: "IoT Cleaning Monitor", desc: "Mobile IoT monitoring system for cleaning department operations.", color: "#151515" },
                { title: "Homestay Landing Page", desc: "Elegant and user-friendly landing page for homestay bookings.", color: "#1c1c1c" },
                { title: "Inventory Dashboard", desc: "Comprehensive inventory management system with analytics dashboard.", color: "#1a1a1a" },
                { title: "Travel System", desc: "End-to-end travel booking and itinerary management platform.", color: "#222" },
                { title: "Document Control", desc: "Secure document control and version management system.", color: "#151515" },
                { title: "LocalLLM Desktop App", desc: "Desktop application for running Large Language Models locally.", color: "#1c1c1c" },
                { title: "Corporation Management", desc: "Enterprise-grade corporation management and workflow system.", color: "#1a1a1a" },
                { title: "Job Offering System", desc: "Platform connecting employers with job seekers efficiently.", color: "#222" },
                { title: "Toilet Monitoring System", desc: "IoT-based toilet monitoring and maintenance tracking system.", color: "#151515" }
              ].map((project, i) => (
                <Card
                  key={i}
                  customClass="project-card"
                  style={{
                    background: 'rgba(20, 20, 20, 0.4)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    borderWidth: '1px'
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)', pointerEvents: 'none' }} />
                  <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#fff', fontWeight: 600, letterSpacing: '-0.02em', position: 'relative' }}>{project.title}</h3>
                  <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.6, position: 'relative' }}>{project.desc}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', gap: '10px', position: 'relative' }}>
                    <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.05)' }}>React</span>
                    <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.05)' }}>Node.js</span>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </section>

        {/* Clients Section */}
        <Clients />

        {/* Contact Section */}
        <section id="contact" style={{ padding: '100px 40px', color: 'white', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Ready to start?</h2>
          <p style={{ marginBottom: '40px', fontSize: '1.2rem', opacity: 0.7 }}>Let's create something amazing together.</p>
          <a href="mailto:hello@example.com" style={{ display: 'inline-block', padding: '16px 48px', background: 'white', color: 'black', borderRadius: '50px', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }}>Get in Touch</a>
        </section>

      </div>
    </div>
  );
}

export default App;
