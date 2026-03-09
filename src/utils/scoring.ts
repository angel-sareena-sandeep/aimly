import { Career, CareerMatch, UserProfile } from "../types";

const WEIGHTS = {
  hobbies: 0.45,
  interestsPreference: 0.2,
  favoriteSubjects: 0.2,
  workStyleGoal: 0.15
};

const normalize = (items: string[]): string[] =>
  items.map((item) => item.trim().toLowerCase()).filter(Boolean);

const overlapRatio = (profileItems: string[], careerItems: string[]): number => {
  const profileSet = new Set(normalize(profileItems));
  const careerSet = normalize(careerItems);

  if (careerSet.length === 0) {
    return 0;
  }

  const matched = careerSet.filter((item) => profileSet.has(item)).length;
  return matched / careerSet.length;
};

const matchedItems = (profileItems: string[], careerItems: string[]): string[] => {
  const profileSet = new Set(normalize(profileItems));
  return careerItems.filter((item) => profileSet.has(item.toLowerCase()));
};

const buildWhyFit = (profile: UserProfile, career: Career): string[] => {
  const reasons: string[] = [];

  const hobbyMatches = matchedItems(profile.hobbies, career.strengths.hobbies);
  const interestMatches = matchedItems(profile.interestsPreference, career.strengths.interestsPreference);
  const subjectMatches = matchedItems(profile.favoriteSubjects, career.strengths.favoriteSubjects);

  if (hobbyMatches[0]) {
    reasons.push(`You like ${hobbyMatches[0]}`);
  }

  if (interestMatches[0]) {
    reasons.push(`You prefer ${interestMatches[0]}`);
  }

  if (subjectMatches[0]) {
    reasons.push(`You selected ${subjectMatches[0]} as a favorite subject`);
  }

  if (reasons.length === 0) {
    reasons.push(career.whyFitTemplates[0]);
  }

  return reasons.slice(0, 3);
};

export const calculateCareerScore = (profile: UserProfile, career: Career): number => {
  const hobbyRatio = overlapRatio(profile.hobbies, career.strengths.hobbies);
  const interestRatio = overlapRatio(
    profile.interestsPreference,
    career.strengths.interestsPreference
  );
  const subjectRatio = overlapRatio(profile.favoriteSubjects, career.strengths.favoriteSubjects);

  const workStyleBonus = career.strengths.workStyles.includes(profile.workStyle) ? 1 : 0;
  const goalBonus = profile.goal === career.title ? 1 : 0;
  const combinedWorkGoal = workStyleBonus * 0.4 + goalBonus * 0.6;

  const score =
    hobbyRatio * WEIGHTS.hobbies +
    interestRatio * WEIGHTS.interestsPreference +
    subjectRatio * WEIGHTS.favoriteSubjects +
    combinedWorkGoal * WEIGHTS.workStyleGoal;

  return Math.round(score * 100);
};

export const getTopCareerMatches = (
  profile: UserProfile,
  careers: Career[]
): CareerMatch[] => {
  return careers
    .map((career) => ({
      id: career.id,
      title: career.title,
      matchScore: calculateCareerScore(profile, career),
      description: career.description,
      whyFit: buildWhyFit(profile, career),
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
};
