// src/components/ResultsDisplay.jsx
import React from 'react';

function ResultsDisplay() {
  return (
    <section className="results-container">
      <h2>Analysis</h2>
      <div className="result-item">
        <strong>Length:</strong>
        <span>-</span>
      </div>
      <div className="result-item">
        <strong>Spam Score:</strong>
        <span>-</span>
      </div>
      <h3>Email Preview</h3>
      <div className="preview-box">
        <p>
          <strong>Subject: </strong>
          <span>Your subject will appear here</span>
        </p>
        <p className="preview-body">
          Your email's first line will appear here...
        </p>
      </div>
    </section>
  );
}

export default ResultsDisplay;