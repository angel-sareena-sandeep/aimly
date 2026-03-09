import React from "react";
import { RoadmapPhase } from "../types";

export const RoadmapTimeline: React.FC<{ phases: RoadmapPhase[] }> = ({ phases }) => {
  return (
    <div className="space-y-4">
      {phases.map((phase) => (
        <div key={phase.phase} className="flex items-start gap-4">
          <div className="w-20 text-sm text-gray-500">{phase.phase}</div>
          <div className="flex-1 p-3 bg-white rounded border">
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapTimeline;
