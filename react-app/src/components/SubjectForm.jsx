// src/components/SubjectForm.jsx
import './SubjectForm.css';

// This component is all about the inputs. It doesn't hold any data itself,
// it just tells the main App component what the user is typing.
function SubjectForm({ setSubject, setFoamLine, handleAnalyze, isLoading }) {
  return (
    <section className="form-container card">
      <div className="input-group">
        <label htmlFor="subject">Subject Line</label>
        <input
          id="subject"
          type="text"
          placeholder="Enter your subject line..."
          className="input-field"
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
          onChange={(e) => setFoamLine(e.target.value)}
        ></textarea>
      </div>
      
      <button
        onClick={handleAnalyze}
        className="analyze-button"
        disabled={isLoading}
      >
        {/* A nice touch: change the button text while loading. */}
        {isLoading ? 'Analyzing...' : 'Analyze'}
      </button>
    </section>
  );
}

export default SubjectForm;