import pathway as pw
import time
import json
import random
from datetime import datetime
from faker import Faker

fake = Faker()

def generate_news_item():
    """Generates a fake news item."""
    topics = ["Technology", "Stock Market", "Politics", "Sports", "Science"]
    companies = ["TechCorp", "BioHealth", "AutoDrive", "GreenEnergy", "FinServe"]
    
    topic = random.choice(topics)
    company = random.choice(companies)
    
    headlines = [
        f"{company} announces breakthrough in AI.",
        f"{company} stocks plummet after CEO steps down.",
        f"New regulations impact {topic} sector.",
        f"{company} releases quarterly earnings report.",
        f"Major partnership announced between {company} and MegaGorp."
    ]
    
    return {
        "title": random.choice(headlines),
        "content": fake.paragraph(nb_sentences=3),
        "published_at": datetime.now().isoformat(),
        "source": "Simulated Live Feed",
        "topic": topic
    }

class NewsStreamInput(pw.Schema):
    title: str
    content: str
    published_at: str
    source: str
    topic: str

def get_simulated_stream():
    """
    Creates a simulated streaming data source for Pathway.
    This acts as a placeholder for a real API (like NewsAPI or Kafka).
    """
    # In a real app, this would be pw.io.kafka.read(...) or pw.io.http.read(...)
    # For simulation, we use a custom python connector or a demo generator.
    # Here we simulate by generating data on the fly.
    
    return pw.debug.generate_simulator(
        generate_news_item,
        schema=NewsStreamInput,
        max_duration_ms=10000000 # Run for a long time
    )
