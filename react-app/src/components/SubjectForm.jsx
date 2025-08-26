// src/components/SubjectForm.jsx
import React from 'react';

function SubjectForm({ setSubject, setFoamLine, handleAnalyze }) {
  return (
    <section className="form-container">
      <div className="input-group">
        <label htmlFor="subject">Subject Line</label>
        <input
          id="subject"
          type="text"
          placeholder="Enter your subject line..."
          className="input-field"
          // 2. When the user types, call the setSubject function
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="foam-line">Foam Line (Preview Text)</label>
        <textarea
          id="foam-line"
          placeholder="Enter the first line of your email..."
          className="textarea-field"
          rows="3"
          // 3. When the user types, call the setFoamLine function
          onChange={(e) => setFoamLine(e.target.value)}
        ></textarea>
      </div>
      {/* 4. When the button is clicked, call the handleAnalyze function */}
      <button onClick={handleAnalyze} className="analyze-button">
        Analyze
      </button>
    </section>
  );
}

export default SubjectForm;