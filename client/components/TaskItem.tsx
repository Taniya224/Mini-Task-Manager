import { Trash2 } from "lucide-react";
import { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-xl p-5 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id)}
          className="w-5 h-5 cursor-pointer accent-blue-600"
        />

        <span
          className={`text-lg font-medium ${
            task.completed
              ? "line-through text-green-600"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(task._id)}
        className="text-red-500 hover:text-red-700 hover:scale-110 transition-all duration-200"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}