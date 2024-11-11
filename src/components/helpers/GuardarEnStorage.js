const GuardarEnStorage = (clave, elemento) => {
  // Obtener elementos del localStorage
  let elementos = JSON.parse(localStorage.getItem(clave) || []);

  // Comprobar si es un array, si no lo es, creamos uno
  if (Array.isArray(elementos)) {
    elementos.push(elemento); // Añadir nueva película
  } else {
    elementos = [elemento]; // Crear array con la nueva película
  }

  // Guardar el array actualizado en localStorage
  localStorage.setItem(clave, JSON.stringify(elementos));

  // Mostrar en consola los elementos
  console.log("Elementos guardados: ", elementos);

  return elemento;
};

export default GuardarEnStorage;
