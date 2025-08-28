// src/components/ResultsDisplay.jsx

function ResultsDisplay({ results, error, isLoading }) {
  if (isLoading) {
    return (
      <section className="results-container">
        <h2>Analyzing...</h2>
        <p>Please wait while we check your subject line.</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="results-container">
        <h2>Error</h2>
        <p style={{ color: 'red' }}>{error}</p>
      </section>
    );
  }

  if (!results) {
    return (
      <section className="results-container">
        <h2>Analysis</h2>
        <p>Your analysis will appear here after you click the "Analyze" button.</p>
      </section>
    );
  }

  // --- TEXT TRUNCATION LOGIC ---
  const truncatedSubject = results.subject.length > 75
    ? `${results.subject.substring(0, 75)}...`
    : results.subject;

  const truncatedFoamLine = results.foamLine.length > 150
    ? `${results.foamLine.substring(0, 150)}...`
    : results.foamLine;
  // -----------------------------

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
          <span>{truncatedSubject}</span>
        </p>
        <p className="preview-body">{truncatedFoamLine}</p>
      </div>
    </section>
  );
}

export default ResultsDisplay;