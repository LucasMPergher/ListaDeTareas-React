import React from "react";
import ListaTareas from "./components/ListaTareas";
import FormularioDeTareas from "./components/FormularioDeTareas";

// Componente principal de la aplicación
// Aquí tendremos el listado completo de tareas y
// se las pasamos a los componentes hijos mediante props
function App() {
  // "tareas" es el estado que contiene el arreglo de tareas
  // Lo inicializamos con los datos del archivo tareas.js (data)
  // siguiendo la regla Ui componetes tree
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-10">
      
      {/* Formulario para crear nuevas tareas */}
      <FormularioDeTareas />

      {/* Componente que muestra la lista de tareas.
            Le pasamos el arreglo "tareas" como prop */}
      
      <ListaTareas />
      </div>
    </main>
  );
}

export default App;
 