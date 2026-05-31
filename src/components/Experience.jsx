import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const experiences = [
    {
        year: "2025 - 2026",
        title: "Executive System Developer",
        company: "UMPSA Holdings",
        description: "Spearheading the development and maintenance of core enterprise systems. implementing scalable solutions and driving digital transformation initiatives.",
        icon: <FaBriefcase />,
        type: "work",
        tech: ["React", "Express", "PostgreSQL", "System Architecture"]
    },
    {
        year: "2024 - 2025",
        title: "Apprentice",
        company: "UMPSA Holdings",
        description: "Engaged in intensive training and hands-on development in a professional environment, contributing to real-world projects and refining technical skills.",
        icon: <FaBriefcase />,
        type: "work",
        tech: ["Web Development", "Database Management", "Agile"]
    },
    {
        year: "2024",
        title: "Internship",
        company: "UMPSA Holdings",
        description: "Gained foundational industry experience, assisting in system updates and participating in the software development lifecycle.",
        icon: <FaBriefcase />,
        type: "work",
        tech: ["Frontend Basics", "Backend Support", "Team Collaboration"]
    },
    {
        year: "2021 - 2024",
        title: "Bachelor of Computer Science",
        company: "UNIVERSITI MALAYSIA PAHANG AL SULTAN ABDULLAH (UMPSA)",
        description: "Specialized in Computer Science, building a strong theoretical and practical foundation in programming, algorithms, and software engineering principles.",
        icon: <FaGraduationCap />,
        type: "education",
        tech: ["Software Engineering", "Algorithms", "Data Structures"]
    },
];

export default function Experience() {
    return (
        <section id="journey" className="py-32 px-8 relative">
            <div className="max-w-5xl mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tighter">My <span className="text-purple-400">Journey</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A timeline of my professional career and educational background, marking milestones in my development.
                    </p>
                </div>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/20 to-transparent -translate-x-1/2"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>

                                {/* Content */}
                                <div className="flex-1 md:w-1/2 pl-12 md:pl-0 relative">
                                    <div className={`p-8 rounded-2xl bg-zinc-900/60 border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 relative ${i % 2 === 0 ? 'md:ml-12' : 'md:mr-12'} md:text-left z-10 overflow-visible`}>
                                        
                                        {/* 3D Asset Accessory */}
                                        <div className={`absolute -z-10 w-24 h-24 sm:w-32 sm:h-32 opacity-30 group-hover:opacity-80 transition-all duration-700 pointer-events-none transform group-hover:scale-110 ${i % 2 === 0 ? '-right-8 -top-8 group-hover:-translate-y-4 group-hover:translate-x-2' : '-left-8 -top-8 group-hover:-translate-y-4 group-hover:-translate-x-2'}`}>
                                            <img src={`/3dasset/000${(i % 9) + 1}.png`} alt="decoration" className="w-full h-full object-contain drop-shadow-2xl" />
                                        </div>

                                        <div className="text-sm text-purple-400 font-mono mb-2 tracking-wider uppercase font-semibold relative z-10">{exp.year}</div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors relative z-10">{exp.title}</h3>
                                        <div className="text-lg text-white/60 mb-4 font-medium relative z-10">{exp.company}</div>
                                        <p className="text-gray-400 leading-relaxed mb-6 text-sm relative z-10">{exp.description}</p>
                                        <div className="flex gap-2 flex-wrap relative z-10">
                                            {exp.tech.map((t, j) => (
                                                <span key={j} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-950 border-4 border-zinc-900 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300 mt-8 md:mt-0">
                                    <div className="text-purple-400 text-sm">
                                        {exp.icon}
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
