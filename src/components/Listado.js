import React, { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("componente del estafo");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis")) || [];
    setListadoState(peliculas);

    return peliculas;
  };

  const borrarPeli = (id) => {
    // ... (resto del código)
    let pelis_almacenadas = conseguirPeliculas();

    // Crear una copia del array antes de filtrar
    const nuevo_array_peliculas = [...pelis_almacenadas];

    // Filtrar el array usando el operador de estricta igualdad
    const peliculasFiltradas = nuevo_array_peliculas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    // Actualizar el estado y el localStorage
    setListadoState(peliculasFiltradas);
    localStorage.setItem("pelis", JSON.stringify(peliculasFiltradas));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>
              {/**aparece formulario de editar
               *
               */}
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};

export default Listado;
