import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Mini Task Manager API is running 🚀");
});

app.use("/api/tasks", taskRoutes);

export default app;