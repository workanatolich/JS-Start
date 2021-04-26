let a = 7;
let b = 9;
console.log(a*b);

let c = 7;
let d = 9;
document.querySelector('.out2').innerHTML = c*d;

let e = 3;
let f = 5;
document.querySelector('.out3').innerHTML = e+f;

let e1 = '3';
let f1= 5;
document.querySelector('.out4').innerHTML = e1+f1;

let e2 = 3;
let f2= 0;
document.querySelector('.out5').innerHTML = e2/f2;


let e3 = 3;
let f3= 'Hello';
document.querySelector('.out6').innerHTML = e3+f3;


let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out7').innerHTML = e3*f3;

let button1 = document.querySelector('.button1');
button1.onclick = function() {
    let value = document.querySelector('.input1').value;
    console.log(value);
}

let button2 = document.querySelector('.button2');
button2.onclick = function() {
    let out = document.querySelector('.out9');

    let value = document.querySelector('.input2').value;

    out.innerHTML = value;

    value = '';
}

let button3 = document.querySelector('.button3');
button3.onclick = function() {
    let out = document.querySelector('.out10');

    let num = +document.querySelector('.input3').value;

    out.innerHTML = num * 10;

}

let button4 = document.querySelector('.button4');
button4.onclick = function() {
    let out = document.querySelector('.out11');

    let num = +document.querySelector('.input4').value;

    out.innerHTML = num + 10;

}

let button12 = document.querySelector('.button12');
button12.onclick = function() {
    let out = document.querySelector('.out12');

    let value1 = document.querySelector('.input12-1').value;
    let value2 = document.querySelector('.input12-2').value;

    out.innerHTML = 'Hello ' + value1 + ' ' + value2;
}

let button13 = document.querySelector('.button13');
button13.onclick = function() {
    let out = document.querySelector('.out13');

    let num1 = +document.querySelector('.input13-1').value;
    let num2 = +document.querySelector('.input13-2').value;

    out.innerHTML = num1 + num2;

}

let button14 = document.querySelector('.button14');
button14.onclick = function() {
    let val = document.querySelector('input14').value;
    val = 'Hello';
}

let button15 = document.querySelector('.button15');
button15.onclick = function() {
    let y = document.querySelector('.input15');
    y.style.border = '2px solid red';
}

let button16 = document.querySelector('.button16');
button16.onclick = function() {
    let out = document.querySelector('.out16');

    let num1 = +document.querySelector('.input16-1').value;
    let num2 = +document.querySelector('.input16-2').value;


    out.innerHTML = num1 + num2;

}

let button17 = document.querySelector('.button17');
button17.onclick = function() {

    let out = document.querySelector('.out17');

    let val = document.querySelector('.input17').value;

    val = parseInt(val);

    out.innerHTML = val;
}

let button18 = document.querySelector('.button18');
button18.onclick = function() {
    let out =  document.querySelector('.out18');

    let val = document.querySelector('.input18');

    val = parseFloat(val);

    out.innerHTML = val;
}

let button19 = document.querySelector('.button19');
button19.onclick = function() {
    let out = document.querySelector('.out19');

    let num1 = +document.querySelector('.input19-1').value;
    let num2 = document.querySelector('.input19-2').value;

    num2 = parseInt(num2);

    out.innerHTML = num1 + num2;

}

let button20 = document.querySelector('.button20');
button20.onclick = function() {
    let out = document.querySelector('.out20');

    let val1 = document.querySelector('.input20-1').value;
    let val2 = document.querySelector('.input20-2').value;
    let num3 = document.querySelector('.input20-3').value;
    let val4 = document.querySelector('.input20-4').value;

    num3 = parseInt(num3);

    out.innerHTML = 'Уважаемый ' + val1 + ',' + val2 + ', '
        + 'ваш возраст ' + num3 + ' лет , по профессии вы ' + val4;
}