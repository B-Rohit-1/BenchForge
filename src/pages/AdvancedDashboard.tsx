import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadialBarChart, RadialBar } from 'recharts';
import { Brain, Clock, Server, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const performanceData = [
  { name: 'Model A', accuracy: 85, f1Score: 0.82, latency: 120 },
  { name: 'Model B', accuracy: 92, f1Score: 0.89, latency: 150 },
  { name: 'Model C', accuracy: 78, f1Score: 0.75, latency: 90 },
  { name: 'Model D', accuracy: 95, f1Score: 0.93, latency: 200 },
];

const resourceUsage = [
  { name: 'CPU', value: 65, fill: '#3B82F6' },
  { name: 'Memory', value: 45, fill: '#10B981' },
  { name: 'GPU', value: 80, fill: '#8B5CF6' },
];

const AdvancedDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Nerd Dashboard</h1>
        <Link
          to="/"
          className="flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
        >
          <span className="font-medium">Switch to Simple Mode 😊</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Model Metrics</h3>
              <div className="space-y-1 mt-2">
                <p className="text-sm">
                  <span className="font-medium">Accuracy:</span> 92.5%
                </p>
                <p className="text-sm">
                  <span className="font-medium">F1 Score:</span> 0.89
                </p>
                <p className="text-sm">
                  <span className="font-medium">ROC-AUC:</span> 0.95
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Cpu className="h-8 w-8 text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">System Load</h3>
              <div className="space-y-1 mt-2">
                <p className="text-sm">
                  <span className="font-medium">CPU:</span> 65%
                </p>
                <p className="text-sm">
                  <span className="font-medium">Memory:</span> 4.2GB
                </p>
                <p className="text-sm">
                  <span className="font-medium">GPU:</span> 80%
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Server className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Latency Distribution</h3>
              <div className="space-y-1 mt-2">
                <p className="text-sm">
                  <span className="font-medium">p50:</span> 45ms
                </p>
                <p className="text-sm">
                  <span className="font-medium">p95:</span> 120ms
                </p>
                <p className="text-sm">
                  <span className="font-medium">p99:</span> 180ms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="accuracy" name="Accuracy" stroke="#3B82F6" />
                <Line type="monotone" dataKey="f1Score" name="F1 Score" stroke="#10B981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Resource Utilization</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="30%"
                outerRadius="100%"
                data={resourceUsage}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise={true}
                  dataKey="value"
                  label={{ fill: '#666', position: 'insideStart' }}
                />
                <Legend
                  iconSize={10}
                  width={120}
                  height={140}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;