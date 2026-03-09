import { Router } from "express";
import { careers } from "../data/careers";
import { RoadmapResponse } from "../types";

const router = Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const career = careers.find((item) => item.id === id);

  if (!career) {
    return res.status(404).json({ error: "Career not found." });
  }

  const response: RoadmapResponse = {
    id: career.id,
    title: career.title,
    roadmapPhases: career.roadmapPhases,
    first30Days: career.first30Days,
    milestones: career.defaultMilestones
  };

  return res.json(response);
});

export default router;
