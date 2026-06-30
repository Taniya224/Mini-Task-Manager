"use client";

import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import api from "../services/api";
import { Task } from "../types/task";

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

  const toggleTask = async (id: string) => {
    try {
      await api.patch(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex justify-center items-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 animate-[fadeIn_.4s_ease]">
  <h1 className="text-4xl font-extrabold text-center mb-2 text-gray-900">
    📝 Mini Task Manager
  </h1>

  <p className="text-center text-gray-500">
    Organize your daily tasks efficiently.
  </p>

<p className="text-center text-blue-500 text-sm font-medium mt-2 mb-8">    📋 {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
  </p>

  <TaskForm onAdd={addTask} />

  <TaskList
    tasks={tasks}
    onToggle={toggleTask}
    onDelete={deleteTask}
  />
</div>
    </main>
  );
}