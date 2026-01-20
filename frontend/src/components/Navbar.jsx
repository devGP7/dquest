import React from 'react';
import { Activity, Github, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center border-b border-white/10"
        >
            <div className="flex items-center space-x-3">
                <div className="bg-pathway-500/20 p-2 rounded-lg">
                    <Activity className="text-pathway-500 w-6 h-6 animate-pulse-fast" />
                </div>
                <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Pathway Live AI
                    </h1>
                    <p className="text-xs text-gray-400 font-mono">Dynamic RAG Engine</p>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <a href="https://pathway.com" target="_blank" rel="noopener noreferrer"
                    className="hidden md:flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Terminal size={16} />
                    <span>Docs</span>
                </a>
                <a href="https://github.com/pathwaycom/pathway" target="_blank" rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Github size={20} />
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
