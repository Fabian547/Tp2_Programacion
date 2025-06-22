import { useState } from 'react';
import './App.css'
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import Filtrado from './componentes/Filtrado';

function App() {

  const [id, setID] = useState(0)
  const [tareas, setTareas] = useState([]);

  const guardarTarea = (tarea) =>{
    const tareasNuevo = [...tareas];
    tareasNuevo.push({...tarea, id});
    console.log(tareasNuevo)
    setTareas(tareasNuevo);
    setID(id + 1);
  }

  const eliminarTarea = (tareaId) => {
    const tareasNuevo = [...tareas];
    const posicion = tareasNuevo.findIndex((tarea) => tarea.id === tareaId);
    tareasNuevo.splice(posicion, 1);
    setTareas(tareasNuevo);
  }
  return (
    <div>
       <Formulario 
          guardartarea={(tarea) => guardarTarea(tarea)} />
       <Filtrado/>
       <Listado
          tareas={tareas}
          eliminarTareas={(tareaId) => eliminarTarea(tareaId)}/>
    </div>
  )

}
export default App
