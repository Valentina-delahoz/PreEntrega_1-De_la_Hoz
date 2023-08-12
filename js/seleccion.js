
// Tomo los datos de origen y destino, almaceno y guardo con capitalización.
function mostrarSweetAlert() {
    Swal.fire({
    title: 'Debe seleccionar ambos vuelos antes de continuar',
    icon: 'error',
    showConfirmButton: true});
}
document.addEventListener('DOMContentLoaded', function() {
    const origen = localStorage.getItem('origen');
    const destino = localStorage.getItem('destino');
    const texto_lugar_ida = document.querySelectorAll('.texto_lugar_ida');
    const texto_lugar_regreso = document.querySelectorAll('.texto_lugar_regreso');
    for (let i = 0; i < texto_lugar_ida.length; i++) {
        texto_lugar_ida[i].textContent = origen.toUpperCase();
    }
    for (let i = 0; i < texto_lugar_regreso.length; i++) {
        texto_lugar_regreso[i].textContent = destino.toUpperCase();
    }
});

// funciones seleccion_1 y seleccion_2
let divSeleccionado_1 = null;
let divSeleccionado_2 = null;

function seleccion_1(elemento, contenedor_Id1) {
  const divId = elemento.id;
  if (divSeleccionado_1) {
    divSeleccionado_1.style.backgroundColor = '#ffffff';
    divSeleccionado_1.style.border = 'none';
  }
  elemento.style.border = '3px solid #f96c00';
  elemento.style.backgroundColor = 'rgb(248, 217, 177)';
  divSeleccionado_1 = elemento;

  const divSeleccionadoData = {
    hora_ida: elemento.querySelector(".hora_ida").textContent,

    hora_regreso: elemento.querySelector(".hora_regreso").textContent,

    precio: elemento.querySelector(".precio").textContent,

    texto_lugar_ida: elemento.querySelector(".texto_lugar_ida").textContent,

    texto_lugar_regreso: elemento.querySelector(".texto_lugar_regreso").textContent,

    tiempo: elemento.querySelector(".tiempo").textContent,
  };
  localStorage.setItem('divSeleccionadoId_1', divId);
  localStorage.setItem('divSeleccionadoData_1', JSON.stringify(divSeleccionadoData));

  const seccion_destino = document.getElementById('contenedor_5');
  seccion_destino.scrollIntoView({ behavior: 'smooth' });
}
function seleccion_2(elemento, contenedor_Id2) {
  const divId = elemento.id;
  if (divSeleccionado_2) {
    divSeleccionado_2.style.backgroundColor = '#ffffff';
    divSeleccionado_2.style.border = 'none';
  }
  elemento.style.border = '3px solid #f96c00';
  elemento.style.backgroundColor = 'rgb(248, 217, 177)';
  divSeleccionado_2 = elemento;

  const divSeleccionadoData = {
    hora_ida: elemento.querySelector(".hora_ida").textContent,

    hora_regreso: elemento.querySelector(".hora_regreso").textContent,

    precio: elemento.querySelector(".precio").textContent,

    texto_lugar_ida: elemento.querySelector(".texto_lugar_ida").textContent,

    texto_lugar_regreso: elemento.querySelector(".texto_lugar_regreso").textContent,

    tiempo: elemento.querySelector(".tiempo").textContent,

  };
  localStorage.setItem('divSeleccionadoId_2', divId);
  localStorage.setItem('divSeleccionadoData_2', JSON.stringify(divSeleccionadoData));

  const seccion_destino = document.getElementById('contenedor_6');
  seccion_destino.scrollIntoView({ behavior: 'smooth' });
}

//Redireccionamiento a la siguiente página
function Ir_personalizacion() {
    const divSeleccionadoId_1 = localStorage.getItem('divSeleccionadoId_1');

    const divSeleccionadoDataJSON_1 = localStorage.getItem('divSeleccionadoData_1');

    const divSeleccionadoData_1 = JSON.parse(divSeleccionadoDataJSON_1);
  
    const divSeleccionadoId_2 = localStorage.getItem('divSeleccionadoId_2');
    const divSeleccionadoDataJSON_2 = localStorage.getItem('divSeleccionadoData_2');
    const divSeleccionadoData_2 = JSON.parse(divSeleccionadoDataJSON_2);
  
    divSeleccionadoId_1 && divSeleccionadoData_1 && divSeleccionadoId_2 && divSeleccionadoData_2 ? window.location.href = "http://127.0.0.1:5501/pages/personalizacion.html": mostrarSweetAlert()
  }

//Información con la que toman los datos los contenedores de vuelo:
const datos_vuelo_tiempo = [
    { tiempo: "5h 20 mins" },
    { tiempo: "4h 40 mins" },
    { tiempo: "4h 10 mins" },
    { tiempo: "4h 10 mins" },
    { tiempo: "5h 20 mins" },
    { tiempo: "4h 40 mins" },
    { tiempo: "4h 10 mins" },
    { tiempo: "4h 10 mins" },
    { tiempo: "4h 10 mins" }
  ];
const tiempo = document.getElementsByClassName("tiempo");
for (let i = 0; i < tiempo.length; i++) {
tiempo[i].textContent = datos_vuelo_tiempo[i].tiempo;
}
const datos_vuelo_hora_ida = [
    { hora_ida: "23:50" },
    { hora_ida: "11:30" },
    { hora_ida: "15:10" },
    { hora_ida: "17:40" },
    { hora_ida: "23:50" },
    { hora_ida: "11:30" },
    { hora_ida: "15:10" },
    { hora_ida: "17:40" },
    { hora_ida: "17:40" }
  ];
const hora_ida = document.getElementsByClassName("hora_ida");
for (let i = 0; i < hora_ida.length; i++) {
hora_ida[i].textContent = datos_vuelo_hora_ida[i].hora_ida;
}
const datos_vuelo_hora_regreso = [
    { hora_regreso: "05:10" },
    { hora_regreso: "16:10" },
    { hora_regreso: "19:20" },
    { hora_regreso: "21:50" },
    { hora_regreso: "05:10" },
    { hora_regreso: "16:10" },
    { hora_regreso: "19:20" },
    { hora_regreso: "21:50" },
    { hora_regreso: "21:50" }
  ];
const hora_regreso = document.getElementsByClassName("hora_regreso");
for (let i = 0; i < hora_regreso.length; i++) {
hora_regreso[i].textContent = datos_vuelo_hora_regreso[i].hora_regreso;
}
const datos_vuelo_precio = [
    { precio: "$2345213 COP" },
    { precio: "$2408200 COP" },
    { precio: "$3100960 COP" },
    { precio: "$3100960 COP" },
    { precio: "$2345213 COP" },
    { precio: "$2408200 COP" },
    { precio: "$3100960 COP" },
    { precio: "$3100960 COP" },
    { precio: "$3200960 COP" }
  ];
const precio = document.getElementsByClassName("precio");
for (let i = 0; i < precio.length; i++) {
    precio[i].textContent = datos_vuelo_precio[i].precio;
}