function f1() {
    let out = document.querySelector('.out-1');

    out.style.background = 'red';
    out.style.width = '200px';
    out.style.height = '40px';
    out.style.color = 'white';
}
document.querySelector('.b-1').onclick = f1;

function f2() {
    let out = document.querySelector('.out-2');
    out.classList.add('bg-2');
}
document.querySelector('.b-2').onclick = f2;

function f3() {
    let out = document.querySelector('.out-3');
    out.classList.remove('bg-3');
}
document.querySelector('.b-3').onclick = f3;

function f4() {
    let out = document.querySelector('.out-4');
    out.classList.toggle('bg-4');
}
document.querySelector('.b-4').onclick = f4;

function f5() {
    let out = document.querySelector('.out-5');

    let check = document.querySelector('.out-4');

    out.innerHTML = check.classList.contains('bg-4') === true;
}
document.querySelector('.b-5').onclick = f5;

function f6() {
    let out = document.querySelector('.out-6');

    let count = document.querySelectorAll('.p-6');

    out.innerHTML = count.length;
}
document.querySelector('.b-6').onclick = f6;

function f7() {
    let out = document.querySelectorAll('.out-7');

    for (let i = 0; i < out.length; i++) {
        out[i].classList.add('bg-7');
    }
}
document.querySelector('.b-7').onclick = f7;

function f8() {
    let out = document.querySelectorAll('.out-8');

    for (let i = 0; i < out.length; i++) {
        out[i].classList.toggle('bg-8');
    }
}
document.querySelector('.b-8').onclick = f8;

function f9() {
    this.classList.add('bg-9');
}
let out9 = document.querySelectorAll('.out-9');
for(let i = 0; i < out9.length; i++) {
    out9[i].onclick = f9;
}

function f10() {
    this.classList.toggle('bg-10');
}
let out10 = document.querySelectorAll('.out-10');
for(let i = 0; i < out10.length; i++) {
    out10[i].onclick = f10;
}

function f11() {
    let out = document.querySelector('.out-11');

    let elem = document.createElement('div');
    elem.innerHTML = '25';
    out.append(elem);
}
document.querySelector('.b-11').onclick = f11;

function f12() {
    let out = document.querySelector('.out-12');

    let elem = document.createElement('div');
    elem.innerHTML = '12';
    elem.classList.add('bg-12');
    out.append(elem);
}
document.querySelector('.b-12').onclick = f12;

function f13() {
    let out = document.querySelector('.out-13');

    let elem = document.createElement('div');
    elem.innerHTML = 'pushMe';
    elem.classList.add('bg-13');
    out.append(elem);
    elem.onclick = f13_1;
}
function f13_1() {
    document.querySelector('.out-13-1').innerHTML = this.innerHTML;
}
document.querySelector('.b-13').onclick = f13;

function f14() {
    let out = document.querySelector('.out-14');

    let elem = document.createElement('div');
    elem.innerHTML = '14';
    elem.classList.add('bg-14');
    out.prepend(elem);
}
document.querySelector('.b-14').onclick = f14;


function f15() {
    let out = document.querySelector('.out-15');

    let elem = document.createElement('div');
    elem.innerHTML = '15';
    elem.classList.add('bg-15');
    out.before(elem);
}
document.querySelector('.b-15').onclick = f15;


function f16() {
    let out = document.querySelector('.out-16');

    let elem = document.createElement('div');
    elem.innerHTML = '16';
    elem.classList.add('bg-16');
    out.after(elem);
}
document.querySelector('.b-16').onclick = f16;


function f17() {
    let out = document.querySelector('.out-17');

    let elem = document.createElement('div');
    elem.innerHTML = '17';
    elem.classList.add('bg-17');
    out.replaceWith(elem);
}
document.querySelector('.b-17').onclick = f17;

function f18() {
    let out = document.querySelector('.out-18');

    let data = document.querySelector('.p-18');

    out.innerHTML = data.getAttribute('data-b');
}
document.querySelector('.b-18').onclick = f18;

function f19() {
    let out = document.querySelector('.out-19');

    let data = document.querySelectorAll('.p-19');

    for(let i = 0; i < data.length; i++) {
        out.innerHTML += data[i].getAttribute('data-b') + ' ';
    }
}
document.querySelector('.b-19').onclick = f19;

function f20() {
    let out = document.querySelector('.out-20');
    out.setAttribute('title', 'go');
}
document.querySelector('.b-20').onclick = f20;



