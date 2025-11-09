# 🧠 MindScribe

**MindScribe** is an AI-powered note generator that reads PDF books, papers, and documents, then creates concise, customizable summaries. Built with **Next.js**, **shadcn/ui**, **Supabase**, and **Ollama**, it runs locally and securely, giving you full control over your data.

---

## 🚀 Features

- 📚 Upload and summarize PDFs locally  
- ⚙️ Customizable settings: tone, depth, focus, output format  
- 🧩 Multiple summary modes – concise, detailed, or thematic  
- 💾 Store and manage summaries in Supabase (Postgres)  
- 💬 Powered by **Ollama** LLMs (Llama3, Mistral, Phi3, etc.)  
- 🎨 Modern responsive UI with **shadcn/ui + TailwindCSS**  
- 🌗 Light/Dark mode and clean minimal design  

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | Next.js 15, shadcn/ui, TailwindCSS |
| Backend | Supabase (Postgres) |
| AI Engine | Ollama (local LLMs: Llama3, Mistral, Phi3) |
| File Handling | PDF parsing via pdf.js or pdf-parse |
| Deployment | Vercel / Local |

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/mindscribe.git
cd mindscribe

# Install dependencies
npm install

# Run Supabase locally or connect to your hosted instance
# Then set environment variables:
cp .env.example .env.local
# Add SUPABASE_URL, SUPABASE_ANON_KEY, and OLLAMA_API_URL

# Start Ollama (ensure it's running locally)
ollama serve

# Start the app
npm run dev
