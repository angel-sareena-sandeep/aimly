import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import recommendRouter from "./routes/recommend";
import careersRouter from "./routes/careers";
import roadmapRouter from "./routes/roadmap";
import chatRouter from "./routes/chat";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:5173",
      "http://127.0.0.1:5173"
    ]
  })
);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/recommend", recommendRouter);
app.use("/api/careers", careersRouter);
app.use("/api/roadmap", roadmapRouter);
app.use("/api/chat", chatRouter);

app.use((req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error." });
});

export default app;
