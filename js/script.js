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
let input1 = document.querySelector('.input1');
button1.onclick = function() {
    console.log(input1.value);
}

let button2 = document.querySelector('.button2');
let input2 = document.querySelector('.input2');
button2.onclick = function() {
    let out9 = document.querySelector('.out9');
    out9.innerHTML = input2.value;
    input2.value = '';
}

let button3 = document.querySelector('.button3');
let input3 = document.querySelector('.input3');
button3.onclick = function() {
    let out10 = document.querySelector('.out10');
    out10.innerHTML = input3.value * 10;
    input3.value = '';
}

let button4 = document.querySelector('.button4');
let input4 = document.querySelector('.input4');
button4.onclick = function() {
    let out11 = document.querySelector('.out11');
    let input4Int= +input4.value;
    out11.innerHTML = input4Int + 10;
    input4.value = '';
}

let button12 = document.querySelector('.button12');
let input121 = document.querySelector('.input12-1');
let input122 = document.querySelector('.input12-2');
button12.onclick = function() {
    let out12 = document.querySelector('.out12');
    out12.innerHTML = 'Hello ' + input121.value + ' ' + input122.value;
}

let button13 = document.querySelector('.button13');
let input131 = document.querySelector('.input13-1');
let input132 = document.querySelector('.input13-2');
button13.onclick = function() {
    let out13 = document.querySelector('.out13');
    let input131Int= +input131.value;
    let input132Int= +input132.value;
    out13.innerHTML = input131Int + input132Int;
    input131.value = '';
    input132.value = '';
}

let button14 = document.querySelector('.button14');
let input14 = document.querySelector('.input14');
button14.onclick = function() {
    input14.value = 'Hello';
}

let button15 = document.querySelector('.button15');
let y = document.querySelector('.input15');
button15.onclick = function() {
    y.style.border = '2px solid red';
}

let button16 = document.querySelector('.button16');
let input161 = document.querySelector('.input16-1');
let input162 = document.querySelector('.input16-2');
button16.onclick = function() {
    let out16 = document.querySelector('.out16');
    let input161Int= +input161.value;
    let input162Int= +input162.value;
    out16.innerHTML = input161Int + input162Int;
    input161.value = '';
    input162.value = '';
}

let button17 = document.querySelector('.button17');
let input17 = document.querySelector('.input17');
button17.onclick = function() {
    let t = input17.value;
    let out17 = document.querySelector('.out17');
    t = parseInt(t);
    out17.innerHTML = t;
}

let button18 = document.querySelector('.button18');
let input18 = document.querySelector('.input18');
button18.onclick = function() {
    let t = input18.value;
    let out18 = document.querySelector('.out18');
    t = parseFloat(t);
    out18.innerHTML = t;
}

let button19 = document.querySelector('.button19');
let input191 = document.querySelector('.input19-1');
let input192 = document.querySelector('.input19-2');
button19.onclick = function() {
    let out19 = document.querySelector('.out19');
    let input191Int= +input191.value;
    let input192Int= parseInt(input192.value);
    out19.innerHTML = input191Int + input192Int;
    input191.value = '';
    input192.value = '';
}

let button20 = document.querySelector('.button20');
let input201 = document.querySelector('.input20-1');
let input202 = document.querySelector('.input20-2');
let input203 = document.querySelector('.input20-3');
let input204 = document.querySelector('.input20-4');
button20.onclick = function() {
    let out20 = document.querySelector('.out20');
    input203.value = parseInt(input203.value);
    out20.innerHTML = 'Уважаемый ' + input201.value
                       + ',' + input202.value
                       + ', ' + 'ваш возраст ' + input203.value
                       + ' лет , по профессии вы '
                       + input204.value;
}