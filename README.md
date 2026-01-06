# Portfolio with AI Chatbot

This project is a React-based personal portfolio website that features a **Serverless AI Chatbot** powered by OpenAI.

## 🚀 Features

- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion.
- **Glassmorphism Design**: Sleek and professional look.
- **AI Chatbot**:
  - Responds to questions about MD. Elius using specific portfolio data.
  - Users OpenAI (GPT-3.5) for natural language processing.
  - Serverless architecture for security (API Key hidden).

## 🛠️ Setup & Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/MD-ELIUS/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the root directory and add your OpenAI API Key:
    ```env
    OPENAI_API_KEY=sk-your-openai-api-key-here
    ```

4.  **Run Locally**:
    ```bash
    npm run dev
    ```
    *Note: The `/api/chat` endpoint works natively when deployed to Vercel. For local development, it might fall back to keyword matching unless you use `vercel dev`.*

## 📦 Deployment (Vercel)

1.  Install Vercel CLI (optional) or push to GitHub.
2.  Import the project into **Vercel**.
3.  Vercel will automatically detect the `api` folder as serverless functions.
4.  **Important**: Go to your Vercel Project Settings > Environment Variables and add:
    - Key: `OPENAI_API_KEY`
    - Value: `sk-your-openai-api-key-here`
5.  Deploy!

## 📂 Project Structure

- `src/components/Chatbot.jsx`: The frontend chat interface.
- `api/chat.js`: The serverless backend function that calls OpenAI.
- `src/components/ChatbotData.js`: The source of truth for Elius's information.
