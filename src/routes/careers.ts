import { Router } from "express";
import { careers } from "../data/careers";
import { CareerDetailsResponse } from "../types";

const router = Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const career = careers.find((item) => item.id === id);

  if (!career) {
    return res.status(404).json({ error: "Career not found." });
  }

  const response: CareerDetailsResponse = {
    id: career.id,
    title: career.title,
    description: career.description,
    overview: career.overview,
    skillsNeeded: career.skillsNeeded,
    whyFit: career.whyFitTemplates.slice(0, 3),
    roadmapEndpoint: `/api/roadmap/${career.id}`
  };

  return res.json(response);
});

export default router;
