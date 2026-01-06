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
    Create a `.env` file in the root directory and add your Gemini API key (do NOT commit this file):
    ```env
    GEMINI_API_KEY=your_gemini_api_key_here
    ```

4.  **Run Locally**:

    - Start the local AI server (reads `GEMINI_API_KEY` from `.env`):

    ```powershell
    npm run server
    ```

    - In a second terminal start the frontend dev server:

    ```powershell
    npm run dev
    ```

    - Alternatively, set the env var for the current PowerShell session without creating `.env`:

    ```powershell
    $env:GEMINI_API_KEY = "your_gemini_api_key_here"
    npm run server
    ```

    *Note: Do NOT paste API keys into public chats or commit them to the repository. Keep your key private.*

## 📦 Deployment (Vercel)

1.  Install Vercel CLI (optional) or push to GitHub.
2.  Import the project into **Vercel**.
3.  Vercel will automatically detect the `api` folder as serverless functions.
4.  **Important**: Go to your Vercel Project Settings > Environment Variables and add:
    - Key: `OPENAI_API_KEY`
    - Value: `sk-your-openai-api-key-here`
5.  Deploy!

Security & Prompt Injection
 - The server enforces a system prompt and basic prompt-injection protections. User input is sanitized and requests that appear to ask the model to ignore previous instructions or to expose the system prompt will be refused with a safe message.
 - Do not commit your API key. Use `GEMINI_API_KEY` as the environment variable for deployment.

Vercel-specific notes
 - When deploying to Vercel, set `GEMINI_API_KEY` in the Environment Variables for the project (Production, Preview, and Development if desired).
 - The serverless function is in `api/chat.js` and will be used automatically by Vercel.

## 📂 Project Structure

- `src/components/Chatbot.jsx`: The frontend chat interface.
- `api/chat.js`: The serverless backend function that calls OpenAI.
- `src/components/ChatbotData.js`: The source of truth for Elius's information.
