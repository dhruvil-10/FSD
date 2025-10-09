import React, { useState } from "react";
import "./Practical6.css";
import StudentInfo from "./StudentInfo";

const Practical6 = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="practical6-container">
      <StudentInfo />
      <div className="practical-title">
        <h1>Practical 6 - Interactive To-Do List</h1>
        <p>Manage your daily tasks with an elegant interface</p>
      </div>
      <div className="todo-container">
        <h1>📝 My Tasks</h1>
        <div className="task-stats">
          <span className="total-tasks">Total: {tasks.length}</span>
          <span className="completed-tasks">
            Completed: {tasks.filter(task => task.completed).length}
          </span>
        </div>
        <form onSubmit={addTask} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="✨ Add a new task..."
            className="todo-input"
          />
          <button type="submit" className="todo-add">➕ Add Task</button>
        </form>
        <ul className="todo-list">
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span onClick={() => toggleTask(task.id)} className="task-text">
                {task.completed ? "✅" : "⭕"} {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)} className="todo-delete">🗑️ Delete</button>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && (
          <div className="empty-state">
            <p>🎉 No tasks yet! Add one to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practical6;
