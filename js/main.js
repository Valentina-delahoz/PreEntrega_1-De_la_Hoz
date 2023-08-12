//Sugerencias al usuario de paises qué digitar al momento de pedir origen y destino
const origen = document.getElementById('origen');
const destino = document.getElementById('destino');
const datalistPaisesOrigen = document.getElementById('lista_paises_origen');
const datalistPaisesDestino = document.getElementById('lista_paises_destino');

const todosLosPaises = []; // Almacenar la lista completa de países
(async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    todosLosPaises.push(...data.map(country => country.name));
})();

origen.addEventListener('input', () => {
    const searchTerm = origen.value.trim().toLowerCase();
    const sugerencias = todosLosPaises.filter(country => country.toLowerCase().startsWith(searchTerm));
    mostrarSugerencias(sugerencias, datalistPaisesOrigen);
});

destino.addEventListener('input', () => {
    const searchTerm = destino.value.trim().toLowerCase();
    const sugerencias = todosLosPaises.filter(country => country.toLowerCase().startsWith(searchTerm));
    mostrarSugerencias(sugerencias, datalistPaisesDestino);
});

function mostrarSugerencias(sugerencias, datalist) {
    datalist.innerHTML = '';
    sugerencias.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        datalist.appendChild(option);
    });
}

// Redireccionamiento a la selección de vuelo
function Ir_seleccion() {
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha_ida = document.getElementById('fecha_ida').value;
    const fecha_regreso = document.getElementById('fecha_regreso').value;
    
    console.log(origen);
    console.log(destino);
    console.log(fecha_ida);
    console.log(fecha_regreso);

    if (origen.trim() !== "" && destino.trim() !== "" && fecha_ida.trim() !== "" && fecha_regreso.trim() !== "") {
        const formulario = document.getElementById('formulario');
        localStorage.setItem('origen', origen);
        localStorage.setItem('destino', destino);
        localStorage.setItem('fecha_ida', fecha_ida);
        localStorage.setItem('fecha_regreso', fecha_regreso);
        formulario.action = "http://127.0.0.1:5501/pages/seleccion.html";
        formulario.submit();
    } 
    else {console.log("Por favor completa todos los campos.");}
}

