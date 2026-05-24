import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
  ]);
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">todos</h1>
      <div className="todo-card">
        <input
          type="text"
          className="todo-input"
          placeholder="Qué necesitas añadir?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul className="todo-list">
          {tasks.length === 0 ? (
            <li className="todo-item empty-message">No hay tareas, añadir tareas</li>
          ) : (
            tasks.map((task, index) => (
              <li key={index} className="todo-item">
                <span>{task}</span>
                <button className="delete-btn" onClick={() => deleteTask(index)}>✕</button>
              </li>
            ))
          )}
        </ul>
        <div className="todo-footer">
          {tasks.length} {tasks.length === 1 ? "item" : "items"} left
        </div>
      </div>
      <div className="card-shadow-1"></div>
      <div className="card-shadow-2"></div>
    </div>
  );
}

export default App;