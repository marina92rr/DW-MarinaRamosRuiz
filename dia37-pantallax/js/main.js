
var rellax = new Rellax('.rellax', {
    speed: 5,          // Aumenta la velocidad
    center: true,      // Centra los elementos en la pantalla
    wrapper: null,     // Si quieres que el contenedor sea algo específico
    round: true,       // Redondea el valor de posición
    vertical: true,    // Habilita el parallax vertical
    horizontal: false  // Deshabilita el parallax horizontal
  });


let square = document.getElementById("square");
let eyeball = document.getElementById("eyeball");
let eyeglow = document.getElementById("eyeglow");
let iris = document.getElementById("iris");


document.addEventListener('mousemove', event => {
  let posX = event.clientX - window.innerWidth/2;
  let posY = event.clientY - window.innerHeight/2;

  square.style.transform = "translate(" + posX * 0.01 + "%, " + posY * 0.01 +"%)";
  eyeball.style.transform = "translate(" + posX * 0.08 + "%, " + posY * 0.08 +"%)";
  eyeglow.style.transform = "translate(" + posX * 0.01 + "%, " + posY * 0.01 +"%)";
  iris.style.transform = "translate(" + posX * 0.09 + "%, " + posY * 0.09 +"%)";

})


