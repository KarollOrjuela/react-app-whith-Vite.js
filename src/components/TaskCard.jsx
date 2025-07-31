import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task}) {
    const { deleteTask }= useContext(TaskContext);


  return (
        <div className='bg-blue-200 p-4 rounded-md'>
          <h3 className='text-2xl font-bold font-serif'>{task.title}</h3>
          <p className='text-blue-950'> {task.description}</p>
          <button onClick={() => deleteTask(task.id)}> Eliminar tarea </button>
        </div>
  );
}
export default TaskCard;