import React, { useState } from "react";
import { chat } from "../services/api";

export const ChatbotPanel: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "bot", text: "Hi — ask me about careers, skill gaps, or next steps." },
  ]);
  const [input, setInput] = useState("");

  async function send() {
    if (!input.trim()) return;
    const userMsg = { from: "user" as const, text: input };
    setMessages((m) => [...m, userMsg]);

    try {
      const response = await chat({ question: input });
      const tip = response.tips[0] ? ` Tip: ${response.tips[0]}` : "";
      setMessages((m) => [...m, { from: "bot", text: `${response.answer}${tip}` }]);
    } catch (_error) {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "I could not reach the mentor service right now. Try again in a moment." }
      ]);
    }

    setInput("");
  }

  return (
    <div className="w-full sm:w-80 p-3 bg-white rounded-lg border shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <div className="text-sm font-semibold">Career Chat</div>
        <button
          onClick={() => onClose && onClose()}
          aria-label="Close chat"
          className="text-gray-500 hover:text-gray-700 ml-2"
        >
          ×
        </button>
      </div>
      <div className="h-48 overflow-auto p-2 bg-gray-50 rounded mb-2 space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.from === "bot" ? "text-sm text-gray-700" : "text-sm text-indigo-600 text-right"}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
          placeholder="Ask a question"
        />
        <button onClick={send} className="px-3 py-1 bg-indigo-600 text-white rounded">Ask</button>
      </div>
    </div>
  );
};

export default ChatbotPanel;
