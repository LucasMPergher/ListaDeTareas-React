import CartaTarea from "./CartaTarea";
import {useContext} from "react";
import { Contexto } from "../context/ContextoContext.jsx";


// Componente que recibe un arreglo de tareas por props
// y se encarga de mostrar cada una en pantalla
export default function ListaTareas() {

  const {tareas, eliminarTarea} = useContext(Contexto);

  // Si el arreglo de tareas está vacío, mostramos un mensaje
  if (tareas.length === 0) {
    return <h2 className="text-white text-4x1 font-bold text-center">No hay tareas disponibles</h2>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {/* Recorremos el arreglo de tareas y pintamos una tarjeta por cada una */}
      {tareas.map((tarea) => (
        <CartaTarea
          key={tarea.id}
          tarea={tarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  );
}
