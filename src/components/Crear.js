// import React, { useState } from "react";

// const Crear = () => {
//   const tituloComponente = "Añadir pelicula";
//   const [peliState, setPeliState] = useState({ titulo: "", descripcion: "" });
//   const { titulo, descripcion } = peliState;

//   const conseguirDatosForm = (e) => {
//     e.preventDefault();
//     //conseguir datos del formulario
//     let target = e.target;
//     let titulo = target.titulo.value;
//     let descripcion = target.descripcion.value;

//     // crear  obejto de la pelicula
//     let peli = {
//       id: new Date().getTime(),
//       titulo,
//       descripcion,
//     };

//     setPeliState(peli);
//     console.log(peliState);
//     alert(titulo + descripcion);
//     //Guardar en local storage
//     guardarEnStorage(peli);
//   };

//   const guardarEnStorage = (peli) => {
//     //conseguir los elementos que hay en el storage
//     let elementos = JSON.parse(localStorage.getItem("pelis"));
//     console.log(elementos);
//     //Comprobar si es un array
//     if (Array.isArray(elementos)) {
//       elementos.push(peli);
//       //añadir dentro del array un elemento nuevo
//     } else {
//       elementos = [peli];
//       //crear un array con nueva peli
//     }
//     console.log("eelementos :", elementos);

//     //guardar en el local storage

//     //Devolver el objeto guardado
//   };
//   return (
//     <div className="add">
//       <h3 className="title">{tituloComponente}</h3>
//       <strong>
//         {titulo && descripcion && "Creaste la pelicula:" + peliState.titulo}
//       </strong>
//       <form onSubmit={conseguirDatosForm}>
//         <input type="text" placeholder="Titulo" name="titulo" />
//         <textarea placeholder="Descripcion" name="descripcion"></textarea>
//         <input type="submit" value="guardar" />
//       </form>
//     </div>
//   );
// };

// export default Crear;

import React, { useState } from "react";
import GuardarEnStorage from "./helpers/GuardarEnStorage";

const Crear = () => {
  const tituloComponente = "Añadir pelicula";
  const [peliState, setPeliState] = useState({ titulo: "", descripcion: "" });
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // Crear objeto de la película
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    // Actualizar el estado
    setPeliState(peli);

    // Mostrar en consola el objeto de película
    console.log(peli);

    // Mostrar alerta con el título y la descripción
    alert(titulo + " - " + descripcion);

    // Guardar la película en localStorage
    GuardarEnStorage("pelis", peli);
    GuardarEnStorage("copiaDatos", peli);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion && "Creaste la pelicula: " + peliState.titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" placeholder="Titulo" name="titulo" />
        <textarea placeholder="Descripcion" name="descripcion"></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;
