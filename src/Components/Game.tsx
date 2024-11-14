import React, { useEffect, useState } from "react";
import Mole from "./Mole";
import Timer from "./Timer";
import Score from "./Score";

interface GameProps {
  onGameover: (finalScore: number) => void;
}

const Game: React.FC<GameProps> = ({ onGameover }) => {
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const startGame = () => {
    setGameStarted(true);
    setTimer(30);
    setScore(0);
    setIsGameOver(false);
  };

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 500);
      return () => clearInterval(interval);
    } else if (timer === 0 && !isGameOver) {
      setIsGameOver(true);
      onGameover(score);
      setGameStarted(false);
    }
  }, [gameStarted, timer, score, onGameover, isGameOver]);

  const handleWhack = () => {
    setScore((prev) => prev + 1);
  };

  return (
    <div className="container">
      <h1 className="title">Whack-a-Mole</h1>

      <Mole
        isVisible={gameStarted}
        molePosition={Math.floor(Math.random() * 9)}
        onWhack={handleWhack}
      />
      <Timer timer={timer} />
      <Score score={score} />

      <button
        className={`start-button ${gameStarted ? "in-progress" : ""}`}
        onClick={startGame}
      >
        {gameStarted ? "Game in Progress" : "Start Game"}
      </button>
    </div>
  );
};

export default Game;
