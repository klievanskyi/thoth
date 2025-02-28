import { TaskListProps } from "../types";
import { Trash2 } from "lucide-react";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTask,
  removeTask,
}: TaskListProps) => {
  return (
    <ul className="grid grid-cols-12 gap-4 space-y-2">
      {tasks.map((task, idx) => (
        <li
          key={idx}
          className="col-span-4 col-start-5 flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow"
        >
          <div
            className="flex items-center gap-2"
            onClick={() => toggleTask(idx)}
          >
            <span
              className={task.completed ? "line-through text-gray-500" : ""}
            >
              {task.text}
            </span>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9"
            onClick={() => removeTask(idx)}
          >
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
