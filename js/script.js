let a1 = 9;
function t1() {
    let out = document.querySelector('.out-1');

    out.innerHTML = a1;
}
document.querySelector('.b-1').onclick = t1;

let a2 = 10;
function t2() {
    return a2;
}
document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').textContent = t2();
}

function t3(a,b) {
    return a*b;
}
document.querySelector('.b-31').onclick = () => {
    document.querySelector('.out-31').textContent = t3(5,8);
}
document.querySelector('.b-32').onclick = () => {
    document.querySelector('.out-32').textContent = t3(10, 1);
}

function t4(year) {
    return 2021 - year;
}
document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').textContent = t4(1998);
}

function t5(name) {
    return `Hello ${name}`;
}
document.querySelector('.b-5').onclick = () => {
    document.querySelector('.out-5').textContent = t5("User");
}

function t6(min, max) {
    return Math.floor(Math.random() * (max-min)) + min ;
}
document.querySelector('.b-6').onclick = () => {
    document.querySelector('.out-6').textContent = t6(1, 10);
}

function t7() {
    return `rgb(${t6(0,255)},${t6(0,255)},${t6(0,255)})`;
}
document.querySelector('.b-7').onclick = () => {
    document.querySelector('.out-7').style.height = '30px';
    document.querySelector('.out-7').style.background = t7();
}

function t8(str) {
    return str.trim();
}
document.querySelector('.b-8').onclick = () => {
    document.querySelector('.out-8').textContent = t8('            hello world ');
}

function t9(num) {
    return num % 2 === 0;
}
document.querySelector('.b-9').onclick = () => {
    document.querySelector('.out-9').textContent = t9(30);
}

function t10(a, b) {
    if(a > b) {return a;}
    else if (a < b) {return b;}
    else {return a;}
}
document.querySelector('.b-10').onclick = () => {
    document.querySelector('.out-10').textContent = t10(40, 40);
}