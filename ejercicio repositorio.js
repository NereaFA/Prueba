var numNachos = 2; 
var precioNacho = 6,90; 
var numBurritos = 3; 
var pBurrito = 9; 
var iva = 0.21; 

function totalSegunProductos(numProducts, productPrice) {
  return numProducts * productPrice;
}

function añadeIva(total, iva) {
  return total * iva + total;
}


var totalPrecioNachos = totalSegunProductos(numNachos, precioNacho);

var totalprecioBurrito = totalSegunProductos(numBurritos, pBurrito);

// Sumamos los totales de precios para tener el total gastado
var total = otalPrecioNachos + totalprecioBurrito;

var totalTicket = añadeIva(total, iva);

console.log('Total cuenta restaurante: ' + TotalTicket);