import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col relative overflow-hidden">
            {/* Background Accents - Subtle & Modern */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Navbar Placeholder */}
            <nav className="p-6 flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Globe size={18} className="text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Pathway Live</span>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col justify-center items-center text-center px-4 z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-blue-300 font-medium">
                        Run Real-Time AI Analytics ⚡
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                >
                    Turning Live Data <br /> Into Instant Intelligence.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                >
                    A next-generation RAG engine that connects directly to live global data streams. Stop chatting with the past. Start querying the now.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link to="/app" className="group relative px-8 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
                        Launch Console
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href="https://pathway.com" target="_blank" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all backdrop-blur-sm">
                        View Documentation
                    </a>
                </motion.div>
            </main>

            {/* Features Strip */}
            <div className="border-t border-white/5 bg-white/[0.02] backdrop-blur-sm py-8 z-10 w-full">
                <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 text-gray-400 opacity-80">
                    <div className="flex items-center gap-3">
                        <Zap size={20} className="text-yellow-400" />
                        <span className="font-medium text-sm">Latency &lt; 200ms</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Cpu size={20} className="text-purple-400" />
                        <span className="font-medium text-sm">Gemini Pro Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Globe size={20} className="text-green-400" />
                        <span className="font-medium text-sm">Global Scraping</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
