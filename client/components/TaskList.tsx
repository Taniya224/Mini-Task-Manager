import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="space-y-3 mt-6">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">
          No tasks yet.
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))
      )}
    </div>
  );
}