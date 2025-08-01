import TaskCard from "./TaskCard";  
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext"; 
export function TaskList() {
  const {tasks}= useContext(TaskContext);


  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2.5 p-10">
      {tasks.map((task) => (
        <TaskCard key={task.id}task={task}/>  
      ))}
    </div>
  );
}
