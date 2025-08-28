// src/components/ResultsDisplay.jsx
import './ResultsDisplay.css';

// This component's only job is to display things. It has a few different
// states it can be in, so we'll check for them in order.
function ResultsDisplay({ results, error, isLoading }) {
  // First, if we're loading, show the loading message.
  if (isLoading) {
    return (
      <section className="results-container card">
        <h2>Analyzing...</h2>
        <p>Please wait while we check your subject line.</p>
      </section>
    );
  }

  // Second, if there's an error, show the error message.
  if (error) {
    return (
      <section className="results-container card">
        <h2>Error</h2>
        <p style={{ color: 'red' }}>{error}</p>
      </section>
    );
  }

  // Third, if there are no results yet (like when the page first loads),
  // show the initial placeholder text.
  if (!results) {
    return (
      <section className="results-container card">
        <h2>Analysis</h2>
        <p>Your analysis will appear here after you click the "Analyze" button.</p>
      </section>
    );
  }

  // Finally, if none of the above are true, it means we have results to show!
  return (
    <section className="results-container card">
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
        <p className="preview-body">
          {results.foamLine}
        </p>
      </div>
    </section>
  );
}

export default ResultsDisplay;