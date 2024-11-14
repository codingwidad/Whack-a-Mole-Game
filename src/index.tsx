import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Game from './Components/Game';

const handleGameover = (finalScore: number) => {
  alert(`Game Over! Your final score is: ${finalScore}`);
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Game onGameover={handleGameover} />
  </React.StrictMode>
);
