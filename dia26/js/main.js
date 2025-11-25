

//Nivel 1 (1-3)

//EJ 1
let a = 3;
let result = 'Menor a 0';

if(a > 0) {
    result = 'Mayor que 0';
}
console.log(result);

//EJ 2
const mayorEdad = 18;
if( mayorEdad >= 18) {
    console.log('Es mayor de edad');
}else {
    console.log('Es menor de edad');

}

//EJ 3
let x = 51; 

if(x >50 ){
    console.log('Es mayor a 50');
} else if (x < 5) {
    console.log('Es menor que 5');
}else {
    console.log('está ente el 5 y 50');
}
//Nivel 2 (4-6)
//Ej 4
const pet = 'Perro';

switch(pet) {
    case "perro":
        console.log('Tengo un perrito');
        break;
    case "gato":
        console.log('Tengo un gatito');
        break;
    case "loro":
        console.log('Tengo un lorito');
        break;
    default:
        console.log('No tengo mascota');
        break;
}

//Eje 5
let str = '';
for( let i = 0; i < 9; i++) {
    str += i;
}
console.log(str);

//Eje 6
let n = 0;
while (n < 3) {
    n++;
}

console.log(n);

//Nivel 3 (7-8)
//Eje 7
let m = 0;
let res = '';

do {
    m += 1;
    res += + m;
} while (m < 5);

console.log(res);

//Eje 8
const arrayA = [ 'a', 'b', 'c'];

arrayA.forEach((item) => console.log('La letra es :',item));
