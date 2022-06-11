const IVA = 1.21;
const impuestosTasas = 1.50;
let totalcompra = 0;
let cantidad = 1;

class Pasaje {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  calcularPrecio() {
    return ((this.precio * cantidad) * 1.21) * 1.50;
  }
}

const pasaje1 = new Pasaje("Mendoza", 60000);
const pasaje2 = new Pasaje("Bariloche", 70000);
const pasaje3 = new Pasaje("Cataratas", 50000);

function confirmarCompra() {
  const respuesta = prompt("Desea adquirir un pasaje? \nEscriba el número de su elección:\n1) Si \n2) No");
  if (respuesta == "1") {
    return true;
  } else {
    return false;
  }
}


function comprarPasaje() {
  while (confirmarCompra()) {
    const pasajeSeleccionado = prompt("¿Elija su proximo destino?\nEscriba el número de su elección:\n1) Mendoza \n2) Bariloche \n3) Cataratas");
    
    switch (pasajeSeleccionado) {
      case "1":
      case "Mendoza":
        let cantidad1 = prompt("Cuántos pasajes desea?");
        alert("Has comprado " + pasaje1.nombre + " por " + cantidad1 * pasaje1.calcularPrecio());
        totalcompra = totalcompra + cantidad1 * pasaje1.calcularPrecio() 
        break;
      case "2":
      case "Bariloche":
        let cantidad2 = prompt("Cuántos pasajes desea?");
        alert("Has comprado " + pasaje2.nombre + " por " + cantidad2 * pasaje2.calcularPrecio());
        totalcompra = totalcompra + cantidad2 * pasaje2.calcularPrecio()
        break;
      case "3":
      case "Cataratas":
        let cantidad3 = prompt("Cuántos pasajes desea?");
        alert("Has comprado " + pasaje3.nombre + " por " + cantidad3 * pasaje3.calcularPrecio());
        totalcompra = totalcompra + cantidad3 * pasaje3.calcularPrecio()
        break;
      default:
        alert("No has seleccionado ningun pasaje");
        break;
    }


  }
  alert("El total de su compra es de: " + totalcompra + "\nEl valor incluye IVA, impuestos y tasas \nMuchas gracias.");
}

comprarPasaje();

