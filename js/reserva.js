document.addEventListener('DOMContentLoaded', function() {
    // Obtiene los datos del localStorage y los muestra en el resumen
    const origenSpan = document.getElementById('origen');
    const destinoSpan = document.getElementById('destino');
    const fechaIdaSpan = document.getElementById('fecha_ida');
    const fechaRegresoSpan = document.getElementById('fecha_regreso');

    const origen = localStorage.getItem('origen');
    const destino = localStorage.getItem('destino');
    const fechaIda = localStorage.getItem('fecha_ida');
    const fechaRegreso = localStorage.getItem('fecha_regreso');

    origenSpan.textContent = origen;
    destinoSpan.textContent = destino;
    fechaIdaSpan.textContent = fechaIda;
    fechaRegresoSpan.textContent = fechaRegreso; 
});