import React from "react";
import { RoadmapItem } from "../types";

export const RoadmapTimeline: React.FC<{ items: RoadmapItem[] }> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((it) => (
        <div key={it.id} className="flex items-start gap-4">
          <div className="w-10 text-sm text-gray-500">Week {it.weeksFromStart ?? "?"}</div>
          <div className="flex-1 p-3 bg-white rounded border">
            <div className="font-medium">{it.title}</div>
            {it.description && <div className="text-sm text-gray-600 mt-1">{it.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapTimeline;
