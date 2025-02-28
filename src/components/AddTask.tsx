import { AddTaskProps } from "../types";

const AddTask: React.FC<AddTaskProps> = ({ task, onClick, onChange }) => {

  return (
    <div className="flex items-center border border-gray-300 rounded-lg shadow-sm w-full">
      <input
        type="text"
        placeholder="Type task..."
        className="w-full px-2 py-2 border-none focus:outline-none"
        value={task}
        onChange={onChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        onClick={onClick}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
