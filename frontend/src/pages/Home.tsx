import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoodboardSelector from "../components/MoodboardSelector";
import { ProfileInput } from "../types";
import { recommend } from "../services/api";

export const Home: React.FC = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [favoriteSubjects, setFavoriteSubjects] = useState("");
  const [workStyles, setWorkStyles] = useState<string[]>([]);
  const [moodboard, setMoodboard] = useState<string[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const workStyleOptions = ["Independent", "Collaborative", "Structured", "Flexible"];

  async function analyze() {
    setLoading(true);
    const payload: ProfileInput = {
      name,
      skills: skills.split(",").map((s) => s.trim()).filter(Boolean),
      interests: interests.split(",").map((s) => s.trim()).filter(Boolean),
      favoriteSubjects: favoriteSubjects.split(",").map((s) => s.trim()).filter(Boolean),
      workStyles,
      moodboard,
    };

    try {
      const resp = await recommend(payload);
      navigate("/results", { state: { profile: payload, response: resp } });
    } catch (err) {
      console.error(err);
      alert("Unable to get recommendations — ensure backend is running or check console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">AIMLY — Career Mentor</h1>
      <p className="text-gray-600 mb-6">Tell us a bit about yourself and pick visuals that match your style.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <label className="block">
            <div className="text-sm font-medium">Your name</div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="mt-1 w-full p-2 border rounded" />
          </label>

          <label className="block">
            <div className="text-sm font-medium">Skills (comma separated)</div>
            <input value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="e.g. JavaScript, UX, Data Analysis" className="mt-1 w-full p-2 border rounded" />
          </label>

          <label className="block">
            <div className="text-sm font-medium">Interests (comma separated)</div>
            <input value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="e.g. start-ups, research" className="mt-1 w-full p-2 border rounded" />
          </label>

          <label className="block">
            <div className="text-sm font-medium">Favorite subjects</div>
            <input value={favoriteSubjects} onChange={(e) => setFavoriteSubjects(e.target.value)} placeholder="e.g. Math, Design" className="mt-1 w-full p-2 border rounded" />
          </label>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2">Work style</div>
            <div className="flex flex-wrap gap-2">
              {workStyleOptions.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWorkStyles((s) => (s.includes(w) ? s.filter((x) => x !== w) : [...s, w]))}
                  className={`px-3 py-1 rounded ${workStyles.includes(w) ? "bg-indigo-600 text-white" : "bg-white border"}`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium mb-2">Moodboard</div>
            <MoodboardSelector value={moodboard} onChange={setMoodboard} />
          </div>

          <div className="mt-4">
            <button onClick={analyze} disabled={loading} className="w-full bg-indigo-600 text-white px-4 py-2 rounded">
              {loading ? "Analyzing…" : "Analyze & Recommend"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
