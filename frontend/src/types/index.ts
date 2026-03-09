export interface RecommendRequest {
  name: string;
  age?: number;
  educationLevel: "High School" | "Undergraduate" | "Graduate";
  interestsPreference: (
    | "Creative Work"
    | "Analytical Work"
    | "People Interaction"
    | "Exploration"
  )[];
  workStyle: "Independent" | "Team-based" | "Hybrid";
  favoriteSubjects: ("Math" | "Science" | "Design" | "Business" | "Technology")[];
  goal: "AI Engineer" | "Data Analyst" | "UI/UX Designer" | "Product Manager" | "Not Sure";
  hobbies: string[];
}

export interface ChatRequest {
  question: string;
  careerId?: string;
}

export interface CareerMatch {
  id: string;
  title: string;
  matchScore: number;
  description: string;
  whyFit: string[];
}

export interface RecommendResponse {
  topMatches: CareerMatch[];
}

export interface CareerDetailResponse {
  id: string;
  title: string;
  description: string;
  overview: string;
  skillsNeeded: string[];
  whyFit: string[];
  roadmapEndpoint: string;
}

export interface RoadmapPhase {
  phase: "Phase 1" | "Phase 2" | "Phase 3";
  items: string[];
}

export interface Milestone {
  id: string;
  label: string;
  status: "done" | "in-progress" | "locked";
}

export interface RoadmapResponse {
  id: string;
  title: string;
  roadmapPhases: RoadmapPhase[];
  first30Days: string[];
  milestones: Milestone[];
}

export interface ChatResponse {
  answer: string;
  tips: string[];
}
