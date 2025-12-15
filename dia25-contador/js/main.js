
//Nivel 1
let alumno = {
    nombre: 'Marina',
    apellido: 'Ramos Ruiz',
    edad: 32, 
    curso: 'FullStack',
    completeName : function() {
        return this.nombre + ' ' + this.apellido
    }
}

const {nombre, apellido, edad, curso} = alumno


console.log('Nombre: ', nombre);
console.log('Apellido: ', apellido);
console.log('Edad: ', edad);
console.log('Curso: ', curso);

console.log(alumno.completeName());


//Nivel 2
//Spread
const alumno2 = { ...alumno, ciudad: 'Sevilla'};
console.log(alumno2);

//Array Spread
const numID = [1 ,2, 3, 5];
const numIDComplete = [ ...numID, 10, 5, 8];
console.log(numIDComplete);

//Operador Rest
function suma(...args) {
    return args.reduce((a,b) => a + b, 0);
}
console.log('La suma de 5, 10 y 2 es: ' + suma(5,10,2));

//Extraer array
console.log('Extraer el array numID' , ...numID);
console.log('Extraer el array numIDComplete' , ...numIDComplete);

//nivel 3
//Escribir texto 

const paragraph = document.querySelector('#textContent');
paragraph.textContent = 'Ahora si hay texto en el párrafo.';

//Añadir listado
//document.querySelector('#list').innerHTML += '<li id="change">Lista 1</li><li id="change">Lista 2</li><li id="change">Lista 3</li><li id="change">Lista 4</li>'
const listado = ["Lista 1", "Lista 2", "Lista 3", "Lista 4"];   //Array listado
document.querySelector('#list').innerHTML += 
    listado.map( arg => `<li id="change">${arg}</li>`).join(' ') //Join - separador/ map - recorre un array





//Cambiar color al hacer click

const listColor = document.querySelectorAll('#change');
   
listColor.forEach( item => {
    item.addEventListener('click', () => {
        item.style.color = 'red';
    })
})


const deleteArg = document.querySelectorAll('#arg');
   
deleteArg.forEach( item => {
    item.addEventListener('click', () => {
        item.remove();
    })
})

//Contador +1 y -1
let contador = 0;
const resultNum = document.querySelector('#result');
const sum = document.querySelector('#sum');
const rest = document.querySelector('#rest');

//Sumar +1
sum.addEventListener('click', () => {
    contador++;
    resultNum.textContent = contador;
})

//restar -1
rest.addEventListener('click', () => {
    contador--;
    resultNum.textContent = contador;
})


