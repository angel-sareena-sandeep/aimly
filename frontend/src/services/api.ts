import {
  RecommendRequest,
  RecommendResponse,
  CareerDetailResponse,
  RoadmapResponse,
  ChatRequest,
  ChatResponse,
} from "../types";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api";

export async function recommend(profile: RecommendRequest): Promise<RecommendResponse> {
  const res = await fetch(`${API_BASE}/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profile),
  });

  if (!res.ok) {
    let message = "Failed to fetch recommendations";

    try {
      const body = await res.json();
      if (body?.error && typeof body.error === "string") {
        message = body.error;
      }
    } catch (_error) {
      // Keep default message if response is not JSON.
    }

    throw new Error(message);
  }

  return res.json();
}

export async function getCareer(id: string): Promise<CareerDetailResponse> {
  const res = await fetch(`${API_BASE}/careers/${id}`);
  if (!res.ok) throw new Error("Failed to fetch career details");
  return res.json();
}

export async function getRoadmap(id: string): Promise<RoadmapResponse> {
  const res = await fetch(`${API_BASE}/roadmap/${id}`);
  if (!res.ok) throw new Error("Failed to fetch roadmap");
  return res.json();
}

export async function chat(req: ChatRequest): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  if (!res.ok) throw new Error("Chat request failed");
  return res.json();
}
