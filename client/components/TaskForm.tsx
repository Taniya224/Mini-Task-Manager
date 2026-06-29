"use client";

import { useState } from "react";

interface TaskFormProps {
  onAdd: (title: string) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAdd(title);

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6"
    >
      <input
        className="flex-1 border rounded-lg p-3 outline-none"
        placeholder="Enter a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}