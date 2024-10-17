import React, { useState } from "react";

const Crear = () => {
  const tituloComponente = "Añadir pelicula";
  const [peliState, setPeliState] = useState({ titulo: "", descripcion: "" });
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    //conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // crear  obejto de la pelicula
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };
    setPeliState(peli);
    console.log(peliState);
    alert(titulo + descripcion);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      {titulo && descripcion && "Creaste la pelicula:" + peliState.titulo}
      <form onSubmit={conseguirDatosForm}>
        <input type="text" placeholder="Titulo" name="titulo" />
        <textarea placeholder="Descripcion" name="descripcion"></textarea>
        <input type="submit" value="guardar" />
      </form>
    </div>
  );
};

export default Crear;
