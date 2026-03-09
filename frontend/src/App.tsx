import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import MoodBoard from "./pages/MoodBoard";
import Results from "./pages/Results";
import CareerDetails from "./pages/CareerDetails";
import ChatbotPanel from "./components/ChatbotPanel";

export const App: React.FC = () => {
  const [showChat, setShowChat] = React.useState(false);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
            <Link to="/" className="text-lg font-bold">AIMLY</Link>
            <nav className="space-x-4">
              <Link to="/" className="text-sm text-gray-600">Home</Link>
              <Link to="/results" className="text-sm text-gray-600">Results</Link>
            </nav>
            <div>
              <button onClick={() => setShowChat((s) => !s)} className="ml-4 px-3 py-1 rounded border text-sm">Ask AIMLY</button>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="/moodboard" element={<MoodBoard />} />
            <Route path="/results" element={<Results />} />
            <Route path="/careers/:id" element={<CareerDetails />} />
          </Routes>
        </main>

        {showChat && (
          <div className="fixed right-4 bottom-4 aimly-chat-wrapper hidden sm:block">
            <ChatbotPanel onClose={() => setShowChat(false)} />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
