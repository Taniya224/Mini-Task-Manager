import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
}: TaskListProps) {
  return (
  <div className="space-y-4">
    {tasks.length === 0 ? (
      <div className="text-center py-10">
        <div className="text-5xl mb-3">🎉</div>

        <h2 className="text-xl font-semibold text-gray-700">
          You're all caught up!
        </h2>

        <p className="text-gray-500 mt-2">
          Add your first task above.
        </p>
      </div>
    ) : (
      tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))
    )}
  </div>
);
}