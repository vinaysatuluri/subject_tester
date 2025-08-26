// src/App.jsx
import SubjectForm from './components/SubjectForm';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Subject & Foam Line Tester</h1>
        <p>Test your subject lines and preview text for length, spam score, and inbox appearance.</p>
      </header>
      <main className="main-content">
        <SubjectForm />
        <ResultsDisplay />
      </main>
    </div>
  );
}

export default App;