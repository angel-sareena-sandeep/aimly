import React from "react";
type Option = {
  key: string;
  label: string;
  emoji?: string;
};

const OPTIONS: Option[] = [
  { key: "build", label: "Build Things", emoji: "🔧" },
  { key: "solve", label: "Solve Problems", emoji: "🧩" },
  { key: "analyze", label: "Analyze Data", emoji: "📊" },
  { key: "design", label: "Design Experiences", emoji: "🎨" },
  { key: "lead", label: "Lead Teams", emoji: "🧭" },
  { key: "communicate", label: "Communicate Ideas", emoji: "💬" },
  { key: "research", label: "Explore Research", emoji: "🔬" },
  { key: "people", label: "Work With People", emoji: "🤝" },
];

export const MoodboardSelector: React.FC<{
  value: string[];
  onChange: (next: string[]) => void;
}> = ({ value, onChange }) => {
  function toggle(key: string) {
    if (value.includes(key)) onChange(value.filter((v) => v !== key));
    else onChange([...value, key]);
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {OPTIONS.map((o) => {
        const active = value.includes(o.key);
        return (
          <button
            key={o.key}
            type="button"
            onClick={() => toggle(o.key)}
            className={`flex items-center gap-3 p-3 rounded-lg border transition-colors focus:outline-none ${
              active
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-800 border-gray-200 hover:shadow-sm"
            }`}
          >
            <div className="text-xl">{o.emoji}</div>
            <div className="text-left text-sm font-medium">{o.label}</div>
          </button>
        );
      })}
    </div>
  );
};

export default MoodboardSelector;
