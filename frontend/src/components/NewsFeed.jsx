import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, RefreshCw, TrendingUp } from 'lucide-react';

const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [isLive, setIsLive] = useState(true);

    // Polling for "Live" updates
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:8000/news');
                setNews(response.data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews(); // Initial fetch

        // Poll every 2 seconds
        const interval = setInterval(fetchNews, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full flex flex-col">
            {/* Header removed: Now handled in App Layout */}

            <div className="flex-1 overflow-y-auto pr-2 space-y-4 relative">
                <AnimatePresence>
                    {news.map((item, index) => (
                        <motion.div
                            key={`${item.title}-${index}`} // unique key
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card p-4 border-l-4 border-l-pathway-500 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                <TrendingUp size={40} />
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-pathway-500 uppercase tracking-wider">{item.topic || 'General'}</span>
                                <span className="text-xs text-gray-500">{new Date(item.published_at).toLocaleTimeString()}</span>
                            </div>

                            <h3 className="text-md font-medium text-white mb-2 leading-tight">{item.title}</h3>
                            <p className="text-sm text-gray-400 line-clamp-2">{item.content}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {news.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-40 text-gray-500">
                        <RefreshCw className="animate-spin mb-2" />
                        <p>Waiting for live stream...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsFeed;
