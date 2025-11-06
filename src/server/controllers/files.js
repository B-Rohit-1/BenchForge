import { GridFSBucket } from 'mongodb';
import client from '../db.js';

export const getFiles = async (req, res) => {
  try {
    const db = client.db('benchforge');
    const files = await db.collection('files.files').find().toArray();
    res.json(files);
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ error: 'Failed to fetch files' });
  }
};

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const db = client.db('benchforge');
    const bucket = new GridFSBucket(db, { bucketName: 'files' });

    const uploadStream = bucket.openUploadStream(req.file.originalname, {
      contentType: req.file.mimetype,
    });

    uploadStream.end(req.file.buffer);

    uploadStream.on('finish', () => {
      res.json({ message: 'File uploaded successfully' });
    });

    uploadStream.on('error', (error) => {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Failed to upload file' });
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
};
