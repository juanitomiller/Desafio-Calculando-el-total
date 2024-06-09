//Definicion de valores

let contador = 0; // Definimos que el contador mantiene un valor 0; 
const precio = 400000  //tipo de valor const, Valor no modificable en el camino
let precioTotal = precio * contador


//Añadiendo calculo de iva, ejercicio adicional.
const iva = 19
let precioConIva = 0
let precioFinal = 0

//Elementos del DOM

const incrementar = document.getElementById
   ("incrementar")

const decrementar = document.getElementById
   ("decrementar")



//

//Declaracion de variables y asignacion de valores


//querySelector es un método del objeto document que se utiliza para seleccionar el primer elemento del DOM que coincida con un selector CSS especificado.
var countLabel = document.querySelector("#cantidad") //Es ID por lo que llamamos al ID con (#)
let priceLabel = document.getElementById("precio-total")
let unitPriceLabel = document.getElementById("precio-unitario")
let totalConIva = document.getElementById("precioConIva")
let valorFinal = document.getElementById("precioFinal")

//Asignando valores al DOM

countLabel.innerText = contador; //Esta variable la declaramos al comienzo del codigo js con valor 0;
//innerText es una propiedad de los elementos del DOM que representa el contenido de texto "visible" de un elemento.
unitPriceLabel.innerText = precio;
priceLabel.innerText = precio * contador; //Aqui Estamos diciendo que el precio total sera = a la cantidad multiplicada por cada contador que agreguemos.
//El precio 400000 se multiplicara de 1*1 cada vez que presionemos la simbologia (+) en la pagina.
priceLabel.innerText = precioTotal;//Aqui estamos re asignando el valor de una variable en otra llamada preciTotal
precioConIva = (precioTotal * iva) / 100;
totalConIva.innerText = precioConIva;
precioFinal = precioTotal + precioConIva;
valorFinal.innerText = precioFinal;


//Evento de escuchar - Esto es una funcion

incrementar.addEventListener("click", () => {
   contador++
   precioTotal = precio * contador
   countLabel.innerText = contador;
   priceLabel.innerText = precioTotal;
   precioConIva = (precioTotal * iva) / 100;
   totalConIva.innerText = precioConIva;
   precioFinal = precioTotal + precioConIva;
   valorFinal.innerText = precioFinal;

})

decrementar.addEventListener("click", () => {

   if (contador > 0) contador--
   precioTotal = precio * contador
   countLabel.innerText = contador;
   priceLabel.innerText = precioTotal;
   precioConIva = (precioTotal * iva) / 100;
   totalConIva.innerText = precioConIva;
   precioFinal = precioTotal + precioConIva;
   valorFinal.innerText = precioFinal;

})