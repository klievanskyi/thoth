export interface Task {
  text: string;
  completed: boolean;
};

export interface AddTaskProps {
  task: string;
  onClick: () => void;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
};

export interface TaskListProps {
  tasks: Task[];
  toggleTask: (idx: number) => void;
  removeTask: (idx: number) => void;
}