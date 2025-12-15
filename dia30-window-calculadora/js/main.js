

//Nivel 1
const openButom = document.getElementById('open');
const closeButom = document.getElementById('close');
const moveButom = document.getElementById('move');
const resizeButom = document.getElementById('resize');
const locationButom = document.getElementById('location');


let myWindow = null;
//Abre una ventana window
openButom.addEventListener('click', () =>{
    if(!myWindow || myWindow.closed){
        myWindow = window.open('', '' , 'width=400, height=400');
        myWindow.document.write("<h1>Ventana abierta</h1>");
    }
});
//Cierra la ventana
closeButom.addEventListener('click', () =>{
    if(myWindow && !myWindow.closed){
        myWindow.close();
    }
})
//Mueve la ventana
moveButom.addEventListener('click', () =>{
    if(myWindow && !myWindow.closed){
         myWindow.moveTo(200, 200);
    }
})
//Agranda la ventana
resizeButom.addEventListener('click', () =>{
    if(myWindow && !myWindow.closed){
        myWindow.resizeTo(600, 600);
    }
})
//se abre en la ventana google
locationButom.addEventListener('click', () =>{
    if(myWindow && !myWindow.closed){
        myWindow.location= "https://google.com";
    }
})


//Nivel 2

const btnNum = document.getElementById("btnNum");
const divNum = document.querySelectorAll(".divNum");

//Numeros aleatorios
function numRandom(number) {
    return Math.floor(Math.random() * (number + 1));
}

//Función crear color aleatorio con numeros y cambiar los div
function ChangeNum() {
    divNum.forEach( div => div.textContent = numRandom(100));
}

btnNum.addEventListener("click", ChangeNum);

//Nivel 3: Calculadora

const calc = document.querySelector('#calc');   //valor formulario
const numA = document.querySelector('#numA');   //primer num input
const numB = document.querySelector('#numB');   //SEgundo num input
const res = document.querySelector('#res');     //Valor resultado


calc.addEventListener('submit', (e) => {
    e.preventDefault();
    const operator = document.getElementById('operator').value;     //Operador seleccionado
    const nA = parseFloat(numA.value);      //Convertir el valor input a num
    const nB = parseFloat(numB.value);      //Convertir el valor input a num
    let r;      //Resultado
    switch (operator) {          //si el operador es;
        case "+":               //Suma
            r = nA + nB;        
            break;
        case "-":               //Resta
            r = nA - nB;
            break;
        case "/":               //División
            r = nA / nB;
            break;
        case "*":               //Multiplicación
            r = nA * nB;
            break;
    }
    res.innerHTML = r;          //resultado en html es r
})