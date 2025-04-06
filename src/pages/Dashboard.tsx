import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, RadialBarChart, RadialBar } from 'recharts';
import { Brain, Clock, Server, Lightbulb, Cpu, ToggleLeft } from 'lucide-react';

const performanceData = [
  { name: 'Model A', accuracy: 85, f1Score: 0.82, latency: 120 },
  { name: 'Model B', accuracy: 92, f1Score: 0.89, latency: 150 },
  { name: 'Model C', accuracy: 78, f1Score: 0.75, latency: 90 },
  { name: 'Model D', accuracy: 95, f1Score: 0.93, latency: 200 },
];

const latencyData = [
  { name: '1h', value: 45 },
  { name: '2h', value: 52 },
  { name: '3h', value: 48 },
  { name: '4h', value: 43 },
  { name: '5h', value: 50 },
];

const resourceUsage = [
  { name: 'CPU', value: 65, fill: '#3B82F6' },
  { name: 'Memory', value: 45, fill: '#10B981' },
  { name: 'GPU', value: 80, fill: '#8B5CF6' },
];

const Dashboard = () => {
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);

  const BeginnerDashboard = () => (
    <>
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
              <p className="text-2xl font-bold text-yellow-600">92%</p>
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
    </>
  );

  const AdvancedDashboard = () => (
    <>
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
              <h3 className="text-lg font-semibold text-gray-900">Latency</h3>
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
    </>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button
          onClick={() => setIsAdvancedMode(!isAdvancedMode)}
          className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ToggleLeft className={`h-5 w-5 ${isAdvancedMode ? 'text-blue-600' : 'text-gray-600'}`} />
          <span className="font-medium">{isAdvancedMode ? 'Advanced Mode' : 'Simple Mode'}</span>
        </button>
      </div>

      {isAdvancedMode ? <AdvancedDashboard /> : <BeginnerDashboard />}
    </div>
  );
};

export default Dashboard;