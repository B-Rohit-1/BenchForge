import React, { useState } from 'react';

const CreateBenchmark = ({ onBenchmarkCreated }) => {
  const [model, setModel] = useState('');
  const [dataset, setDataset] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/benchmarks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, dataset: [dataset] }),
    });
    const newBenchmark = await response.json();
    onBenchmarkCreated(newBenchmark);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="model" className="block text-sm font-medium text-gray-700">
          Model
        </label>
        <input
          type="text"
          name="model"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="dataset" className="block text-sm font-medium text-gray-700">
          Dataset
        </label>
        <textarea
          name="dataset"
          id="dataset"
          value={dataset}
          onChange={(e) => setDataset(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Create Benchmark
      </button>
    </form>
  );
};

export default CreateBenchmark;
