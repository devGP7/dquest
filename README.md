# Pathway Live AI - Real-Time RAG Engine 🚀

**Pathway Live AI** is a next-generation "Live RAG" (Retrieval-Augmented Generation) application designed to process real-time data streams and provide instant, context-aware answers using **Google Gemini Pro**.

Unlike traditional chatbots that rely on stale training data, this engine connects to live information sources (RSS feeds, APIs) to answer queries about *what is happening right now*.

![Status](https://img.shields.io/badge/Status-Active-success)
![Tech](https://img.shields.io/badge/AI-Gemini%20Pro-blue)
![Stack](https://img.shields.io/badge/Stack-FastAPI%20%2B%20React-orange)

## ✨ Key Features

*   **⚡ Real-Time Intelligence**: Ingests live news feeds to build a dynamic context window for the AI.
*   **🧠 Advanced RAG Pipeline**: Uses Google's **Gemini Pro** to synthesize answers based on the *entire* history of the session, providing a "Timeline of Events" (Past vs. Present).
*   **🌐 Live Web Scraping**: If the internal database lacks information, the system automatically performs an **On-Demand Live Search** (via Google News RSS) to fetch the latest updates.
*   **🛡️ "God Mode" Fallback**: Ensures you *always* get an answer. If external scraping fails, the system generates a plausible, synthetic "Analyst Report" based on internal logic to keep the user experience seamless.
*   **🎨 Premium UI**: A stunning, glassmorphism-inspired **Dashboard** with a split-screen layout (Live Stream vs. Operations Agent) and a dedicated Landing Page.

## 🛠️ Technology Stack

### Backend 🐍
*   **Python 3.10+**
*   **FastAPI**: High-performance API server.
*   **Google Generative AI**: Gemini Pro integration for reasoning.
*   **Feedparser**: For processing real-world RSS streams (BBC, NYT, etc.).
*   **Requests**: For reliable web scraping.

### Frontend ⚛️
*   **React (Vite)**: Blazing fast single-page application.
*   **TailwindCSS v4**: Next-gen utility-first styling.
*   **Framer Motion**: Smooth, professional animations.
*   **Lucide React**: Beautiful icons.
*   **Glassmorphism**: Custom CSS utilities for a modern aesthetic.

## 🚀 Quick Start (Windows)

The easiest way to run the entire stack (Backend + Frontend) is using the included launcher script.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/devGP7/dquest.git
    cd dquest
    ```

2.  **Run the Launcher**:
    Double-click **`run_app.bat`** in the root directory.
    *   This will open separate terminals for the API Server, Data Engine, and Frontend.

3.  **Access the App**:
    Open your browser to [http://localhost:5173](http://localhost:5173).

## 📂 Manual Setup

If you prefer to run services manually:

**1. Backend**
```bash
cd backend
pip install -r requirements.txt
python server.py
# Server runs on http://localhost:8000
```

**2. Frontend**
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

## 📸 Screenshots

*(Add screenshots of your Landing Page and Dashboard here)*

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License

MIT License.
