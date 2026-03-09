import React from "react";
import { CareerMatch } from "../types";

export const CareerCard: React.FC<{
  match: CareerMatch;
  onView: (id: string) => void;
  onSave?: (id: string) => void;
}> = ({ match, onView, onSave }) => {
  const score = (match as any).matchScore ?? (match as any).score ?? 0;
  const whyPreview = (match as any).whyMatchPreview ?? (match as any).whyFitTags?.[0] ?? "";
  const missing = (match as any).missingSkillsPreview ?? (match as any).missingSkills ?? [];
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{match.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{match.shortDescription}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Match</div>
          <div className="text-xl font-bold text-indigo-600">{score}%</div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {whyPreview && <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{whyPreview}</span>}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-gray-500">Missing: {missing.join(", ")}</div>
        <div className="flex gap-2">
          <button
            onClick={() => onView(match.id)}
            className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm"
          >
            View Roadmap
          </button>
          <button
            onClick={() => onSave && onSave(match.id)}
            className="px-3 py-1 rounded-md border text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
