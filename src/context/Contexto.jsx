import { Contexto } from "./ContextoContext";
import { useEffect, useState } from "react";
import { tareas as data } from "../data/tareas";



// Componente proveedor que envuelve a la app con el contexto
// Este archivo ahora solo exporta componentes (no define el contexto)
export default function ContextoProvider(props) {

  const [tareas, setTareas] = useState(data);


    // Función para agregar una nueva tarea al estado
      function crearTarea(tarea) {
        setTareas([
          ...tareas,
          {
            id: tareas.length + 1,
            titulo: tarea.titulo,
            descripcion: tarea.descripcion,
            completada: false,
          },
        ]);
      }

      function eliminarTarea(id) {
          console.log("Eliminar tarea con id:", id);
          // lógica para eliminar la tarea:
          const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
          setTareas(nuevasTareas);
          alert("Tarea con id " + id + " eliminada");
        }

        useEffect(() => {
          console.log("Tareas actualizadas:", tareas);
          setTareas(tareas);
        }, [tareas]);
      

  return (
    <>
      <Contexto.Provider value={{ 
        tareas: tareas, 
        crearTarea: crearTarea, 
        eliminarTarea: eliminarTarea }}>
        {props.children}
      </Contexto.Provider>
    </>
  );
}
