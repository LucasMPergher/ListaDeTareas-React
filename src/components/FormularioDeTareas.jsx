import {useState, useContext} from "react";
import { Contexto } from "../context/ContextoContext.jsx";


// Componente encargado de mostrar el formulario
// para crear una nueva tarea
export function FormularioDeTareas({ crearTarea }) {
  // Estado local para guardar lo que el usuario escribe
  // en el input de "Nueva tarea"
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // ver si puedoa cceder al valor del contexto
  const valor = useContext(Contexto);
  console.log("Valor del contexto en FormularioDeTareas:", valor);

  // Esta función se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    // Evita que el navegador recargue la página al enviar el form
    e.preventDefault();
    // Aquí más adelante podrías avisar al componente App
    // para que agregue esta tarea al listado de tareas

    crearTarea({ titulo, descripcion }); // Llamamos a la función pasada por props

    setTitulo(""); // Limpiar el campo después de agregar la tarea
    setDescripcion(""); // Limpiar el campo después de agregar la descripción

    // limpiar el input después de enviar el formulario
    e.target.reset();
  };

  return (
    <div className="max-w-md mx-auto">
      {/* onSubmit se ejecuta cuando el usuario hace click en el botón o presiona Enter */}
      <form className="bg-slate-800 p-10 mb-4" action="" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2 rounded-md text-black"
          type="text"
          placeholder="Nueva tarea"
          // Cada vez que el usuario escribe, actualizamos el estado "titulo"
          onChange={(e) => setTitulo(e.target.value)}
          autoFocus // autofocus pocisiona el cursor en el input al cargar la página
        />
        <textarea
        className="bg-slate-300 p-3 w-full mb-2 rounded-md text-black"
          placeholder="Descripción de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>

        <button 
        className="bg-indigo-500 px-3 py-1 rounded-md"
        type="submit">Agregar tarea</button>
      </form>
    </div>
  );
}

export default FormularioDeTareas;
