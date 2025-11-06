import { MongoClient } from 'mongodb';

const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl);

export async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export default client;
