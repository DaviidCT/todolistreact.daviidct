import React, { useState } from "react";

function Home() {
  const [tasks, setTasks] = useState([
    "Hacer la cama",
    "Lavarme las manos",
    "Comer",
    "Pasear al chucho"
  ]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const presionarEnter = (e) => {
    if (e.key === "Enter") {
      const textoLimpio = inputValue.trim();

      if (textoLimpio === "") {
        setError("La tarea no puede estar vacía.");
      } else if (textoLimpio.length < 3) {
        setError("La tarea debe tener al menos 3 caracteres.");
      } else {
        setError("");
        setTasks([...tasks, textoLimpio]);
        setInputValue("");
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", paddingTop: "50px", fontStyle: "italic" }}>
      <div style={{ maxWidth: "550px", margin: "0 auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: "80px", fontWeight: "100", color: "#F7DCC7", textAlign: "center", margin: "0 0 10px 0" }}>
          Tareas pendientes
        </h1>
        <div style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2), 0 25px 50px rgba(0, 0, 0, 0.1)", textAlign: "left" }}>
          <input
            type="text"
            placeholder="¿Qué neceistas hacer?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={presionarEnter}
            style={{ width: "100%", padding: "16px 16px 16px 60px", fontSize: "24px", fontWeight: "300", border: "none", borderBottom: "1px solid grey", outline: "none", boxSizing: "border-box" }}
          />
          {error && (
            <div style={{ padding: "16px 16px 16px 60px", fontSize: "20px", color: "#ff0019", backgroundColor: "#ffffff", borderBottom: "1px solid #ffffff", fontWeight: "bold" }}>
              {error}
            </div>
          )}
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {tasks.length === 0 ? (
              <li style={{ padding: "16px 16px 16px 60px", fontSize: "24px", fontWeight: "300", color: "grey", fontStyle: "italic", borderBottom: "1px solid #ededed" }}>
                No hay tareas, añadir tareas
              </li>
            ) : (
              tasks.map((task, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ padding: "16px 16px 16px 60px", fontSize: "24px", fontWeight: "300", color: "grey", borderBottom: "1px solid #ededed", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}
                >
                  <span>{task}</span>
                  {hoveredIndex === index && (
                    <button
                      onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                      style={{ background: "none", border: "none", color: "#F7DCC7", fontSize: "20px", cursor: "pointer", paddingRight: "20px" }}
                    >
                      ✕
                    </button>
                  )}
                </li>
              ))
            )}
          </ul>
          <div style={{ color: "grey", padding: "10px 15px", fontSize: "14px", fontWeight: "300", borderTop: "1px solid #ffffff" }}>
            {tasks.length} {tasks.length === 1 ? "item" : "items"} left
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;