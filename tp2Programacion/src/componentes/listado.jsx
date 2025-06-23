import Tarjeta from './Tarjeta';

export default function Listado({ tareas, eliminarTareas }) {
  return (
    <div className="Panel" style={{ backgroundColor: "lightyellow" }}>
      <h3>Tareas</h3>

      <div className="Listado">
        {tareas.map((tarea) => (
          <Tarjeta
            key={tarea.id}
            eliminar={() => eliminarTareas(tarea.id)}
            nombre={tarea.nombre}
            categoria={tarea.categoria}
            prioridad={tarea.prioridad}
            estado={tarea.estado}
          />
        ))}
      </div>
    </div>
  );
}