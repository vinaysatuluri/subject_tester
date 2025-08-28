// src/components/ResultsDisplay.jsx

function ResultsDisplay({ results, error, isLoading }) {
  // 1. Show a loading message when the API call is in progress
  if (isLoading) {
    return (
      <section className="results-container">
        <h2>Analyzing...</h2>
        <p>Please wait while we check your subject line.</p>
      </section>
    );
  }

  // 2. Show an error message if the API call failed
  if (error) {
    return (
      <section className="results-container">
        <h2>Error</h2>
        <p style={{ color: 'red' }}>{error}</p>
      </section>
    );
  }

  // 3. Show the initial placeholder message if there are no results yet
  if (!results) {
    return (
      <section className="results-container">
        <h2>Analysis</h2>
        <p>Your analysis will appear here after you click the "Analyze" button.</p>
      </section>
    );
  }

  // 4. If everything is successful, show the results
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