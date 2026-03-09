import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HobbyCard from "../components/HobbyCard";

const HOBBIES = [
  { label: "Drawing", emoji: "✏️" },
  { label: "Photography", emoji: "📸" },
  { label: "Digital Art", emoji: "🖌️" },
  { label: "Story Writing", emoji: "📝" },
  { label: "Filmmaking", emoji: "🎬" },
  { label: "Graphic Design", emoji: "🖼️" },
  { label: "Calligraphy", emoji: "🖋️" },
  { label: "Animation", emoji: "🎞️" },
  { label: "Coding", emoji: "💻" },
  { label: "App Development", emoji: "📱" },
  { label: "Game Development", emoji: "🎮" },
  { label: "Robotics", emoji: "🤖" },
  { label: "AI Experiments", emoji: "🧠" },
  { label: "Building PCs", emoji: "🛠️" },
  { label: "Chess", emoji: "♟️" },
  { label: "Puzzle Solving", emoji: "🧩" },
  { label: "Strategy Games", emoji: "🎲" },
  { label: "Data Visualization", emoji: "📊" },
  { label: "Researching Topics", emoji: "🔎" },
  { label: "Traveling", emoji: "✈️" },
  { label: "Blogging", emoji: "✍️" },
  { label: "Content Creation", emoji: "📹" },
  { label: "Podcasting", emoji: "🎙️" },
  { label: "Language Learning", emoji: "🗣️" },
  { label: "Gaming", emoji: "🎧" },
  { label: "Anime", emoji: "🌸" },
  { label: "Movie Reviews", emoji: "🍿" },
  { label: "Streaming", emoji: "📺" },
  { label: "Speed Cubing", emoji: "🧊" },
  { label: "Drone Flying", emoji: "🛩️" },
  { label: "Mechanical Keyboards", emoji: "⌨️" },
  { label: "Lego Building", emoji: "🧱" },
  { label: "Miniature Painting", emoji: "🎨" },
  { label: "Urban Exploration", emoji: "🏙️" },
  { label: "Origami", emoji: "🪄" },
  { label: "Metal Detecting", emoji: "🧲" },
];

export const MoodBoard: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();

  function toggle(label: string) {
    setSelected((s) => (s.includes(label) ? s.filter((x) => x !== label) : s.length < 8 ? [...s, label] : s));
  }

  const valid = selected.length >= 5 && selected.length <= 8;

  function submit() {
    if (!valid) return;
    // save hobbies and go to results where recommend call will be made
    const profileRaw = sessionStorage.getItem("aimly.profile");
    if (!profileRaw) return navigate("/");
    const profile = JSON.parse(profileRaw);
    sessionStorage.setItem("aimly.request", JSON.stringify({ ...profile, hobbies: selected }));
    navigate("/results");
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">Mood Board</h2>
      <p className="text-gray-600 mb-4">Select 5–8 hobby cards that best reflect you.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4">
        {HOBBIES.map((h) => (
          <HobbyCard key={h.label} label={h.label} emoji={h.emoji} selected={selected.includes(h.label)} onToggle={toggle} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">Selected: {selected.length} (5–8 required)</div>
        <div className="flex gap-2">
          <button onClick={() => { setSelected([]); }} className="px-3 py-1 border rounded">Clear</button>
          <button disabled={!valid} onClick={submit} className={`px-4 py-2 rounded ${valid?"bg-indigo-600 text-white":"bg-gray-200 text-gray-500"}`}>
            Analyze & Recommend
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodBoard;
