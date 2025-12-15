//envate market
//framerer
//dream hub

//Nivel 1
//boton que alterna colores de un párrafo - Añadir transición

const btnColorAlt = document.querySelector('#btnColorAlt');

btnColorAlt.addEventListener("click", () => {
    const pColorAlt = document.querySelector('#pColorAlt');

    if (pColorAlt.style.background !== 'black') {   //! porque de primeras no es 20 ya que es null
        pColorAlt.style.background = 'black';
        pColorAlt.style.color = 'white';
        pColorAlt.style.transition = 'all 0.5s ease';
    } else {
        pColorAlt.style.background = 'white';
        pColorAlt.style.color = 'black';
        pColorAlt.style.transition = 'all 0.5s ease';
    }
});

//Cambiar el div de tamaño - Añadir transición
const btnSize = document.querySelector('#btnSize');

btnSize.addEventListener("click", () => {
    const divSize = document.querySelector('#divSize');

    if (divSize.style.width !== '40vw') {   //! porque de primeras no es 20 ya que es null
        divSize.style.height = '40vw';
        divSize.style.width = '40vw';
        divSize.style.transitionProperty = "width";
        divSize.style.transitionDuration = "2s";

    } else {
        divSize.style.height = '20vw';
        divSize.style.width = '20vw';
        divSize.style.transitionProperty = "width";
        divSize.style.transitionDuration = "2s";
    }
});

//Nivel 2
//Rotar escalar
const btnRot = document.querySelector('#btnRot');

btnRot.addEventListener("click", () => {
    const divRot = document.querySelector('#divRot');

    if (divRot.style.transform !== 'rotate(90deg)') {
        divRot.style.transform = 'rotate(90deg)';
        divRot.style.transition = '0.5s ease';
    } else {
        divRot.style.transform = 'rotate(-90deg)';
        divRot.style.transition = '0.5s ease';
    }
});


//Rotar Block
const btnBlock = document.querySelector('#btnBlock');

btnBlock.addEventListener("click", () => {
    const divBlock = document.querySelector('#divBlock');

    if (divBlock.style.display !== 'none') {
        divBlock.style.display= 'none';
    } else {
        divBlock.style.display = 'block';

    }
});

//Alterar Opacidad
const btnOpa= document.querySelector('#btnOpa');

btnOpa.addEventListener("click", () => {
    const divOpa = document.querySelector('#divOpa');

    if (divOpa.style.opacity !== '0') {
        divOpa.style.opacity= '0';
    } else {
        divOpa.style.opacity = '1';
    }
    divOpa.style.transition = 'opacity 2s ease';
});

//Nivel 3
//Alterar Opacidad
const btnColorAle= document.querySelector('#btnColorAle');


function DivAle() {
    const divColorAle = document.querySelectorAll('.divColorAle');
    var index = Math.floor(Math.random() * divColorAle.length);
    const colorDiv = divColorAle[index];
    colorDiv.style.background = 'red';
}

btnColorAle.addEventListener("click", () => {
    const divColorAle = document.querySelectorAll('.divColorAle');
    const blanck = divColorAle.forEach(div => div.style.background = 'white')
    
    if (blanck) {
        divColorAle.style.background = 'white';
    } else {
        DivAle();
    }
    divColorAle.style.transition = 'opacity 2s ease';
});




