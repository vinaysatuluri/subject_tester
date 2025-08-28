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
    setIsLoading(true);
    setError(null);
    setResults(null); // Clear previous results for a better user experience

    // We create a specific instruction (a "prompt") for the AI model.
    const prompt = `Analyze the following email subject and first line for spam-like qualities. Respond with a single word: "Good", "Okay", or "Spam".
  
    Subject: "${subject}"
    First Line: "${foamLine}"
  
    Analysis:`;

    try {
      const response = await fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Access the API key securely from your environment variables
          'Authorization': `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 10,
          temperature: 0.1, // Low temperature makes the AI more predictable
        })
      });

      if (!response.ok) {
        throw new Error('API request failed. The service might be down or your API key may be invalid.');
      }

      const data = await response.json();
      // The AI's answer is located in the `text` property of the first generation
      const spamScore = data.generations[0].text.trim();

      const analysis = {
        length: subject.length,
        spamScore: spamScore, // The result from the API!
        subject: subject,
        foamLine: foamLine,
      };
      setResults(analysis);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false); // This will run whether the API call succeeded or failed
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
          isLoading={isLoading} // Pass loading state to the form
        />
        <ResultsDisplay
          results={results}
          error={error}       // Pass error state to the results display
          isLoading={isLoading} // Pass loading state to the results display
        />
      </main>
    </div>
  );
}

export default App;