import React from "react";

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="score-timer">
      <p>Score: {score}</p>
    </div>
  );
};

export default Score;
