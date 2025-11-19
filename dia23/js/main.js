
//Ejercicio 1.1
const ej1_1 = document.querySelector('#vacio');
ej1_1.textContent = 'Contenido del ejercicio1'
//document.getElementById('vacio').innerHTML = 'Ahora si hay texto';

//Ejercicio 1.2
const ej1_2 = document.querySelector('#black');
ej1_2.style.color = 'red';



//Ejercicio 1.3
function ChangeColor(newColor) {
    const elemColor = document.querySelector('#change');
    elemColor.style.color = newColor;
}

/*otra opción 1.3
const blue = document.querySelector(#blue);
const red = document.querySelector(#red);
changedRed.addEventListener("click", () => {
    red.style.color = 'red'}
)

changedBlue.addEventListener("click", () => {
    red.style.color = 'blue'}
)

*/

//NIVEL 2
const PI = 3.14;
let radio = 5;
//Función
function areaCircle(r) {
    return PI * r * r;
}
//Impresión por consola
console.log('Resultado del area del círculo: ', areaCircle(radio));

//NIVEL 3
/*
const boton = document.querySelector('#miBoton');
boton.addEventListener('click', () => {
    alert('El botón esta cliqueado');   //Alert no se pone nunca en ninguna página. PROYECTO TAMPOCO
})
*/
const boton = document.querySelector('#miBoton');

function clickHandler(){
    alert("Otra manera mas ordenada")
}
boton.addEventListener("click", clickHandler);

//Ejercicio 4
const textSize = document.querySelector('#textSize')
const sizel = document.querySelector('#fontSizel');
const sizes = document.querySelector('#fontSizes');

sizel.addEventListener('click', () => {
    textSize.style.fontSize  = "large";
})

sizes.addEventListener('click', () => {
    textSize.style.fontSize  = "small";
})
