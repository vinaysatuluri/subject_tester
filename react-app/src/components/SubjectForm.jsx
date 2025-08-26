// src/components/SubjectForm.jsx
import React from 'react';

function SubjectForm() {
  return (
    <section className="form-container">
      <div className="input-group">
        <label htmlFor="subject">Subject Line</label>
        <input
          id="subject"
          type="text"
          placeholder="Enter your subject line..."
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label htmlFor="foam-line">Foam Line (Preview Text)</label>
        <textarea
          id="foam-line"
          placeholder="Enter the first line of your email..."
          className="textarea-field"
          rows="3"
        ></textarea>
      </div>
      <button className="analyze-button">Analyze</button>
    </section>
  );
}

export default SubjectForm;