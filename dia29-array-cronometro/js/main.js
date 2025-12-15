
//Nivel 1 y 2 por parámetro
//funcion con numeros pares por parametro
function numPar(par) {
                //Array vacio
    for (i = 1; i <= 100; i++) {  //recorrido del 1 al 100
        if (i % 2 == 0) {        //Dividir el resto para que sea numero par
            par.push(i);       //Añadir el siguiente numero par al array
        }
    }
    return par; //Retornar el array de numeros pares
}
console.log('Los numeros pares del 1 al 100: ', numPar([]));

//cuadrado de 5x5 con “*” en la consola. Usando 2 for. por paramtro
function tablet(ast) {
    
    for (i = 0; i < 5; i++) {
        let ret = ast;  //Reinicia, sino se va sumando 5 por linea
        for (j = 0; j < 5; j++) {
          ret +='*' ;
        }
        console.log(ret)
    }
}
tablet('');


//Cuadrado hueco de 5x5 con “*” en la consola. Usando 2 for y if. por parámetro
function cuadradoHueco(ast) {
    for (let i = 0; i < 5; i++) {   //fila
        let borde = ast;

        for (let j = 0; j < 5; j++) {   //Columna

            // Bordes: fila arriba - abajo, columna :izquierda - derecha asteriscos
            if (i === 0 || i === 4 || j === 0 || j === 4) {
                borde += "*";
            } else {
                borde += " ";
            }
        }
        console.log(borde);
    }
}
cuadradoHueco('');

//Nivel 2
//Crea una función “saludar” que muestre un alert con un nombre recibido como argumento
function saludar(name) {
    alert(`Hola, ${name}`)
};

//saludar('Carolina');

function procesarEntradaUsuario(callback) {
    let name = prompt ('Por favor ingresa tu nombre');
    callback(name);
}

procesarEntradaUsuario(saludar);


//Nivel 3
//Usa setTimeout() para mostrar un mensaje en la consola 3 segundos después de cargar la página.
setTimeout(() =>{
    console.log('El mensaje aparecerá cada 3 segundos') //Solo una vez
}, 3000)

//Usa setInterval() para imprimir la hora actual en la consola cada segundo.
const intervalo = setInterval(() =>{
    let now = new Date();           //Fecha completa
    let hour = now.getHours();      //Hora 
    let minut = now.getMinutes();   //Minutos
    let sec = now.getSeconds();     //Segundos

    const contador = document.querySelector('#contador');
    contador.textContent = `Hora : ${hour} : ${minut} : ${sec}`;
}, 1000);

//Crea un contador en HTML y actualízalo cada segundo con setInterval() hasta llegar a 10, luego detenerlo.
setTimeout(() =>{
    clearInterval(intervalo);
}, 10000)

