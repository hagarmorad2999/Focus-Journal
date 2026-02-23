

// api/news.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const category = req.query.category || "business";

  // خد الـ API Key من environment variable
  const API_KEY = process.env.NEWS_API_KEY;

  try {
    // الطلب للـ NewsAPI
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data); // رجع البيانات للـ frontend
  } catch (err) {
    console.error("Error fetching news:", err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}