import axios from 'axios';

const API_URL = "https://api-inference.huggingface.co/models/";

export const query = async (model, data) => {
  const response = await axios.post(API_URL + model, data, {
    headers: { Authorization: `Bearer ${process.env.HF_API_TOKEN}` },
  });
  return response.data;
};
