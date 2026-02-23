// api/news.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const category = req.query.category || 'business'; // ناخد الفئة من الـ query
  const API_KEY = '9e1f6d821cc04fd088adbeeb52649c47';

  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
    const data = await response.json();

    res.status(200).json(data); // نرسل البيانات للـ client
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}