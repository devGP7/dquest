import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import ChatInterface from './components/ChatInterface';
import LandingPage from './LandingPage';

const Dashboard = () => {
  return (
    <div className="relative z-10 flex flex-col h-screen bg-neutral-900">
      <Navbar />

      <main className="flex-1 w-full h-full p-3 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 h-full">

          {/* Section 1: Live Intelligence Stream (1/3 width) */}
          <div className="lg:col-span-1 h-full flex flex-col min-h-0 bg-neutral-800/50 rounded-xl border border-white/5 overflow-hidden">
            <div className="p-3 border-b border-white/5 bg-white/5 backdrop-blur-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Live Data Stream</h2>
            </div>
            <div className="flex-1 overflow-hidden relative">
              <NewsFeed />
            </div>
          </div>

          {/* Section 2: Operations Center (2/3 width) */}
          <div className="lg:col-span-2 h-full flex flex-col min-h-0 bg-neutral-800/50 rounded-xl border border-white/5 overflow-hidden">
            <div className="p-3 border-b border-white/5 bg-white/5 backdrop-blur-sm flex justify-between items-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Live Operations Agent</h2>
            </div>
            <div className="flex-1 overflow-hidden relative">
              <ChatInterface />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-pathway-500/30 font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
