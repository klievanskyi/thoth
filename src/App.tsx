import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

type Task = {
  text: string;
  completed: boolean;
};

function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  const toggleTask = (idx: number) => {
    const newTasks = [...tasks];
    newTasks[idx].completed = !newTasks[idx].completed;
    setTasks(newTasks);
  }

  const removeTask = (idx: number) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <>
      <main>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 col-start-5 bg-amber-200">
            <h1 className="text-center">To-Do Now</h1>
          </div>
        </div>


        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 col-start-5">
            <AddTask task={task} onClick={addTask} onChange={handleChange}/>
          </div>
        </div>
        <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
      </main>
    </>
  );
}

export default App;
