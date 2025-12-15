//envate market
//framerer
//dream hub

//Nivel 1
//boton que añade un css
const btnAddCss = document.querySelector('#btnAddCss');
const divAddCss = document.querySelector('#divAddCss');


btnAddCss.addEventListener('click', () => {
    divAddCss.classList.add('addCss');
})

//Elimina clase
const btnRemoveCss = document.querySelector('#btnRemoveCss');
const pRemoveCss = document.querySelector('#pRemoveCss');



btnRemoveCss.addEventListener('click', () => {
    pRemoveCss.classList.remove('addCss'); //elimina class
})

//Alterna clase
const btnToggleCss = document.querySelector('#btnToggleCss');
const pToggleCss = document.querySelector('#pToggleCss');

btnToggleCss.addEventListener('click', () => {
    pToggleCss.classList.toggle('pToggleCss','addCss'); //Añade y elimina class
})


//Añade un div
const btnAddDiv = document.querySelector('#btnAddDiv');
const levelA = document.querySelector('#levelA');
let contador = 0;   //Incremento


//numeros aleatorios
function colorRandom(number) {
    return Math.floor(Math.random() * (number + 1));
}

//Función crear color aleatorio con numeros aleatorios
function bgChangeColor() {
   return  color = `rgb(${colorRandom(255)}, ${colorRandom(255)}, ${colorRandom(255)})`

}

btnAddDiv.addEventListener('click', () => {
    contador++; //Sumar contador = contador + 1
    const colorAlt = bgChangeColor();   //llamar funcion color

    let fragment = document.createDocumentFragment();   //Crear fragmento
    let div = document.createElement('div');            //Añadir un div
        div.classList.add('cuadrado');                  //Añadir una clase

        
        div.innerHTML = `Div Nº${contador}`;            //Añadir un texto con el contador
        div.style.backgroundColor = colorAlt;           //Añadir color aleatorio
        div.style.cursor = 'pointer';

        fragment.appendChild(div);                      //Añadir el div al final del fragmento

    document.body.appendChild(fragment);                //Añadir el fragmento en el body al final

    requestAnimationFrame(() => {
        div.classList.add('visible');   //Añade la transicion de opacidad
    })
});


//Nivel 2
//Eliminar los div anteriormente si clickeas en uno de ellos
    //en toda la pagina, e es el click
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('cuadrado')){    //si el click tiene la clase cuadrado
            e.target.remove();                          //Entonces remove
        }

    })


//Nivel 3
//Alterar Opacidad





