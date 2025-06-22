import { useState } from "react"
import useTarea  from "../hooks/useTarea"

export default function Formulario({guardarTarea}){
    
    const [datos,setDato,limpiarForm] = useTarea();
    const mostrarValores = (e) =>{
        e.preventDefault();
        if (!datos.nombre || !datos.categoria || !datos.prioridad || !datos.rol){
            alert("Faltan campos para completar, porfavor complete todos");
        } else {
            const tarea = datos;
            console.log(tarea);
            guardarTarea(datos);
            limpiarForm();
        }
        
    }
    return (
        <div className='Panel' style={{backgroundColor:"lightblue"}}>

            <form className="Formulario">
                <input 
                type="text" 
                placeholder="nombre" 
                value={datos.nombre} 
                onChange={(e)=> setDato("nombre",e.target.value)} />
                <select 
                value={datos.categoria}
                onChange={(e)=> setDato("categoria",e.target.value)}
                >    
                     <option value="domestico">domestico</option>
                     <option value="laborales">laborales</option>
                     <option value="administrativas">administrativas</option>
                     <option value="sociales">sociales</option>
                     <option value="personales">personales</option>

                </select>

                <select 
                value={datos.prioridad}
                onChange={(e)=> setDato("prioridad",e.target.value)}
                >
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>

                </select>
                <button 
                type="submit"
                onClick={(e) => mostrarValores(e)}
                >Guardar</button>
            </form>
        </div>
    )
}