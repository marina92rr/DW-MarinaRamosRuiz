//envate market
//framerer
//dream hub


//Nivel 1
const li = document.querySelectorAll('li');

//Numeros aleatorios
function colorRandom(number) {
    return Math.floor(Math.random() * (number + 1));
}
//Función crear color aleatorio con numeros aleatorios
function bgChangeColor(e) {
    const color = `rgb(${colorRandom(255)}, ${colorRandom(255)}, ${colorRandom(255)})`
    e.style.backgroundColor = color;
}
//Recorrer los lis y cambiar el color
li.forEach(lis => { bgChangeColor(lis); })


const pEmoji = document.querySelectorAll('.emoji');

pEmoji.forEach(p => {
    p.textContent += '​😻';
});

//Cambiar texto de botones
const btnText = document.querySelectorAll('button');
btnText.forEach(text => text.textContent = 'Pulsa aquí')

//NIVEL 2
//Añadir un boton a los li
const touchLi = document.querySelectorAll('.touchLi');

touchLi.forEach(function (touch) {
    touch.addEventListener('click', () => {
        const through = 'line-through';
        touch.style.textDecoration = through;
    })
}
)

//Crear un array de objetos precio nombre
const listado = [
    {
        name: 'Naruto',
        price: 130
    },
    {
        name: 'Tanjiro',
        price: 201
    },
    {
        name: 'Gohan',
        price: 370
    },
    {
        name: 'Sakura',
        price: 162
    },
    {
        name: 'Naruto',
        price: 218
    }
];
    
const divObject = document.querySelectorAll('.divObject');  //todos los div
//Realizar un recorrido por cada indice del array y añadir a cada parrafo un dato 
divObject.forEach(function(divO, index) {
    const item = listado[index];    //Sacar cada dato de cada indice
    
    divO.querySelector('.name').textContent = item.name;    //añadir el nombre
    divO.querySelector('.price').textContent = `${item.price} €`;  //Añadir el precio
});
    

//Añadir un boton

