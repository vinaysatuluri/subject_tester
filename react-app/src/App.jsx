// src/App.jsx
import { useState } from 'react';
import SubjectForm from './components/SubjectForm';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  // We'll keep all the important data for our app right here.
  const [subject, setSubject] = useState('');
  const [foamLine, setFoamLine] = useState('');

  // These three handle the different states of our results display.
  const [results, setResults] = useState(null); // The actual analysis data
  const [isLoading, setIsLoading] = useState(false); // Are we waiting for the API?
  const [error, setError] = useState(null); // Did something go wrong?

  // This is the main function that runs when the user clicks "Analyze".
  const handleAnalyze = async () => {
    // First, let's reset everything for a fresh analysis.
    setError(null);
    setResults(null);

    // A little bit of validation to make sure we don't send empty requests.
    if (!subject.trim() || !foamLine.trim()) {
      setError("Please fill out both the subject and the foam line.");
      return; // Stop the function here.
    }
    // And let's stop people from sending a whole novel to the API.
    if (subject.length > 300 || foamLine.length > 500) {
      setError("Input is too long. Please shorten the subject and foam line.");
      return;
    }

    // Okay, validation passed. Let's start the loading spinner.
    setIsLoading(true);

    // Here's the fun part: we're writing instructions for the AI.
    // This "prompt" tells it exactly what to do and how to respond.
    const prompt = `Analyze the following email subject and first line for spam-like qualities. Respond with a single word indicating risk: "Low", "Medium", or "High".
  
    Subject: "${subject}"
    First Line: "${foamLine}"
  
    Analysis:`;

    try {
      // Time to call the Cohere API.
      const response = await fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // We're grabbing our secret API key from the .env.local file.
          'Authorization': `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 4, // Just enough for one word, keeps the AI focused.
          temperature: 0.1, // A low temp makes the AI's answers more consistent.
        })
      });

      // If the response isn't good, we'll throw an error to be caught below.
      if (!response.ok) {
        throw new Error('API request failed. The service might be down or your API key may be invalid.');
      }

      const data = await response.json();
      // The AI's answer is tucked away in this part of the response.
      const spamScore = data.generations[0].text.trim();

      // Let's package up our results neatly.
      const analysis = {
        length: subject.length,
        spamScore: spamScore,
        subject: subject,
        foamLine: foamLine,
      };
      setResults(analysis);

    } catch (err) {
      // If anything went wrong in the 'try' block, we'll show an error.
      setError(err.message);
    } finally {
      // No matter what happens, always stop the loading spinner.
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