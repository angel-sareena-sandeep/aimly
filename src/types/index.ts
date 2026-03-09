export type EducationLevel = "High School" | "Undergraduate" | "Graduate";

export type WorkStyle = "Independent" | "Team-based" | "Hybrid";

export type InterestPreference =
  | "Creative Work"
  | "Analytical Work"
  | "People Interaction"
  | "Exploration";

export type FavoriteSubject =
  | "Math"
  | "Science"
  | "Design"
  | "Business"
  | "Technology";

export type GoalCareer =
  | "AI Engineer"
  | "Data Analyst"
  | "UI/UX Designer"
  | "Product Manager"
  | "Not Sure";

export type CareerId =
  | "ai-engineer"
  | "data-analyst"
  | "ui-ux-designer"
  | "product-manager";

export interface UserProfile {
  name: string;
  age?: number;
  educationLevel: EducationLevel;
  interestsPreference: InterestPreference[];
  workStyle: WorkStyle;
  favoriteSubjects: FavoriteSubject[];
  goal: GoalCareer;
  hobbies: string[];
}

export interface Milestone {
  id: string;
  label: string;
  status: "done" | "in-progress" | "locked";
}

export interface RoadmapPhase {
  phase: "Phase 1" | "Phase 2" | "Phase 3";
  items: string[];
}

export interface Career {
  id: CareerId;
  title: "AI Engineer" | "Data Analyst" | "UI/UX Designer" | "Product Manager";
  description: string;
  overview: string;
  skillsNeeded: string[];
  strengths: {
    hobbies: string[];
    interestsPreference: InterestPreference[];
    favoriteSubjects: FavoriteSubject[];
    workStyles: WorkStyle[];
  };
  whyFitTemplates: string[];
  roadmapPhases: RoadmapPhase[];
  first30Days: string[];
  defaultMilestones: Milestone[];
}

export interface CareerMatch {
  id: CareerId;
  title: Career["title"];
  matchScore: number;
  description: string;
  whyFit: string[];
}

export interface RecommendResponse {
  topMatches: CareerMatch[];
}

export interface CareerDetailsResponse {
  id: CareerId;
  title: Career["title"];
  description: string;
  overview: string;
  skillsNeeded: string[];
  whyFit: string[];
  roadmapEndpoint: string;
}

export interface RoadmapResponse {
  id: CareerId;
  title: Career["title"];
  roadmapPhases: RoadmapPhase[];
  first30Days: string[];
  milestones: Milestone[];
}

export interface ChatRequest {
  question: string;
  careerId?: CareerId;
}

export interface ChatResponse {
  answer: string;
  tips: string[];
}
