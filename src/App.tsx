import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Activity, Brain, LayoutDashboard, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import BeginnerDashboard from './pages/BeginnerDashboard';
import AdvancedDashboard from './pages/AdvancedDashboard';
import Models from './pages/Models';
import Benchmarks from './pages/Benchmarks';

function App() {
  const navItems = [
    { path: '/', label: 'Simple Dashboard', icon: LayoutDashboard },
    { path: '/advanced', label: 'Nerd Dashboard', icon: Zap },
    { path: '/models', label: 'Models', icon: Brain },
    { path: '/benchmarks', label: 'Benchmarks', icon: Activity },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<BeginnerDashboard />} />
            <Route path="/advanced" element={<AdvancedDashboard />} />
            <Route path="/models" element={<Models />} />
            <Route path="/benchmarks" element={<Benchmarks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;