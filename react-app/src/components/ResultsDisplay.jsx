// src/components/ResultsDisplay.jsx

// 1. Receive the `results` prop from the App component
function ResultsDisplay({ results }) {
  // 2. If `results` is null (the initial state), show a placeholder message.
  if (!results) {
    return (
      <section className="results-container">
        <h2>Analysis</h2>
        <p>Your analysis will appear here after you click the "Analyze" button.</p>
      </section>
    );
  }

  // 3. If `results` has data, show the analysis with dynamic values.
  return (
    <section className="results-container">
      <h2>Analysis</h2>
      <div className="result-item">
        <strong>Length:</strong>
        <span>{results.length} characters</span>
      </div>
      <div className="result-item">
        <strong>Spam Score:</strong>
        <span>{results.spamScore}</span>
      </div>
      <h3>Email Preview</h3>
      <div className="preview-box">
        <p>
          <strong>Subject: </strong>
          <span>{results.subject}</span>
        </p>
        <p className="preview-body">{results.foamLine}</p>
      </div>
    </section>
  );
}

export default ResultsDisplay;