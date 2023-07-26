function Ir_seleccion() {
    localStorage.clear();
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha_ida = document.getElementById('fecha_ida').value;
    const fecha_regreso = document.getElementById('fecha_regreso').value;
    
    console.log(origen);
    console.log(destino);
    console.log(fecha_ida);
    console.log(fecha_regreso);

    if (origen.trim() !== "" && destino.trim() !== "" && fecha_ida.trim() !== "") {
        const formulario = document.getElementById('formulario');
        localStorage.setItem('origen', origen);
        localStorage.setItem('destino', destino);
        localStorage.setItem('fecha_ida', fecha_ida);
        localStorage.setItem('fecha_regreso', fecha_regreso);
        formulario.action = "http://127.0.0.1:5501/pages/seleccion.html";
        formulario.submit();
    } 
    else {}
}
/* En revizión (No cuenta para esta entrega)

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