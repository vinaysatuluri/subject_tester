# Subject & Foam Line Tester 📧

Welcome! This is a handy tool I built as part of the front-end developer internship assessment for Anslation. It's designed to help marketers and writers quickly test their email subject lines and preview text to improve their email campaigns.

**Live Demo:** [Link will be added here after deployment!]


## What It Does 🤔

This tool provides instant feedback on your email copy, helping you avoid common pitfalls before you hit "send."

* **🕵️‍♀️ AI-Powered Spam Analysis:** Instead of a simple keyword checker, this app uses the Cohere Large Language Model to provide a more nuanced spam risk analysis (`Low`, `Medium`, or `High`).
* **📏 Instant Length Check:** Get an immediate character count for your subject line to keep it concise and effective.
* **👀 Live Inbox Preview:** See a simple preview of how your subject and foam line will appear to a recipient.
* **🛡️ Robust and Responsive:** The app includes client-side validation for inputs and is fully responsive for both desktop and mobile use.

---

## Tech Stack & Tools

I chose a modern and efficient stack to build this project quickly and effectively.

* **Frontend:** **React.js** (built with **Vite**)
* **Styling:** **Plain CSS** with a clean, modular structure.
* **API:** **Cohere API** for the AI-powered analysis.

One of the fun challenges in this project was using a general-purpose Large Language Model (Cohere) to act as a specialized spam checker. By crafting a specific prompt, I was able to turn a powerful AI into a precise tool for this app's needs.

---

## How to Run This Project Locally

Want to run it on your own machine? Here’s how:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate into the project:**
    ```bash
    cd subject_tester/react-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up your environment variables:**
    * Create a `.env.local` file in the `react-app` root.
    * Add your Cohere API key like this: `VITE_COHERE_API_KEY="your-key-here"`
5.  **Start the server!**
    ```bash
    npm run dev
    ```