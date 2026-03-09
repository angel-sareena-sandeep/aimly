// Request shapes
export interface RecommendRequest {
  name: string;
  age?: number;
  educationLevel: "High School" | "Undergraduate" | "Graduate";
  interestsPreference: string[];
  workStyle: "Independent" | "Team-based" | "Hybrid";
  favoriteSubjects: string[];
  goal: "AI Engineer" | "Data Analyst" | "UI/UX Designer" | "Product Manager" | "Not Sure";
  hobbies: string[];
}

export interface ChatRequest {
  sessionId?: string;
  question: string;
}

// Response shapes
export interface CareerMatch {
  id: string; // canonical id e.g. ai-engineer
  title: string;
  matchScore: number; // 0-100
  shortDescription: string;
  whyMatchPreview: string;
}

export interface RecommendResponse {
  matches: CareerMatch[];
}

export interface CareerDetailResponse {
  id: string;
  title: string;
  overview: string;
  skillsNeeded: string[];
  whyThisFits: string;
  first30Days?: string[];
}

export interface RoadmapPhase {
  id: string;
  title: string;
  durationWeeks?: number;
  milestones: { id: string; label: string; recommended?: boolean }[];
}

export interface RoadmapResponse {
  id: string;
  phases: RoadmapPhase[];
}

export interface ChatResponse {
  reply: string;
  source?: string;
}
