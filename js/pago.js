// Obtengo los datos del localStorage y los convierto de JSON a objeto
document.addEventListener("DOMContentLoaded", function() {
    // Obtengo los elementos del local storage
    const nombrePasajero = localStorage.getItem('nombre_pasajero');
    
    // Asigna los valores al elemento HTML
    const nombreSpan = document.querySelector('.nombre_pasajero');
    nombreSpan.textContent = nombrePasajero;
  });

// Boton de procesamiento de pago y guardado de informacion
document.getElementById('datos_pasajero_pago').addEventListener('submit', function(event) {
    event.preventDefault();

    Swal.fire({
        title: 'Procesando pago...',
        showConfirmButton: false,
        allowOutsideClick: false,
        showLoaderOnConfirm: true,
      });

    // Obtengo los datos ingresados en el formulario
    const numero_tarjeta = document.getElementById('numero_tarjeta').value;
    const vencimiento_tarjeta = document.getElementById('vencimiento_tarjeta').value;
    const nombre_titular = document.getElementById('nombre_titular').value;
    const correo_titular = document.getElementById('correo_titular').value;
    const numero_cuotas = document.getElementById('numero_cuotas').value;

    // Añado los datos al localstorage
    localStorage.setItem('numero_tarjeta', numero_tarjeta);
    localStorage.setItem('vencimiento_tarjeta', vencimiento_tarjeta);
    localStorage.setItem('nombre_titular', nombre_titular);
    localStorage.setItem('correo_titular', correo_titular);
    localStorage.setItem('numero_cuotas', numero_cuotas);

      // Término de guardado
      setTimeout(function() {
        Swal.fire({
          title: 'Pago realizado con éxito',
          icon: 'success',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      }, 3000);
});