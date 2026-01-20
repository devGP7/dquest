import time
import requests
import feedparser
import random
from datetime import datetime

# Real-world News Feeds
RSS_URLS = [
    "http://feeds.bbci.co.uk/news/world/rss.xml",           # BBC World
    "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", # NYT World
    "https://www.theguardian.com/world/rss",                # Guardian World
    "https://feeds.reuters.com/reuters/worldNews",          # Reuters (Legacy URL, might redirect)
    "https://news.google.com/rss?topic=w&hl=en-US&gl=US&ceid=US:en" # Google News World
]

API_URL = "http://127.0.0.1:8000/ingest"
SEEN_LINKS = set()

def fetch_real_news():
    print("Fetching latest global news...")
    
    # Shuffle URLs to get variety
    random.shuffle(RSS_URLS)
    
    for url in RSS_URLS:
        try:
            feed = feedparser.parse(url)
            for entry in feed.entries[:5]: # Check top 5 from each
                if entry.link in SEEN_LINKS:
                    continue
                
                SEEN_LINKS.add(entry.link)
                
                # Extract detailed content
                content = getattr(entry, 'summary', '') or getattr(entry, 'description', '')
                
                # Push to our system
                news_item = {
                    "title": entry.title,
                    "content": content, # Real summary
                    "published_at": datetime.now().isoformat(),
                    "source": feed.feed.get('title', 'Global News Source'),
                    "topic": "World News" # General topic for now
                }
                
                response = requests.post(API_URL, json=news_item)
                if response.status_code == 200:
                    print(f"Ingested: {news_item['title']}")
                    return # Just ingest one at a time to simulate a stream
                
        except Exception as e:
            print(f"Error fetching {url}: {e}")

def run():
    print("WARNING: Running in LIVE SCRAPER mode.")
    print(f"Targeting API: {API_URL}")
    print(f"Monitoring {len(RSS_URLS)} Global News Feeds...")
    
    while True:
        try:
            fetch_real_news()
        except Exception as e:
            print(f"Loop Error: {e}")
        
        # Wait a bit before looking for more news to simulate a "Live Ticker"
        time.sleep(5) 

if __name__ == "__main__":
    run()
