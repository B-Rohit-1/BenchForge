import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, Clock, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const performanceData = [
  { name: 'Model A', accuracy: 85 },
  { name: 'Model B', accuracy: 92 },
  { name: 'Model C', accuracy: 78 },
  { name: 'Model D', accuracy: 95 },
];

const BeginnerDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Simple Dashboard</h1>
        <Link
          to="/advanced"
          className="flex items-center space-x-2 px-4 py-2 rounded-md bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
        >
          <span className="font-medium">Switch to Nerd Mode 🤓</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Active Models</h3>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Lightbulb className="h-8 w-8 text-yellow-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Success Rate</h3>
              <p className="text-2xl font-bold text-yellow-600">92% 🎯</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Clock className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
              <p className="text-2xl font-bold text-green-600">Fast ⚡️</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Model Performance</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="accuracy" name="Success Rate %" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BeginnerDashboard;