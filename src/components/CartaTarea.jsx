import React from "react";
import { Contexto } from "../context/ContextoContext.jsx";

function CartaTarea({ tarea, eliminarTarea }) {
  const { eliminarTarea: eliminarTareaContext } = React.useContext(Contexto);
  console.log("Valor del contexto en CartaTarea:", eliminarTareaContext);

  return (
    <div
      className="bg-gray-800 text-white"
      key={tarea.id} // key única para que React identifique cada elemento
      style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
    >
      <h3 className="text-xl font bold capitalize">{tarea.titulo}</h3>
      {/* Aquí podrías mostrar también la descripción o el estado "completada" */}
      <p className="text-gray-500 text-sm italic ">{tarea.descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-700"
        onClick={() => eliminarTarea(tarea.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default CartaTarea;
