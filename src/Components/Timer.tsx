import React from "react";

interface TimerProps {
  timer: number;
}

const Timer: React.FC<TimerProps> = ({ timer }) => {
  return (
    <div className="score-timer">
      <p>Time Left: {timer}s</p>
    </div>
  );
};

export default Timer;
