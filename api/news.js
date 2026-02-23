// api/news.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const category = req.query.category || 'business';
  const API_KEY = process.env.NEWS_API_KEY; // استخدام المتغير

  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}