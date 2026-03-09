import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserProfile: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [education, setEducation] = useState<"High School" | "Undergraduate" | "Graduate">("Undergraduate");
  const [interests, setInterests] = useState<string[]>([]);
  const [workStyle, setWorkStyle] = useState<"Independent" | "Team-based" | "Hybrid">("Hybrid");
  const [favoriteSubjects, setFavoriteSubjects] = useState<string[]>([]);
  const [goal, setGoal] = useState<"AI Engineer" | "Data Analyst" | "UI/UX Designer" | "Product Manager" | "Not Sure">("Not Sure");

  const navigate = useNavigate();

  function next() {
    const profile = { name, age, educationLevel: education, interestsPreference: interests, workStyle, favoriteSubjects, goal };
    sessionStorage.setItem("aimly.profile", JSON.stringify(profile));
    navigate("/moodboard");
  }

  const interestOptions = ["Creative Work", "Analytical Work", "People Interaction", "Exploration"];
  const subjectOptions = ["Math", "Science", "Design", "Business", "Technology"];

  function toggleArr(arr: string[], set: (v: any) => void, val: string) {
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Career Profile</h1>

      <label className="block mb-3">
        <div className="text-sm font-medium">Name</div>
        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full p-2 border rounded" placeholder="Full name" />
      </label>

      <label className="block mb-3">
        <div className="text-sm font-medium">Age (optional)</div>
        <input value={age ?? ""} onChange={(e) => setAge(e.target.value ? Number(e.target.value) : undefined)} className="mt-1 w-40 p-2 border rounded" type="number" />
      </label>

      <div className="mb-3">
        <div className="text-sm font-medium mb-2">Education Level</div>
        <div className="flex gap-2">
          {(["High School", "Undergraduate", "Graduate"] as const).map((e) => (
            <button key={e} onClick={() => setEducation(e)} className={`px-3 py-1 rounded ${education===e?"bg-indigo-600 text-white":"bg-white border"}`}>
              {e}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <div className="text-sm font-medium mb-2">Interests Preference</div>
        <div className="flex gap-2 flex-wrap">
          {interestOptions.map((i) => (
            <button key={i} onClick={() => toggleArr(interests, setInterests, i)} className={`px-3 py-1 rounded ${interests.includes(i)?"bg-indigo-600 text-white":"bg-white border"}`}>
              {i}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <div className="text-sm font-medium mb-2">Work style</div>
        <div className="flex gap-2">
          {(["Independent","Team-based","Hybrid"] as const).map((w) => (
            <button key={w} onClick={() => setWorkStyle(w)} className={`px-3 py-1 rounded ${workStyle===w?"bg-indigo-600 text-white":"bg-white border"}`}>
              {w}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <div className="text-sm font-medium mb-2">Favorite subjects</div>
        <div className="flex gap-2 flex-wrap">
          {subjectOptions.map((s) => (
            <button key={s} onClick={() => toggleArr(favoriteSubjects, setFavoriteSubjects, s)} className={`px-3 py-1 rounded ${favoriteSubjects.includes(s)?"bg-indigo-600 text-white":"bg-white border"}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="text-sm font-medium mb-2">Goal</div>
        <select value={goal} onChange={(e) => setGoal(e.target.value as any)} className="p-2 border rounded w-64">
          {(["AI Engineer","Data Analyst","UI/UX Designer","Product Manager","Not Sure"] as const).map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button onClick={next} className="px-4 py-2 bg-indigo-600 text-white rounded">Next: Mood Board</button>
      </div>
    </div>
  );
};

export default UserProfile;
