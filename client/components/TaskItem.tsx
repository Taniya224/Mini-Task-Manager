import { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={task.completed} readOnly />

        <span
          className={
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }
        >
          {task.title}
        </span>
      </div>

      <button className="text-red-500 hover:text-red-700">
        Delete
      </button>
    </div>
  );
}