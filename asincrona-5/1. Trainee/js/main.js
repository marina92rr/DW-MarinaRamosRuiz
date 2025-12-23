
//Declaramos y seleccionamos todos los div-title e imágenes
const containers = document.querySelectorAll('.title');
const imgs = document.querySelectorAll('.title__img');

//Recorrido de div-title
containers.forEach(container => {
    //Cuando el ratón entra en el div-title
    container.addEventListener('mouseenter', () => {
        container.querySelector('.title__img').classList.add('active');     //Añadir clase activa a imagen - Arparece
        containers.forEach(c => c.classList.add('desactive'));              //Recorremos todos los div-title y desactivamos
        container.classList.remove('desactive');                            //al div-title en hover le quitamos desactive
    });
    //Cuando el ratón sale del div-title
    container.addEventListener('mouseleave', () => {
        container.querySelector('.title__img').classList.remove('active');  //Eliminamos la clase activa a la imagen - Se oculta
        containers.forEach(c => c.classList.remove('desactive'));           //Recorremos todos los div-title y desactivamos
    });
});