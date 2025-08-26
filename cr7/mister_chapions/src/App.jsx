import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Lista from './lista';  
import Formulario from './Formulario';

function App() {
  const [items, setItems] = useState([]);

    useEffect(() => {
    const data = localStorage.getItem("items");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

    useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Lista</Link> | <Link to="/form">Nuevo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/form" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;