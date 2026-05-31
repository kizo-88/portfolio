import React, { useState } from 'react';
import { LiquidContainer } from '@/components/ui/liquid-glass-button';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaDatabase, FaMobileAlt, FaSearch } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiDocker, SiTensorflow, SiVite } from 'react-icons/si';

import iotOdorDashboardImg from '../assets/iot_odor_dashboard_1780215127104.png';
import fleetManagementImg from '../assets/fleet_management_1780215142704.png';
import pickleballBookingImg from '../assets/pickleball_booking_1780215165753.png';
import companyLandingImg from '../assets/company_landing_1780215181913.png';
import adminDashboardImg from '../assets/admin_dashboard_1780215213097.png';
import ecommerceDashboardImg from '../assets/ecommerce_dashboard_1780215227709.png';
import agenticOsImg from '../assets/agentic_os_1780215244839.png';
import cognitiveArchitectureImg from '../assets/cognitive_architecture_1780215262175.png';
import localEdgeAiImg from '../assets/local_edge_ai_1780215278661.png';
import multiAgentEnvImg from '../assets/multi_agent_env_1780215303756.png';
import iotCleaningMonitorImg from '../assets/iot_cleaning_monitor_1780215323477.png';
import homestayLandingImg from '../assets/homestay_landing_1780215338906.png';
import inventoryDashboardImg from '../assets/inventory_dashboard_1780215363502.png';
import travelSystemImg from '../assets/travel_system_1780215380155.png';
import docControlSystemImg from '../assets/doc_control_system_1780215403691.png';
import localllmAppImg from '../assets/localllm_app_1780215419776.png';
import corpManagementImg from '../assets/corp_management_1780215436956.png';
import socialAppImg from '../assets/social-app.png';
import aiDashboardImg from '../assets/ai-dashboard.png';

const allProjects = [
    {
        title: "IOT Odor Analytic Dashboard",
        description: "Real-time tracking and analysis of odor data utilizing connected IoT sensors and data visualization.",
        tags: ["React", "Node.js", "IoT"],
        type: "Web App",
        image: iotOdorDashboardImg,
        icons: [<FaReact key="1"/>, <FaNodeJs key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
        title: "Fleet Management System",
        description: "Comprehensive system for tracking, maintaining, and managing vehicle fleets efficiently.",
        tags: ["Next.js", "PostgreSQL", "Tailwind"],
        type: "Web App",
        image: fleetManagementImg,
        icons: [<SiNextdotjs key="1"/>, <SiPostgresql key="2"/>, <SiTailwindcss key="3"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-emerald-600/20 to-teal-600/20"
    },
    {
        title: "Pickleball Booking System",
        description: "Court booking system featuring user reservations and a comprehensive admin management dashboard.",
        tags: ["React", "Firebase", "Tailwind"],
        type: "Web App",
        image: pickleballBookingImg,
        icons: [<FaReact key="1"/>, <SiFirebase key="2"/>, <SiTailwindcss key="3"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-orange-600/20 to-red-600/20"
    },
    {
        title: "Company Landing Page",
        description: "Modern, responsive, and high-performance landing page designed to enhance corporate online presence.",
        tags: ["React", "Vite", "Tailwind"],
        type: "Web App",
        image: companyLandingImg,
        icons: [<FaReact key="1"/>, <SiVite key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-pink-600/20 to-rose-600/20"
    },
    {
        title: "Admin Dashboard",
        description: "Centralized analytics dashboard providing business intelligence and user management capabilities.",
        tags: ["React", "Typescript", "Tailwind"],
        type: "Web App",
        image: adminDashboardImg,
        icons: [<FaReact key="1"/>, <SiTypescript key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-cyan-600/20 to-blue-600/20"
    },
    {
        title: "E-Commerce with Dashboard & Payments",
        description: "Full-stack e-commerce platform including a management dashboard and secure payment system integration.",
        tags: ["Next.js", "Node.js", "PostgreSQL"],
        type: "Web App",
        image: ecommerceDashboardImg,
        icons: [<SiNextdotjs key="1"/>, <FaNodeJs key="2"/>, <SiPostgresql key="3"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-yellow-600/20 to-amber-600/20"
    },
    {
        title: "Agentic Operating System (AOS)",
        description: "Next-generation operating system powered by autonomous agents to handle complex workflows.",
        tags: ["Python", "AI", "System"],
        type: "AI/ML",
        image: agenticOsImg,
        icons: [<FaPython key="1"/>, <SiDocker key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-purple-600/20 to-fuchsia-600/20"
    },
    {
        title: "Cognitive Architecture & LTM System",
        description: "Advanced AI system featuring cognitive architecture and Long-Term Memory (LTM) for continuous learning.",
        tags: ["Python", "TensorFlow", "AI"],
        type: "AI/ML",
        image: cognitiveArchitectureImg,
        icons: [<FaPython key="1"/>, <SiTensorflow key="2"/>, <FaDatabase key="3"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-indigo-600/20 to-blue-600/20"
    },
    {
        title: "Local-Edge AI",
        description: "Deployment of highly efficient machine learning models running locally on edge devices for fast inference.",
        tags: ["Python", "TensorFlow", "Edge Computing"],
        type: "AI/ML",
        image: localEdgeAiImg,
        icons: [<FaPython key="1"/>, <SiTensorflow key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-green-600/20 to-emerald-600/20"
    },
    {
        title: "Multi-Agent Development Environment",
        description: "Robust environment designed specifically for developing, testing, and deploying multi-agent systems.",
        tags: ["Typescript", "Node.js", "React"],
        type: "Web App",
        image: multiAgentEnvImg,
        icons: [<SiTypescript key="1"/>, <FaNodeJs key="2"/>, <FaReact key="3"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-red-600/20 to-orange-600/20"
    },
    {
        title: "IoT Cleaning Monitor",
        description: "Mobile IoT monitoring system designed for the cleaning department to track tasks and equipment.",
        tags: ["React Native", "IoT", "Node.js"],
        type: "Mobile",
        image: iotCleaningMonitorImg,
        icons: [<FaMobileAlt key="1"/>, <FaNodeJs key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-teal-600/20 to-emerald-600/20"
    },
    {
        title: "Homestay Landing Page",
        description: "Elegant, fully responsive landing page optimized for homestay bookings and promotions.",
        tags: ["React", "Vite", "Tailwind"],
        type: "Web App",
        image: homestayLandingImg,
        icons: [<FaReact key="1"/>, <SiVite key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-pink-600/20 to-rose-600/20"
    },
    {
        title: "Inventory Dashboard",
        description: "Comprehensive inventory management system integrated with an intuitive analytics dashboard.",
        tags: ["Next.js", "PostgreSQL", "Tailwind"],
        type: "Web App",
        image: inventoryDashboardImg,
        icons: [<SiNextdotjs key="1"/>, <SiPostgresql key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-blue-600/20 to-cyan-600/20"
    },
    {
        title: "Travel System",
        description: "End-to-end travel booking platform featuring itinerary management and real-time updates.",
        tags: ["React", "Firebase", "Stripe"],
        type: "Web App",
        image: travelSystemImg,
        icons: [<FaReact key="1"/>, <SiFirebase key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-orange-600/20 to-amber-600/20"
    },
    {
        title: "Document Control System",
        description: "Highly secure document control and version management system for enterprise compliance.",
        tags: ["React", "Node.js", "MongoDB"],
        type: "Web App",
        image: docControlSystemImg,
        icons: [<FaReact key="1"/>, <FaDatabase key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-purple-600/20 to-indigo-600/20"
    },
    {
        title: "LocalLLM Desktop App",
        description: "Cross-platform desktop application to run and manage Large Language Models entirely locally.",
        tags: ["Electron", "Python", "React"],
        type: "AI/ML",
        image: localllmAppImg,
        icons: [<FaReact key="1"/>, <FaPython key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-gray-600/20 to-slate-600/20"
    },
    {
        title: "Corporation Management",
        description: "Enterprise-grade corporation management and workflow automation system.",
        tags: ["Next.js", "PostgreSQL", "Docker"],
        type: "Web App",
        image: corpManagementImg,
        icons: [<SiNextdotjs key="1"/>, <SiDocker key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-red-600/20 to-rose-600/20"
    },
    {
        title: "Job Offering System",
        description: "Dynamic platform connecting employers with job seekers through advanced matching algorithms.",
        tags: ["React", "Node.js", "Tailwind"],
        type: "Web App",
        image: socialAppImg,
        icons: [<FaReact key="1"/>, <FaNodeJs key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-green-600/20 to-teal-600/20"
    },
    {
        title: "Toilet Monitoring System",
        description: "IoT-based toilet monitoring and maintenance tracking system for facility management.",
        tags: ["React Native", "IoT", "Firebase"],
        type: "Mobile",
        image: aiDashboardImg,
        icons: [<FaMobileAlt key="1"/>, <SiFirebase key="2"/>],
        links: { demo: "#", code: "#" },
        gradient: "from-cyan-600/20 to-blue-600/20"
    }
];

const projectTypes = ["All", "Web App", "Mobile", "AI/ML"];

export default function Project() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("All");

    const filteredProjects = allProjects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === "All" || project.type === selectedType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="min-h-screen bg-[#050505] text-white p-8 font-sans selection:bg-purple-500/30 overflow-hidden relative">
            {/* Background 3D Decorations */}
            <div className="fixed top-20 left-10 w-64 h-64 opacity-20 blur-[2px] pointer-events-none transform -rotate-12 z-0">
                <img src="/3dasset/0001.png" alt="bg-decor" className="w-full h-full object-contain" />
            </div>
            <div className="fixed bottom-20 right-10 w-96 h-96 opacity-20 blur-[2px] pointer-events-none transform rotate-12 z-0">
                <img src="/3dasset/0002.png" alt="bg-decor" className="w-full h-full object-contain" />
            </div>
            <div className="fixed top-1/2 left-1/4 w-80 h-80 opacity-10 blur-[4px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-0">
                <img src="/3dasset/0003.png" alt="bg-decor" className="w-full h-full object-contain" />
            </div>

            <nav style={{ padding: '20px 40px', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, color: 'white', display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box', alignItems: 'center', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <a href="/" style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em', textDecoration: 'none', color: 'white' }}></a>
                <LiquidContainer className="px-8 py-2 gap-8 hidden md:flex">
                    <a href="/#hero" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8, transition: 'opacity 0.2s', fontWeight: 500 }} className="hover:opacity-100 hover:text-purple-300">Home</a>
                    <a href="/#services" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8, transition: 'opacity 0.2s', fontWeight: 500 }} className="hover:opacity-100 hover:text-purple-300">Services</a>
                    <a href="/#journey" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8, transition: 'opacity 0.2s', fontWeight: 500 }} className="hover:opacity-100 hover:text-purple-300">Journey</a>
                    <a href="/#work" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8, transition: 'opacity 0.2s', fontWeight: 500 }} className="hover:opacity-100 hover:text-purple-300">Work</a>
                </LiquidContainer>
                <LiquidButton href="/#contact" variant="default" size="default" style={{ textDecoration: 'none', color: 'white' }}>
                    Let's Talk
                </LiquidButton>
            </nav>

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 relative z-10">
                <div className="mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                        Selected Works
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
                        A curated collection of projects that demonstrate my passion for building scalable, user-centric, and performance-optimized digital solutions.
                    </p>

                    {/* Search and Sort Controls */}
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-zinc-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <div className="relative w-full md:w-96">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                            {projectTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${selectedType === type
                                            ? 'bg-white text-black shadow-lg shadow-white/10'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group relative rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 flex flex-col h-full">

                            {/* Gradient Background Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 flex gap-2">
                                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium border border-white/10">
                                        {project.type}
                                    </span>
                                </div>
                            </div>

                            <div className="relative p-8 flex flex-col flex-grow z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-3 text-2xl text-white/50 group-hover:text-white transition-colors duration-300">
                                        {project.icons.map((icon, i) => (
                                            <span key={i}>{icon}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.links.code} title="View Code" className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white/60 hover:text-white transition-all duration-300">
                                            <FaGithub size={18} />
                                        </a>
                                        <a href={project.links.demo} title="Live Demo" className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white/60 hover:text-white transition-all duration-300">
                                            <FaExternalLinkAlt size={16} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300 group-hover:bg-white/10 group-hover:border-white/10 transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedType("All"); }}
                            className="mt-4 text-purple-400 hover:text-purple-300 underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}


            </div>
        </div>
    );
}
