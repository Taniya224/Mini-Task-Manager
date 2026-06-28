import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (_req, res) => {
  res.send("Mini Task Manager API is running 🚀");
});

export default app;