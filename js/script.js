function f1() {
    let out = document.querySelector('.out-1');

    let num = +document.querySelector('.i-1').value;

    out.innerHTML = num === 4;
}
document.querySelector('.b-1').onclick = f1;

let a21 = 30;
let a24 = 40;

function f2() {
    let out = document.querySelector('.out-2');
    if (a21 > a24) {
        out.innerHTML = a21;
    }
    else {
        out.innerHTML = a24;
    }
}
document.querySelector('.b-2').onclick = f2;

function f3() {
    let out = document.querySelector('.out-3');

    let num1 = +document.querySelector('.i-31').value;
    let num2 = +document.querySelector('.i-32').value;

    if (num1 > num2) {
        out.innerHTML = num1;
    }
    else if (num1 === num2) {
        out.innerHTML = 'равны';
    }
    else {
        out.innerHTML = num2;
    }

}
document.querySelector('.b-3').onclick = f3;

function f4() {
    let out = document.querySelector('.out-4');

    let year = +document.querySelector('.i-4').value;

    out.innerHTML = 2021 - year >= 18;
}
document.querySelector('.b-4').onclick = f4;

function f5() {
    let out = document.querySelector('.out-5');

    let num = +document.querySelector('.i-5').value;

    if(num > 0) {
        out.innerHTML = '1';
    }
    else if (num === 0) {
        out.innerHTML = '0';
    }
    else {
        out.innerHTML = 'm';
    }
}
document.querySelector('.b-5').onclick = f5;

function f6() {
    let out = document.querySelector('.out-6');

    let num = +document.querySelector('.i-6').value;

    if (num % 2 === 0) {
        out.innerHTML = 'even';
    }
    else {
        out.innerHTML = 'odd';
    }
}
document.querySelector('.b-6').onclick = f6;

function f7() {
    let out = document.querySelector('.out-7');

    let num1 = +document.querySelector('.i-71').value;
    let num2 = +document.querySelector('.i-72').value;

    out.innerHTML = Math.pow(num1,num2);
}
document.querySelector('.b-7').onclick = f7;

function f8() {
    let out = document.querySelector('.out-8');

    let val = document.querySelector('.s-8').value;

    switch (val) {
        case '1' :
            out.innerHTML = 'one';
            break;
        case '2' :
            out.innerHTML = 'two';
            break;
        case '3' :
            out.innerHTML = 'three';
            break;
    }
}
document.querySelector('.b-8').onclick = f8;

function f9() {
    let out = document.querySelector('.out-9');

    let num = +document.querySelector('.i-9').value;

    if (num >= 1 && num <= 32) {
        out.innerHTML = 1;
    }
    else if (num >= 33 && num <= 43) {
        out.innerHTML = 2;
    }
    else if (num >= 44 && num <= 64) {
        out.innerHTML = 3;
    }
    else{
        out.innerHTML = 0;
    }

}
document.querySelector('.b-9').onclick = f9;

function f10() {
    let out = document.querySelector('.out-10');

    out.innerHTML = document.querySelector('.s-10').value;

}
document.querySelector('.b-10').onclick = f10;

function f11() {
    let out = document.querySelector('.out-11');

    out.innerHTML = document.querySelector('.s-11').value;
}
document.querySelector('.s-11').onchange = f11;

function f12() {
    let out = document.querySelector('.out-12');

    let val = document.querySelector('.i-12').value;

    out.innerHTML = (typeof val);
}
document.querySelector('.b-12').onclick = f12;

function f13() {
    let out = document.querySelector('.out-13');

    let val = document.querySelector('.i-13').value;

    out.innerHTML = (typeof val);
}
document.querySelector('.b-13').onclick = f13;

function f14() {
    let out = document.querySelector('.out-14');

    let num1 = +document.querySelector('.i-141').value;
    let num2 = +document.querySelector('.i-142').value;
    let oper = document.querySelector('.s-143').value;

    switch (oper) {
        case '+':
            out.innerHTML = nm1 + num2;
            break;
        case '-':
            out.innerHTML = num1 - num2;
            break;
        case '*':
            out.innerHTML = num1 * num2;
            break;
        case '/':
            out.innerHTML = num1 / num2;
            break;
    }
}
document.querySelector('.b-14').onclick = f14;

function f15() {
    let out = document.querySelector('.out-15');

    let num1 = +document.querySelector('.s-151').value;
    let num2 = +document.querySelector('.s-152').value;
    let oper = document.querySelector('.s-153').value;

    if(oper === '&&') {
        out.innerHTML = (num1 && num2);
    }
    else {
        out.innerHTML = (num1 || num2);
    }
}
document.querySelector('.b-15').onclick = f15;
