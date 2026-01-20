import pathway as pw
import pathway.io.http as pw_http
from ingestion import get_simulated_stream
import json

# 1. Ingest Data
news_table = get_simulated_stream()

# 2. Transform: Just keep the raw table for now
# We can add a "processed_at" timestamp
news_table = news_table.with_columns(processed_at=pw.this.published_at)

# 3. Output: Expose as a REST API
# Pathway's http.server.write exposes the table as a queryable endpoint.
# Clients can POST to /v1/retrieve to get data.
# However, `pw.io.http.server.write` is for *receiving* data in some contexts, 
# or `pw.io.http.write` sends data OUT from pathway to a webhook.

# For a RAG-like experience, we usually use `pw.xpacks.llm.document_store`.
# Let's try to set up a basic DocumentStore if we can without keys, 
# or just a simple input/output server.

# SIMPLIFIED APPROACH:
# We will use `pw.debug.compute_and_print` for CLI demo if API fails,
# but for the frontend, we need an API.

# Let's use `pw.io.fs` to write to a JSON file that the Frontend (or a separate API) watches?
# No, that's not "Live".

# Let's use Pathway's ability to integrate with Python web frameworks.
# We can run Pathway in a separate thread and query it, 
# but Pathway controls the main loop.

# Standard Pattern:
# table -> pw.io.csv.write("output.csv") (for debugging)
# table -> pw.io.http.write(url="http://localhost:8080/receive", format="json")
# This pushes updates to an external server.

# So, let's build a tiny FastAPI server (in a separate file/process) 
# that acts as the "Frontend Backend".
# Pathway will PUSH data to this FastAPI server.
# The React Frontend will poll the FastAPI server.

# This main.py will be the PATHWAY ENGINE.
# We need a separate `server.py` for the API that frontend calls.

host = "127.0.0.1"
api_port = 8000

# Push to our own API 
pw_http.write(
    news_table,
    url=f"http://{host}:{api_port}/ingest",
    format="json",
    method="POST"
)

if __name__ == "__main__":
    pw.run()
