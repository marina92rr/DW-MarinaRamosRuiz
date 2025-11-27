
//Nivel 1
/*


*/

//Nivel 2
//----Cambiar color Botón----
const btn = document.querySelectorAll(".btnChangeColor");

//Numeros aleatorios
function colorRandom(number) {
    return Math.floor(Math.random() * (number + 1));
}
//Función crear color aleatorio con numeros aleatorios
function bgChangeColor(e) {
    const color = `rgb(${colorRandom(255)}, ${colorRandom(255)}, ${colorRandom(255)})`
    e.target.style.backgroundColor = color;
}
//Recorrer cada boton y donde clickeas cambia el color
btn.forEach( btn =>btn.addEventListener("click", bgChangeColor) )  

//----Cambiar de color fondo----
const btnFound = document.getElementById("btnChangeFound");
const divFound = document.querySelectorAll(".foundColor");

//Función crear color aleatorio con numeros y cambiar los div
function bgChangeColorFound() {
    divFound.forEach( div => div.style.backgroundColor = `rgb(${colorRandom(255)}, ${colorRandom(255)}, ${colorRandom(255)})`);
}

btnFound.addEventListener("click", bgChangeColorFound)






//Nivel 3