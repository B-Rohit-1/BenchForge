import { query } from '../services/huggingface.js';

export const runInference = async (req, res) => {
  try {
    const { model, inputs } = req.body;
    const result = await query(model, { inputs });
    res.json(result);
  } catch (error) {
    console.error('Error running inference:', error);
    res.status(500).json({ error: 'Failed to run inference' });
  }
};
