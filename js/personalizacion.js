const numero_pasajeros_perso = parseInt(localStorage.getItem('numero_pasajeros'));

const contenedor_datos_pasajeros = document.getElementById('contenedor_datos_pasajeros');

for (let i = 0; i < numero_pasajeros_perso; i++) {
    const divRepetido = document.createElement('div');
    divRepetido.className = 'div-repetido';
    contenedor_datos_pasajeros.appendChild(divRepetido);
}

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const tipoIdentidad = document.getElementById('tipo_identidad').value;
  const telefono = document.getElementById('telefono').value;

  // Crear un objeto con la información del pasajero
  const pasajero = {
    nombre,
    apellido,
    tipoIdentidad,
    telefono
  };

  // Convertir el objeto a formato JSON
  const pasajeroJSON = JSON.stringify(pasajero);

  // Guardar el objeto JSON en el LocalStorage
  localStorage.setItem('pasajero', pasajeroJSON);

  // Limpiar los campos del formulario
  formulario.reset();

  alert('Información guardada en el LocalStorage.');
});

const origen = localStorage.getItem('origen');
const destino = localStorage.getItem('destino');
