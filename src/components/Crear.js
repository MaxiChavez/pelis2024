import React, { useState } from "react";
import GuardarEnStorage from "./helpers/GuardarEnStorage";

const Crear = ({ setListadoState }) => {
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

    // Guardar el estado
    setPeliState(peli);
    //Actualizar el estado del listado principal
    setListadoState((elementos) => {
      return [...(elementos || []), peli];
    });

    //Guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion && "Creaste la pelicula: " + titulo}
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
