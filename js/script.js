let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let divOut = document.querySelector('.out');

button.onclick = function () {
    console.log('Работает');
    let b = +inputIn.value;
    console.log(b + 10);
    divOut.innerHTML = b;
    inputIn.value  = '';
}