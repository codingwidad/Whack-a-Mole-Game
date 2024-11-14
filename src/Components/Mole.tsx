import React from "react";

interface MoleProps {
  isVisible: boolean;
  molePosition: number;
  onWhack: () => void;
}

const Mole: React.FC<MoleProps> = ({ isVisible, molePosition, onWhack }) => {
  return (
    <div className="grid">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className={`mole ${isVisible && index === molePosition ? "visible" : ""}`}
          onClick={isVisible && index === molePosition ? onWhack : undefined}
        >
          {isVisible && index === molePosition ? "🐹" : ""}
        </div>
      ))}
    </div>
  );
};

export default Mole;
