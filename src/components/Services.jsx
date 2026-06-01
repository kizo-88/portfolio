import PixelCard from './PixelCard';
import { FaLaptopCode, FaPalette, FaMobileAlt, FaServer, FaChartLine } from 'react-icons/fa';

const services = [
    { title: "Web Development", desc: "Performance-obsessed web apps using Next.js and React. Building scalable and fast applications.", icon: <FaLaptopCode size={24} /> },
    { title: "UI/UX Design", desc: "Intuitive, accessible, and beautiful interfaces tailored to your brand. User-centric design approach.", icon: <FaPalette size={24} /> },
    { title: "Mobile Apps", desc: "Cross-platform mobile applications using React Native. Seamless experiences on iOS and Android.", icon: <FaMobileAlt size={24} /> },
    { title: "Backend Systems", desc: "Robust API development and database architecture. Secure and scalable server-side solutions.", icon: <FaServer size={24} /> },
    { title: "Data Analytics", desc: "Deep insights from complex datasets. Visualizing trends and patterns to drive strategic business growth.", icon: <FaChartLine size={24} /> }
];

export default function Services() {
    return (
        <section id="services" className="py-32 px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
                        What I <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Build.</span>
                    </h2>
                    <p className="text-gray-400 max-w-md text-lg text-right md:text-right">
                        Combining artistic direction with engineering precision to build digital products that perform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {services.map((item, i) => (
                        <PixelCard key={i} variant="purple" className="h-full">
                            <div className="p-8 h-full flex flex-col justify-start">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        </PixelCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
