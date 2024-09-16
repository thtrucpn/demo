import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Demo Website!</h1>
        <p>This is a simple React demo website after test.</p>
        <button onClick={() => alert('Hello World!')}>Click me</button>
      </header>
    </div>
  );
}

export default App;
