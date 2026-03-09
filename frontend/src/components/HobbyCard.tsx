import React from "react";

export const HobbyCard: React.FC<{
  label: string;
  emoji?: string;
  selected?: boolean;
  onToggle?: (label: string) => void;
}> = ({ label, emoji, selected, onToggle }) => {
  return (
    <button
      type="button"
      onClick={() => onToggle && onToggle(label)}
      aria-pressed={selected}
      className={`flex flex-col items-center justify-center p-2 rounded-md border text-sm h-20 w-20 sm:h-24 sm:w-24 text-center ${
        selected ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-800 border-gray-200"
      }`}
    >
      <div className="text-xl sm:text-2xl">{emoji}</div>
      <div className="mt-1 text-xs sm:text-sm">{label}</div>
    </button>
  );
};

export default HobbyCard;
