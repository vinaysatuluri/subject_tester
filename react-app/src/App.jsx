// src/App.jsx
import { useState } from 'react';
import SubjectForm from './components/SubjectForm';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  // State for form inputs
  const [subject, setSubject] = useState('');
  const [foamLine, setFoamLine] = useState('');

  // State for results and UI feedback
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    setError(null);
    setResults(null);

    // --- INPUT VALIDATION ---
    // Check for empty inputs first
    if (!subject.trim() || !foamLine.trim()) {
      setError("Please fill out both the subject and the foam line.");
      return; // Stop the function
    }
    // Check for long inputs
    if (subject.length > 300 || foamLine.length > 500) {
      setError("Input is too long. Please shorten the subject and foam line.");
      return; // Stop the function
    }
    // -------------------------

    setIsLoading(true);

    const prompt = `Analyze the following email subject and first line for spam-like qualities. Respond with a single word: "Good", "Okay", or "Spam".
  
    Subject: "${subject}"
    First Line: "${foamLine}"
  
    Analysis:`;

    try {
      const response = await fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 10,
          temperature: 0.1,
        })
      });

      if (!response.ok) {
        throw new Error('API request failed. The service might be down or your API key may be invalid.');
      }

      const data = await response.json();
      const spamScore = data.generations[0].text.trim();

      const analysis = {
        length: subject.length,
        spamScore: spamScore,
        subject: subject,
        foamLine: foamLine,
      };
      setResults(analysis);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Subject & Foam Line Tester</h1>
        <p>Test your subject lines and preview text for length, spam score, and inbox appearance.</p>
      </header>

      <main className="main-content">
        <SubjectForm
          setSubject={setSubject}
          setFoamLine={setFoamLine}
          handleAnalyze={handleAnalyze}
          isLoading={isLoading}
        />
        <ResultsDisplay
          results={results}
          error={error}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}

export default App;