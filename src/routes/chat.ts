import { Router } from "express";
import { careers } from "../data/careers";
import { ChatRequest, ChatResponse } from "../types";

const router = Router();

const buildAnswer = (question: string, careerTitle?: string): string => {
  const q = question.toLowerCase();
  const role = careerTitle || "your target role";

  if (q.includes("skill")) {
    return `For ${role}, focus on one core skill at a time and ship one mini project each week.`;
  }

  if (q.includes("portfolio") || q.includes("project")) {
    return `Build 2-3 small but complete projects for ${role} and explain your decisions clearly.`;
  }

  if (q.includes("roadmap") || q.includes("plan")) {
    return `Use a 30-60-90 plan: fundamentals first, projects second, interview prep third for ${role}.`;
  }

  if (q.includes("intern") || q.includes("job")) {
    return `Start applying early, tailor your resume for ${role}, and track applications weekly.`;
  }

  return `A good next step for ${role} is consistent weekly practice plus visible project work.`;
};

router.post("/", (req, res) => {
  const body = req.body as Partial<ChatRequest>;

  if (!body.question || typeof body.question !== "string") {
    return res.status(400).json({ error: "Missing required field: question." });
  }

  const career = body.careerId ? careers.find((item) => item.id === body.careerId) : undefined;

  const response: ChatResponse = {
    answer: buildAnswer(body.question, career?.title),
    tips: [
      "Pick one learning goal for this week.",
      "Build or improve one small project.",
      "Reflect on progress and adjust next week plan."
    ]
  };

  return res.json(response);
});

export default router;
