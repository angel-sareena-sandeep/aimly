import { Router } from "express";
import { careers } from "../data/careers";
import { getTopCareerMatches } from "../utils/scoring";
import {
  EducationLevel,
  FavoriteSubject,
  GoalCareer,
  InterestPreference,
  RecommendResponse,
  UserProfile,
  WorkStyle
} from "../types";

const router = Router();

const hasArrayValues = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.length > 0 && value.every((item) => typeof item === "string");
};

const EDUCATION_LEVELS: EducationLevel[] = ["High School", "Undergraduate", "Graduate"];
const INTERESTS: InterestPreference[] = [
  "Creative Work",
  "Analytical Work",
  "People Interaction",
  "Exploration"
];
const WORK_STYLES: WorkStyle[] = ["Independent", "Team-based", "Hybrid"];
const SUBJECTS: FavoriteSubject[] = ["Math", "Science", "Design", "Business", "Technology"];
const GOALS: GoalCareer[] = [
  "AI Engineer",
  "Data Analyst",
  "UI/UX Designer",
  "Product Manager",
  "Not Sure"
];

router.post("/", (req, res) => {
  const profile = req.body as Partial<UserProfile>;

  if (!profile.name || typeof profile.name !== "string" || !profile.name.trim()) {
    return res.status(400).json({ error: "name is required." });
  }

  if (!profile.educationLevel || !EDUCATION_LEVELS.includes(profile.educationLevel)) {
    return res.status(400).json({ error: "educationLevel is invalid." });
  }

  if (
    !hasArrayValues(profile.interestsPreference) ||
    profile.interestsPreference.some((item) => !INTERESTS.includes(item as InterestPreference))
  ) {
    return res.status(400).json({ error: "interestsPreference is invalid." });
  }

  if (!profile.workStyle || !WORK_STYLES.includes(profile.workStyle)) {
    return res.status(400).json({ error: "workStyle is invalid." });
  }

  if (
    !hasArrayValues(profile.favoriteSubjects) ||
    profile.favoriteSubjects.some((item) => !SUBJECTS.includes(item as FavoriteSubject))
  ) {
    return res.status(400).json({ error: "favoriteSubjects is invalid." });
  }

  if (!profile.goal || !GOALS.includes(profile.goal)) {
    return res.status(400).json({ error: "goal is invalid." });
  }

  if (!hasArrayValues(profile.hobbies) || profile.hobbies.length < 5 || profile.hobbies.length > 8) {
    return res.status(400).json({ error: "hobbies must contain between 5 and 8 items." });
  }

  const topMatches = getTopCareerMatches(profile as UserProfile, careers);

  const response: RecommendResponse = {
    topMatches
  };

  return res.json(response);
});

export default router;
