import React from "react";

export default function App() {
  const [mensajes, setMensajes] = React.useState(["a", "b", "c"]); //la array mensajes tiene 3 mensajes

  return (
    <div>
      {mensajes.length === 0 ? ( // si mensajes es 0
        <h1> Estas al dia con tus mensajes</h1> //mostramos no tenes mensajes
      ) : (
        // de los contrario
        <h1>
          Tienes {mensajes.length} {/* tenes 4 mensajes */}
          {mensajes.length === 1 ? "mensaje" : "mensajes"} sin leer
          {/* si mensajes es 1 mostramos tienes 1 mensaje si es mayor mostramos 2 mensajes */}
        </h1>
      )}
    </div>
  );
}
