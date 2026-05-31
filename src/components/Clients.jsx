import React from 'react';
import Carousel from './Carousel';
import airSelangorLogo from '../assets/air-selangor-real.png';
import kotasasLogo from '../assets/kotasas-real.png';

const clients = [
    {
        title: "Air Selangor",
        description: "River Odor Monitoring System: IoT-based real-time environmental monitoring solution.",
        id: 1,
        icon: <img src={airSelangorLogo} alt="Air Selangor" className="w-full h-full object-contain" />
    },
    {
        title: "Kotasas",
        description: "Smart Toilet (Orasid): Advanced smart facility management system.",
        id: 2,
        icon: <img src={kotasasLogo} alt="Kotasas" className="w-full h-full object-contain" />
    },
    // Adding duplicates for loop effect if needed or more items
    {
        title: "Future Partner",
        description: "Collaborate with us to build the next generation of digital solutions.",
        id: 3,
        icon: <div className="w-full h-full bg-white/20 rounded-full" />
    }
];

export default function Clients() {
    return (
        <section id="clients" className="py-24 px-4 relative overflow-hidden flex flex-col items-center">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tighter">
                    Client <span className="text-purple-400">Collaborations</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Partnering with industry leaders to deliver impactful digital solutions.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 relative z-10">
                {/* Air Selangor Card */}
                <div className="group relative w-[320px] h-[320px] rounded-full bg-zinc-900/40 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:scale-105 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-20 h-20 mb-6 relative z-10 p-2 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
                        <img src={airSelangorLogo} alt="Air Selangor" className="w-full h-full object-contain brightness-0 invert opacity-90" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10 group-hover:text-blue-200 transition-colors">Air Selangor</h3>
                    <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                        River Odor Monitoring System: IoT-based real-time environmental monitoring solution.
                    </p>
                </div>

                {/* Tasek Kotasas Card */}
                <div className="group relative w-[320px] h-[320px] rounded-full bg-zinc-900/40 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:scale-105 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-20 h-20 mb-6 relative z-10 p-2 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
                        <img src={kotasasLogo} alt="Tasek Kotasas" className="w-full h-full object-contain brightness-0 invert opacity-90" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10 group-hover:text-amber-200 transition-colors">Tasek Kotasas</h3>
                    <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                        Smart Toilet (Orasid): Advanced smart facility management system.
                    </p>
                </div>
            </div>
        </section>
    );
}
