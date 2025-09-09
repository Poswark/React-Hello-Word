import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="page-container">
      <header className="App-header">
        <h1>Hello World Gio!</h1>
        <img 
          src="gif.gif" 
          alt="Hello Animation" 
          className="welcome-gif"
        />
        <p className="subtitle">¡Bienvenido a mi aplicación React!</p>
      </header>
    </div>
  );
}

function Hola() {
  return (
    <div className="page-container">
      <header className="App-header">
        <h1>¡Hola, este es otro path!</h1>
        <img 
          src="gif.gif" 
          alt="Hola Animation" 
          className="welcome-gif"
        />
        <p className="subtitle">¡Navegando por diferentes rutas!</p>
      </header>
    </div>
  );
}

function VersionDisplay() {
  return (
    <div className="version-container">
      <span className="version-text">
        v{process.env.REACT_APP_VERSION || '0.0.1'}
      </span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hola" element={<Hola />} />
        </Routes>
        <VersionDisplay />
      </div>
    </Router>
  );
}

export default App;