



//Ejercicio 2
const texCopy = document.querySelector('#texCopy');
const botonText = document.querySelector('#botonText');
const textParagraph = document.querySelector('#textParagraph');

botonText.addEventListener('click', () => {
    textParagraph.textContent = texCopy.value;
    console.log(texCopy.value)
})

//Ejercicio 3

const one = document.querySelector('#numberOne');
const two = document.querySelector('#numberTwo');
const sumar = document.querySelector('#sumar');
const result = document.querySelector('#result');

sumar.addEventListener('click', () => {
    result.textContent = parseInt(two.value) + parseInt(one.value);
    console.log(parseInt(two.value) + parseInt(one.value));
})


//Ejercicio 4
const tres = document.querySelector('#number3');
const cuatro = document.querySelector('#number4');
const calcular = document.querySelector('#calcular');
const result2 = document.querySelector('#result2');


calcular.addEventListener('submit', (e) => {
    e.preventDefault();
    const operator = document.getElementById('operator').value;
    const n1 = parseFloat(tres.value);
    const n2 = parseFloat(cuatro.value);
    let r;
    console.log(operator);
    switch (operator) {
        case "+":
            r = n1 + n2;
            break;
        case "-":
            r = n1 - n2;
            break;
        case "/":
            r = n1 / n2;
            break;
        case "*":
            r = n1 * n2;
            break;
    }
    result2.innerHTML = r;
})


