
//Si es posicion 3 es [3]
//Si es 3 posición es [2]
//Nivel 1 (1-3)

//EJ 1.1
let arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Array completo',arrayA);

//EJ 1.2
console.log('Posición 3',arrayA[3]);
console.log('Posición 6',arrayA[6]);

//Ej 1.3
console.log('Largo del array',arrayA.length);

//Ej 1.4
//Añadir al final
arrayA.push(11);
console.log('Valor añadido final del array', arrayA );

//Ej 1.5
//eliminar los elementos de la posicion 5 y 6 y mostrar
arrayA.splice(5, 2);
console.log('Eliminar posicion 5 y 6', arrayA );

//EJ 2

//2.1 Elige posicion
console.log('La posición de 8 en el array es: ',arrayA.indexOf(8));

//2.2 - Array al reves
console.log('El array al revés' ,arrayA.reverse());

//2.3 - Convierte en string
let strB = arrayA.join(' ')
console.log('Convierte el array en string: ', strB);

//2.4 - Convierte string en array
const strArray = strB.split(' ');
console.log('Devuelve en array split', strArray );

//2.5 - Imprime forEach
let arrayForEach = strArray.forEach( (str , i) => {
    console.log('Numero array',str);
    console.log(i , 'posición')
} )

//2.6 - añade algo
let arrayForEachMore = strArray.forEach( (str , i) => {
   console.log( str + '❤' )
} )

//Añade el corazon
let emojiArray = strArray.map( emoji => emoji + '❤')

//Nivel 3 
//3.1 - Encuentra el primer corazon con find
console.log('Donde esta el primer corazón???', emojiArray.find( kokoro => kokoro.includes('❤')))

//3.2 - Filtra mayores de : 7
let mayor = emojiArray.filter( mayor7 => mayor7 > '8')
console.log(mayor);

//3.3 - suma los numeros
arrayNum = [ 4, 2, 8 ,6 ,9];
const resta = arrayNum.reduce((acumulador, num) => acumulador - num, 0);
console.log('La resta de este array', arrayNum,'es: ' ,resta);

//3.4 - Deconstruye
const frutas = [ 'Pera', 'fresas', 'kiwi', 'caqui'];
const [verde, rosa, , rojo] = frutas;
console.log('Las frutas de color verde, rosa y rojo son: ',verde , rosa, rojo);


//Crear un listado con forEach y Map
const elementos = frutas.map( fruta => {
    const li = document.createElement('li');
    li.textContent = fruta;
    return li;
});

const lista = document.getElementById('lista');
elementos.forEach( el => lista.appendChild(el));