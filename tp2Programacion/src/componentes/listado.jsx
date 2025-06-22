function Tarjeta({nombre,categoria,prioridad,estado, eliminar}){
    return(
        <div className="Tarjeta"
            style={{backgroundColor: rol === 'alumno' ? "lightblue" : "lightcoral"}}
        >
            <span className="Eliminar"
            onClick={() => eliminar()}
            >X</span>
            <span>Nombre: {nombre}</span>
            <span>categoria: {categoria}</span>
            <span>prioridad: {prioridad}</span>
            <span>estado: {estado}</span>
        </div>
    )
}

export default function Listado ({tareas, eliminarTareas}){
    return(
        <div className='Panel' style={{backgroundColor:"lightyellow"}}>
            
            <h3>Tareas</h3>

            <div className="Listado">
                
                {tareas.map((tarea, index)=>
                <Tarjeta 
                    key={tarea.id}
                    eliminar={() => eliminarTareas(tarea.id)}
                    Nombre={tarea.Nombre}
                    categoria={tarea.categoria}
                    prioridad={tarea.prioridad}
                    estado={tarea.estado}
                    />
                )}
                
            </div>
            
        </div>
    );
}