import React, { useState } from "react";

interface Milestone {
  id: string;
  label: string;
}

interface Props {
  initialMilestones?: Milestone[];
}

const ProgressTracker: React.FC<Props> = ({ initialMilestones = [] }) => {
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {};
    initialMilestones.forEach((m) => (map[m.id] = false));
    return map;
  });

  const total = initialMilestones.length;
  const done = Object.values(completed).filter(Boolean).length;
  const pct = Math.round((done / Math.max(1, total)) * 100);

  function toggle(id: string) {
    setCompleted((s) => ({ ...s, [id]: !s[id] }));
  }

  return (
    <div className="p-4 bg-white rounded-lg border">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-medium">Progress Tracker</div>
        <div className="text-sm text-gray-600">{done}/{total}</div>
      </div>

      <div className="w-full bg-gray-100 h-2 rounded overflow-hidden mb-3">
        <div className="h-2 bg-indigo-600" style={{ width: `${pct}%` }} />
      </div>

      <div className="space-y-2">
        {initialMilestones.map((m) => (
          <label key={m.id} htmlFor={`milestone-${m.id}`} className="flex items-center gap-3">
            <input
              id={`milestone-${m.id}`}
              type="checkbox"
              checked={!!completed[m.id]}
              onChange={() => toggle(m.id)}
              aria-label={`Mark ${m.label} complete`}
            />
            <span className="text-sm">{m.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
