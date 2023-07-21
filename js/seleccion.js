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


let divSeleccionado = null;
function cambiarColor(elemento, seccionId) {
  if (divSeleccionado) {
    divSeleccionado.style.backgroundColor = '#ffffff';
    divSeleccionado.style.border = 'none';
  }
  elemento.style.border = '3px solid #f96c00';
  elemento.style.backgroundColor = 'rgb(248, 217, 177)';
  divSeleccionado = elemento;

  const seccion = document.getElementById(seccionId);
  seccion.scrollIntoView({ behavior: 'smooth' });
}
