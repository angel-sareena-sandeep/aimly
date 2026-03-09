import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { recommend } from "../services/api";
import { RecommendResponse, RecommendRequest, CareerMatch } from "../types";
import CareerCard from "../components/CareerCard";

export const Results: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<RecommendResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const reqRaw = sessionStorage.getItem("aimly.request");
    if (!reqRaw) {
      // no request saved — redirect to profile
      navigate("/");
      return;
    }
    const req = JSON.parse(reqRaw) as RecommendRequest;
    setLoading(true);
    recommend(req)
      .then((r) => setData(r))
      .catch((e) => {
        console.error(e);
        alert("Failed to fetch recommendations — check backend.");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  function view(id: string) {
    navigate(`/careers/${id}`);
  }

  function save(id: string) {
    const saved = JSON.parse(localStorage.getItem("aimly.saved") || "[]");
    if (!saved.includes(id)) saved.push(id);
    localStorage.setItem("aimly.saved", JSON.stringify(saved));
    alert("Saved to local list");
  }

  if (loading) return <div className="p-6">Analyzing your profile…</div>;
  if (!data) return <div className="p-6 text-gray-600">No recommendations available.</div>;

  const top: CareerMatch[] = data.matches.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">Your Top Matches</h2>
      <p className="text-gray-600 mb-6">Top career fits based on your profile and mood board.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {top.map((m) => (
          <CareerCard
            key={m.id}
            match={{
              id: m.id,
              title: m.title,
              matchScore: m.matchScore,
              shortDescription: m.shortDescription ?? "",
              whyMatchPreview: m.whyMatchPreview ?? "",
              // frontend CareerCard expects whyFitTags and missingSkillsPreview; we keep them minimal
              whyFitTags: m.whyMatchPreview ? [m.whyMatchPreview] : [],
              missingSkillsPreview: [],
            } as any}
            onView={view}
            onSave={save}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;
