document.getElementById('datos_pasajeros').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtengo los datos ingresados en el formulario
    const nombre_pasajero = document.getElementById('nombre_pasajero').value;
    const apellido_pasajero = document.getElementById('apellido_pasajero').value;
    const tipo_identidad = document.getElementById('tipo_identidad').value;
    const identidad_pasajero = document.getElementById('identidad_pasajero').value;
    const telefono = document.getElementById('telefono').value;

    // Añado los datos al localstorage
    localStorage.setItem('nombre_pasajero', nombre_pasajero);
    localStorage.setItem('apellido_pasajero', apellido_pasajero);
    localStorage.setItem('tipo_identidad', tipo_identidad);
    localStorage.setItem('identidad_pasajero', identidad_pasajero);
    localStorage.setItem('telefono', telefono);
    mostrarSweetAlert2();
});
const mostrarSweetAlert2 = () => {
    Swal.fire('Sus datos personales se han guardado con éxito.');
};

// Obtengo los datos del localStorage y los convierto de JSON a objeto
const divSeleccionadoDataJSON_1 = localStorage.getItem('divSeleccionadoData_1');
const divSeleccionadoDataJSON_2 = localStorage.getItem('divSeleccionadoData_2');

// Verifico si las key existen en el LocalStorage
const divSeleccionadoData_1 = divSeleccionadoDataJSON_1 ? JSON.parse(divSeleccionadoDataJSON_1) : {};
const divSeleccionadoData_2 = divSeleccionadoDataJSON_2 ? JSON.parse(divSeleccionadoDataJSON_2) : {};

// Ahora accedeo a los datos individualmente
const hora_ida1 = divSeleccionadoData_1.hora_ida;
const hora_regreso1 = divSeleccionadoData_1.hora_regreso;
const precio1 = parseFloat(divSeleccionadoData_1.precio.replace('$', '').replace(' COP', ''));
const texto_lugar_ida1 = divSeleccionadoData_1.texto_lugar_ida;
const texto_lugar_regreso1 = divSeleccionadoData_1.texto_lugar_regreso;
const tiempo1 = divSeleccionadoData_1.tiempo;

const hora_ida2 = divSeleccionadoData_2.hora_ida;
const hora_regreso2 = divSeleccionadoData_2.hora_regreso;
const precio2 = parseFloat(divSeleccionadoData_2.precio.replace('$', '').replace(' COP', ''));
const texto_lugar_ida2 = divSeleccionadoData_2.texto_lugar_ida;
const texto_lugar_regreso2 = divSeleccionadoData_2.texto_lugar_regreso;
const tiempo2 = divSeleccionadoData_2.tiempo;

// Asigno los valores al HTML
const texto_lugar_ida1Elemento = document.querySelector('.texto_lugar_ida1');
const texto_lugar_regreso1Elemento = document.querySelector('.texto_lugar_regreso1');
const hora_ida1Elemento = document.querySelector('.hora_ida1');
const hora_regreso2Elemento = document.querySelector('.hora_regreso2');

texto_lugar_ida1Elemento.textContent = `Origen: ${texto_lugar_ida1}`;
texto_lugar_regreso1Elemento.textContent = `Destino: ${texto_lugar_regreso1}`;

hora_ida1Elemento.textContent = `Hora de salida: ${hora_ida1}`;
hora_regreso2Elemento.textContent = `Hora de regreso: ${hora_regreso2}`;

// Calculo los precios
let tarifaPrecio = precio1 + precio2;
const impuestosPrecio = tarifaPrecio * 0.21;
let totalPrecio = tarifaPrecio + impuestosPrecio;

// Muestro los precios en la página
const tarifaElemento = document.getElementById('tarifaPrecio');
const impuestosElemento = document.getElementById('impuestosPrecio');
const totalElemento = document.getElementById('totalPrecio');

tarifaElemento.textContent = `$${tarifaPrecio.toFixed(2)} COP`;
impuestosElemento.textContent = `$${impuestosPrecio.toFixed(2)} COP`;
totalElemento.textContent = `$${totalPrecio.toFixed(2)} COP`;

// Función para manejar el evento de clic en el botón "Añadir/Quitar"
function handleClickAnadirQuitar(event) {
    event.preventDefault();

    const contenedorBox = this.parentElement.parentElement;
    const precioBox = parseFloat(contenedorBox.querySelector('.precio').textContent.replace('$', '').replace(' COP', ''));

    const index = [...botonesAñadir].indexOf(this);

    const precioActual = parseFloat(localStorage.getItem(`precio_box_${index + 1}`) || '0');
    const nuevoPrecio = this.textContent === 'Añadir' ? precioBox : 0;

    // Actualizo el precio en el LocalStorage
    localStorage.setItem(`precio_box_${index + 1}`, nuevoPrecio);

    // Actualizo la variable tarifaPrecio
    tarifaPrecio += nuevoPrecio - precioActual;

    // Actualizo el precio total en el LocalStorage
    localStorage.setItem('precio_total', tarifaPrecio);

    // Actualizo la variable totalPrecio
    totalPrecio = tarifaPrecio + impuestosPrecio;

    // Cambio el texto y el color del botón
    this.textContent = nuevoPrecio === 0 ? 'Añadir' : 'Quitar';
    this.style.backgroundColor = nuevoPrecio === 0 ? '' : '#3d3c3c';

    // Actualizo la visualización del precio total en la página
    totalElemento.textContent = `$${totalPrecio.toFixed(2)} COP`;
}

// Agrego el evento de escucha a los botones "Añadir"
const botonesAñadir = document.querySelectorAll('.contenedor_boton button');
botonesAñadir.forEach((boton, index) => {
    boton.addEventListener('click', handleClickAnadirQuitar);
});

// Actualizo la visualización inicial del precio total en la página
totalElemento.textContent = `$${totalPrecio.toFixed(2)} COP`;

// Función para ir a la sección de pago
function Ir_pago() {
    window.location.href = "https://valentina-delahoz.github.io/ProyectoFinal-De_la_Hoz/pages/pago.html";
  }





