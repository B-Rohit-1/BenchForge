import { query } from '../services/huggingface.js';
import client from '../db.js';

export const createBenchmark = async (req, res) => {
  try {
    const { model, dataset } = req.body;
    const db = client.db('benchforge');
    const benchmarks = db.collection('benchmarks');

    // For simplicity, we'll just run a single inference and store the result.
    // In a real application, you would process the entire dataset.
    const result = await query(model, { inputs: dataset[0] });

    const newBenchmark = {
      model,
      dataset,
      status: 'running',
      createdAt: new Date(),
    };

    const insertedBenchmark = await benchmarks.insertOne(newBenchmark);

    const result = await query(model, { inputs: dataset[0] });

    await benchmarks.updateOne(
      { _id: insertedBenchmark.insertedId },
      { $set: { status: 'completed', result } }
    );

    res.json(newBenchmark);
  } catch (error) {
    console.error('Error creating benchmark:', error);
    res.status(500).json({ error: 'Failed to create benchmark' });
  }
};

export const getBenchmarks = async (req, res) => {
  try {
    const db = client.db('benchforge');
    const benchmarks = await db.collection('benchmarks').find().toArray();
    res.json(benchmarks);
  } catch (error) {
    console.error('Error fetching benchmarks:', error);
    res.status(500).json({ error: 'Failed to fetch benchmarks' });
  }
};
