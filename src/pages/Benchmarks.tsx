import React, { useState, useEffect } from 'react';
import { Play, Clock, CheckCircle, XCircle } from 'lucide-react';
import CreateBenchmark from '../components/CreateBenchmark';

const Benchmarks = () => {
  const [benchmarks, setBenchmarks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBenchmarks = async () => {
      const response = await fetch('/api/benchmarks');
      const data = await response.json();
      setBenchmarks(data);
    };
    fetchBenchmarks();
  }, []);

  const handleBenchmarkCreated = (newBenchmark) => {
    setBenchmarks([...benchmarks, newBenchmark]);
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Benchmarks</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <Play className="h-5 w-5" />
          <span>New Benchmark</span>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <CreateBenchmark onBenchmarkCreated={handleBenchmarkCreated} />
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Model
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {benchmarks.map((benchmark) => (
              <tr key={benchmark._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{benchmark.model}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {benchmark.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    )}
                    <span className="text-sm text-gray-900 capitalize">{benchmark.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(benchmark.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Benchmarks;
