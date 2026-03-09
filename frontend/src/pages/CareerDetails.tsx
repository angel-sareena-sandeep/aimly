import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCareer, getRoadmap } from "../services/api";
import { CareerDetailResponse, RoadmapResponse } from "../types";
import RoadmapTimeline from "../components/RoadmapTimeline";
import ProgressTracker from "../components/ProgressTracker";

export const CareerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [career, setCareer] = useState<CareerDetailResponse | null>(null);
  const [roadmap, setRoadmap] = useState<RoadmapResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Promise.all([getCareer(id), getRoadmap(id)])
      .then(([c, r]) => {
        setCareer(c);
        setRoadmap(r);
      })
      .catch((e) => {
        console.error(e);
        alert("Failed to load career data.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6">Loading career details…</div>;
  if (!career) return <div className="p-6">Career not found.</div>;

  const milestones = (roadmap?.milestones || []).slice(0, 5).map((it) => ({
    id: it.id,
    label: it.label
  }));

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{career.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="p-4 bg-white rounded border">
            <div className="font-medium">Why this fits you</div>
            <ul className="text-gray-700 mt-2 list-disc list-inside space-y-1">
              {career.whyFit.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-white rounded border">
            <div className="font-medium">Skills needed</div>
            <div className="text-sm text-gray-700 mt-2">{career.skillsNeeded.join(", ")}</div>
          </div>
        </div>

        <div className="space-y-4">
          <ProgressTracker initialMilestones={milestones} />

          <div className="p-4 bg-white rounded border">
            <div className="font-medium">First 30 days plan</div>
            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside space-y-1">
              {(roadmap?.first30Days || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Roadmap</h3>
        {roadmap ? (
          <RoadmapTimeline phases={roadmap.roadmapPhases} />
        ) : (
          <div className="text-gray-600">No roadmap available.</div>
        )}
      </div>
    </div>
  );
};

export default CareerDetails;
