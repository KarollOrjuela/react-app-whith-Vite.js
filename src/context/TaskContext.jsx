//Importar librerias y datos
import {createContext, useState, useEffect} from 'react'
import { task as data } from "../data/Tasks";

//creacion del context 'Taskcontext'
export const TaskContext = createContext()

//creacion provedor con props
export function TaskContextProvider(props) {
    //constante para cambiar estado
    const [tasks, setTasks] = useState([]);

    //funcion para crear tarea
    function createTask(taskTitle, taskDescription) //parametros a cambiar en el arreglo
    {
        setTasks([
          ...tasks, //no modifica el arreglo original
          { //Declaracion de datos a introducir
            title: taskTitle,
            id: tasks.length,
            description: taskDescription,
          }
        ]);
      }
    //funcion para eliminar tarea
    function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !==taskId))  //filtra por el id de cada tarea y si coincide lo elimina
  }
  //useEffect para evitar el reinicio de los datos al insertar una tarea
  useEffect(() => {
    setTasks(data);
  }, []);

    return (//Llamada al proveedor 
        <TaskContext.Provider 
        //funciones a las que se puede acceder
        value={{
            tasks,
            deleteTask,
            createTask,
        }}> 
            {props.children}
        </TaskContext.Provider>
    )

}

