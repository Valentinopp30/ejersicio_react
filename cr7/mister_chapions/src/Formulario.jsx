// Formulario.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formulario({ setItems }) {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") return;

    // Agregar a la lista
    setItems(prev => [...prev, nombre]);

    // Limpiar input
    setNombre("");

    // Volver a la lista
    navigate("/");
  };

  return (
    <div>
      <h2>Nuevo elemento</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          placeholder="Escribe un elemento"
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Formulario;