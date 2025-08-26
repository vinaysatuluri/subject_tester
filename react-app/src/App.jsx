// src/App.jsx
import { useState } from 'react'; // <-- Import useState
import SubjectForm from './components/SubjectForm';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  // 1. State to hold the form inputs
  const [subject, setSubject] = useState('');
  const [foamLine, setFoamLine] = useState('');

  // 2. State to hold the analysis results. Start with null.
  const [results, setResults] = useState(null);

  // 3. The function that runs when the "Analyze" button is clicked
  const handleAnalyze = () => {
    const analysis = {
      length: subject.length,
      spamScore: 'N/A', // We will replace this in the next phase
      subject: subject,
      foamLine: foamLine,
    };
    setResults(analysis); // Update the results state with the new data
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Subject & Foam Line Tester</h1>
        <p>Test your subject lines and preview text for length, spam score, and inbox appearance.</p>
      </header>
      <main className="main-content">
  <SubjectForm
    // Pass the functions to update the state and handle the click
    setSubject={setSubject}
    setFoamLine={setFoamLine}
    handleAnalyze={handleAnalyze}
  />
  <ResultsDisplay
    // Pass the results data to be displayed
    results={results}
  />
</main>
    </div>
  );
}

export default App;