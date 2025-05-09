// Este script carga los cursos desde cursos.json y los inserta en la tabla

fetch("../cursos.json")
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById("tabla-cursos-body");

    data.forEach(curso => {
      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${curso.nivel}</td>
        <td>${curso.modalidad}</td>
        <td>${curso.duracion}</td>
        <td>${curso.precio}</td>
      `;

      tabla.appendChild(fila);
    });
  })
  .catch(error => console.error("Error al cargar los cursos:", error));
