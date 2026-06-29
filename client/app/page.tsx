"use client";
import TaskForm from "../components/TaskForm";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Task } from "../types/task";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const addTask = async (title: string) => {
  try {
    await api.post("/tasks", { title });

    fetchTasks();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Mini Task Manager
        </h1>

        <TaskForm onAdd={addTask} />

<TaskList tasks={tasks} />
      </div>
    </main>
  );
}