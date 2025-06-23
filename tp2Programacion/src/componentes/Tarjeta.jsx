import { useState } from 'react';

export default function Tarjeta({ nombre, categoria, prioridad, estado: estadoInicial, eliminar }) {
  const [estado, setEstado] = useState(estadoInicial);

  return (
    <div className="Tarjeta" style={{ backgroundColor: "lightblue" }}>
      <span className="Eliminar" onClick={eliminar}>X</span>
      <span>Nombre: {nombre}</span>
      <span>Categoría: {categoria}</span>
      <span>Prioridad: {prioridad}</span>
      <span>
        Estado:
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="Pendiente">Pendiente</option>
          <option value="En proceso">En proceso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </span>
    </div>
  );
}