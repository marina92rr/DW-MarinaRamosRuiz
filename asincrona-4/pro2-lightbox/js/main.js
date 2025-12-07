
'use strict'

//Constantes y variables
const imgList = document.querySelectorAll('.img');
const lightbox = document.querySelector('.lightbox');
const grande = document.querySelector('.grande');
const closeBtn = document.querySelector('.close');

//Definir funcion cerrar
const closeBtnHandler = () => lightbox.classList.remove('isActive');
//Definir funcion para mostrar imagen grande
const imgListHandler = index => {
    lightbox.classList.add('isActive');
    grande.src = imgList[index].src;
}

//Recorrer todas las imágenes pequeñas
imgList.forEach( (eachImg, index) =>{
    imgList[index].addEventListener('pointerdown', () =>{
        imgListHandler(index);
    })
})

//Cuando hago click en el botón de cerrar
closeBtn.addEventListener('pointerdown', closeBtnHandler);


// *pointerdown sirv por click y touch en movil


