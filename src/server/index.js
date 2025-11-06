import express from 'express';
import cors from 'cors';
import { connectToMongo } from './db.js';
import filesRouter from './routes/files.js';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

import modelsRouter from './routes/models.js';

import benchmarksRouter from './routes/benchmarks.js';

// Routes
app.use('/api', filesRouter);
app.use('/api', modelsRouter);
app.use('/api', benchmarksRouter);

// Start server
const startServer = async () => {
  try {
    await connectToMongo();
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
