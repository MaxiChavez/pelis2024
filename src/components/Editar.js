import React from "react";

const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
  const titulo_componente = "Editar pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();
    // conseguir el target del evento
    let target = e.target;
    const pelisAlmacenadas = conseguirPeliculas();
    const indice = pelisAlmacenadas.findIndex((peli) => peli.id === id);
    //crear objeto con el id de ese indice
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    pelisAlmacenadas[indice] = peli_actualizada;
    //guardar en el local storage y actualizar estados
    localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas));

    //actualizar estados
    setListadoState(pelisAlmacenadas);
    // puedo poner 0 aqui tambien
    setEditar(false);
  };
  return (
    <div className="edit_form">
      <h3 className="title">
        {titulo_componente}: {peli.titulo}
      </h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        ></textarea>
        <input type="submit" className="editar" value="actualizar" />
      </form>
    </div>
  );
};

export default Editar;
