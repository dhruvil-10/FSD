import { useState } from "react"


const ToDoList = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        if(task.trim() === "") return;
        setTasks([...tasks, {Text: task, completed: false}])
        setTask("")
    }

    const toggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i != index);
        setTasks(updatedTasks);
    }

    return(
        <div>
            <h1>TODO LIST APP</h1>
            <input type="text" value={task} onChange={e=> setTask(e.target.value)}/>
            <button onClick={() => addTask()}>Add Task</button>


            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        <span onClick={() => toggleTask(index)} style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.Text}</span>
                        <button onClick={() => deleteTask(index)}>Delete Task</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList