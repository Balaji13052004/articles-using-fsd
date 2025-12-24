// Phase 2 - Node.js article processor
// Intentionally simple and readable

const axios = require("axios");
const cheerio = require("cheerio");

const API_URL = "http://127.0.0.1:8000/api/articles";

// Sample article URLs (can be replaced with real scraping later)
const sampleArticles = [
  {
    title: "BeyondChats Demo Article 1",
    content: "This article was processed via Node.js script.",
    source_url: "node-script",
    version: "processed",
  },
  {
    title: "BeyondChats Demo Article 2",
    content: "Node.js processed and sent this content.",
    source_url: "node-script",
    version: "processed",
  },
];

async function sendArticle(article) {
  try {
    const res = await axios.post(API_URL, article);
    console.log(`✅ Sent: ${res.data.title}`);
  } catch (err) {
    console.error("❌ Failed to send article", err.message);
  }
}

async function run() {
  console.log("🚀 Starting Phase 2 Node script...");

  for (const article of sampleArticles) {
    await sendArticle(article);
  }

  console.log("🎉 Phase 2 processing completed.");
}

run();
