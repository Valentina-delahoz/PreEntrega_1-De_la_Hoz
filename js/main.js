function Ir_seleccion() {
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha_ida = document.getElementById('fecha_ida').value;
    const fecha_regreso = document.getElementById('fecha_regreso').value;
    const numero_pasajeros = document.getElementById('numero_pasajeros').value;
    
    console.log(origen);
    console.log(destino);
    console.log(fecha_ida);
    console.log(fecha_regreso);

    if (origen.trim() !== "" && destino.trim() !== "" && fecha_ida.trim() !== "" && numero_pasajeros.trim() !== "") {
        const formulario = document.getElementById('formulario');
        localStorage.setItem('origen', origen);
        localStorage.setItem('destino', destino);
        localStorage.setItem('fecha_ida', fecha_ida);
        localStorage.setItem('fecha_regreso', fecha_regreso);
        localStorage.setItem('numero_pasajeros', numero_pasajeros);
        formulario.action = "http://127.0.0.1:5501/pages/seleccion.html";
        formulario.submit();
    } 
    else {}
}
/*
//Compra de tiquete de un avión
function resumen(callback) {
    console.log("RESUMEN DE VUELO SELECCIONADO: ");
    console.log(" ");
    console.log("VUELO DE IDA");
    console.log("Fecha: 18 de julio de 2023");
    console.log("Aeropuerto El Dorado (BAQ) 17:15  -->  Aeropuerto de Cartagena (CAG) 19:45");
    console.log("Aerolínea: Avianca");
    console.log(" ");
    console.log("VUELO DE REGRESO");
    console.log("Fecha: 20 de julio de 2023");
    console.log("Aeropuerto de Cartagena (CAG) 8:30 -->  Aeropuerto El Dorado (BAQ) 11:15");
    console.log("Aerolínea: Vueling");
    console.log(" ");
    callback();
    console.log("_____________________________________________");
    console.log(" ");
}

//Número de pasajeros
function obtener_cantidad_pasajeros() {
    let repeticion = true;
    let cantidadPasajeros;
    while (repeticion) {
        cantidadPasajeros = Number(prompt("Ingrese número de pasajeros"));
        if (isNaN(cantidadPasajeros)) {
            alert("Ese no es un número válido");
            repeticion = true;
        } 
        else {
        repeticion = false;
        }
    }
    return cantidadPasajeros;
}

//Datos de los pasajeros
function datos_pasajeros(numero_pasajeros) {
    console.log("RESUMEN DE PASAJEROS");
    console.log(" ");
    const nombres_pasajeros = [];  //array, lista de nombres
    class Pasajero {
        constructor() {
            this.nombre = prompt("Ingrese nombre(s) del pasajero");
            this.apellido = prompt("Ingrese apellido(s) del pasajero");
            nombres_pasajeros.push(this.nombre + " " + this.apellido);
            let tipo_identidad;
            let repeticion = true;
            while (repeticion) {
                tipo_identidad = Number(prompt("Identificación del pasajero (1. DNI) (2. Pasaporte)"));
                switch (tipo_identidad) {
                    case 1:
                    this.identidad = prompt("Ingrese DNI del pasajero");
                    this.tipo = "DNI " ;
                    repeticion = false;
                    break;
                    
                    case 2:
                    this.identidad = prompt("Ingrese pasaporte del pasajero");
                    this.tipo = "Pasaporte " ;
                    repeticion = false;
                    break;
                    
                    default:
                    alert("Esta no es una opción válida");
                }
            }
            this.telefono = prompt("Ingrese teléfono de contacto del pasajero");
        }
    }
    for (let contador = 1; contador <= numero_pasajeros; contador++) {
        console.log("Pasajero " + contador);
        const pasajero = new Pasajero();
        console.log("   * Nombre(s): " + pasajero.nombre);
        console.log("   * Apellido(s): " + pasajero.apellido);
        console.log("   * Identificación: " + pasajero.tipo + pasajero.identidad);
        console.log("   * Teléfono: " + pasajero.telefono);
        console.log("_____________________________________________");
        console.log(" ");
    }
    return nombres_pasajeros;
}

//Factura electrónica
function factura_electronica(numero_pasajeros) {
    let tarifa_aerea = 2271670 * numero_pasajeros;
    let impuestos_y_tasas = tarifa_aerea * 0.25;
    let total_a_pagar = tarifa_aerea + impuestos_y_tasas;
    alert("FACTURA ELECTRÓNICA\nTarifa aérea: $" + tarifa_aerea + "\nImpuestos y tasas: $" + impuestos_y_tasas + "\nTotal a pagar: $" + total_a_pagar);
}

//Proceso de pago
let titular;
let numero_titular;
function proceso_de_pago() {
    class Tarjeta {
        constructor() {
            this.numero = Number(prompt("Ingrese número de tarjeta de crédito"));
            this.vencimiento = Number(prompt("Ingrese año de vencimiento de la tarjeta"));
            this.nombre_titular = prompt("Ingrese el nombre del titular de la tarjeta");
            let repeticion = true;
            titular = nombres_pasajeros.find(nombre_pasajero => nombre_pasajero === this.nombre_titular);
            numero_titular = nombres_pasajeros.findIndex(nombre_pasajero => nombre_pasajero === this.nombre_titular);;
            while (repeticion){
                this.correo = prompt("Ingrese la dirección de correo electrónico asociada");
                if (this.correo.includes("@") && this.correo.includes(".com")) {
                    repeticion = false;
                }
                else {
                    alert("El correo electrónico no es válido");
                    repeticion = true;
                }
            }
            repeticion = true;
            while (repeticion){
                this.cuotas = Number(prompt("Ingrese el número de cuotas a pagar  (min 1. max 36)"));
                if (this.cuotas >= 1 && this.cuotas <= 36) {
                    repeticion = false;
                }
                else {
                    alert("El número ingresado está fuera del rango válido");
                    repeticion = true;
                }
            }
        }
    }
    const tarjeta = new Tarjeta();
}

//Reserva
function reserva(numero_pasajeros, nombres_pasajeros){
    console.log("RESERVA");
    console.log(" ");
    console.log("No. de vuelo(s): AV1234  VL1039");
    console.log("Recorrido:");
    console.log("  BAG 17:15 --> CAG 19:45");
    console.log("     Duración: 2h 30 mins");
    console.log("     Terminal: 23D  ");
    console.log("  CAG 8:30 --> BAQ 11:00");
    console.log("     Duración: 2h 30 mins");
    console.log("     Terminal: 45E  ");
    console.log("Pasajeros: " + numero_pasajeros);
    for (let contador = 0; contador < numero_pasajeros; contador++) {
        console.log("   * "+ nombres_pasajeros[contador]);
    }
    console.log("Tarifa Básica");
    let corrector_numero_titular = numero_titular+1;
    console.log("Titular: " + titular + " - Pasajero No. " + corrector_numero_titular);
    console.log("______________________________");
}

//Llamado de las funciones
resumen(function() {
    console.log("Precio tiquete: $2.271.670");
});
let numero_pasajeros = obtener_cantidad_pasajeros();
let nombres_pasajeros = datos_pasajeros(numero_pasajeros);
alert("Rectifique que los datos introducidos de los pasajeros en la consola son correctos");
factura_electronica(numero_pasajeros);
proceso_de_pago();
reserva(numero_pasajeros, nombres_pasajeros);
alert("¡Su reserva se ha generado en la consola correctamente!");
*/