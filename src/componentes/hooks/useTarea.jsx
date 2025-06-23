import { useState } from "react";

export default function useTarea() {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [estado, setEstado] = useState("Pendiente"); // default

  const setDato = (campo, valor) => {
    switch (campo) {
      case "nombre":
        setNombre(valor);
        break;
      case "categoria":
        setCategoria(valor);
        break;
      case "prioridad":
        setPrioridad(valor);
        break;
      case "estado":
        setEstado(valor);
        break;
      default:
        break;
    }
  };

  function limpiarForm() {
    setDato("nombre", "");
    setDato("categoria", "");
    setDato("prioridad", "");
    setDato("estado", "Pendiente");
  }

  return [{ nombre, categoria, prioridad, estado }, setDato, limpiarForm];
}