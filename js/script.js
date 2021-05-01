function t1() {
    let out = document.querySelector('.out-1');

    for(let i = 1; i <= 50; i++) {
        out.innerHTML += i + ' ';
    }
}
document.querySelector('.b-1').onclick = t1;

function t2() {
    let out = document.querySelector('.out-2');

    for(let i = 2; i <= 123; i+=2) {
        out.innerHTML += i + ' ';
    }
}
document.querySelector('.b-2').onclick = t2;

function t3() {
    let out = document.querySelector('.out-3');

    for(let i = 25; i >= 7; i--) {
        out.innerHTML += i + ' ';
    }
}
document.querySelector('.b-3').onclick = t3;

function t4() {
    let out = document.querySelector('.out-4');

    for(let i = 77; i >= 35; i-=3) {
        out.innerHTML += i + '_';
    }
}
document.querySelector('.b-4').onclick = t4;

function t5() {
    let out = document.querySelector('.out-5');

    for(let i = 1; i <= 17; i++) {
        if(i % 2 === 0) {
            out.innerHTML += i + '_**'
        }
        else {
            out.innerHTML += i + '_*'
        }
    }
}
document.querySelector('.b-5').onclick = t5;

function t6() {
    let out = document.querySelector('.out-6');

    let count = +document.querySelector('.i-6').value;

    for(let i = 1; i <= count; i++) {
        out.innerHTML += '******' + '<br>';
    }
}
document.querySelector('.b-6').onclick = t6;

function t7() {
    let out = document.querySelector('.out-7');

    let count = +document.querySelector('.i-7').value;

    for(let i = count; i >= 0; i--) {
        out.innerHTML += i + ' ';
    }
}
document.querySelector('.b-7').onclick = t7;

function t8() {
    let out = document.querySelector('.out-8');

    let num1 = +document.querySelector('.i-81').value;
    let num2 = +document.querySelector('.i-82').value;

    for(let i = num1; i <= num2; i++) {
        out.innerHTML += i + ' ';
    }
}
document.querySelector('.b-8').onclick = t8;

function t9() {
    let out = document.querySelector('.out-9');

    let num1 = +document.querySelector('.i-91').value;
    let num2 = +document.querySelector('.i-92').value;

    if(num1 > num2 ) {
        let num = num2;
        num2 = num1;
        num1 = num;
    }

    for(let i = num1; i <= num2; i++) {
        out.innerHTML += i + ' ';
    }
}
document.querySelector('.b-9').onclick = t9;

function t10() {
    let out = document.querySelector('.out-10');

    for(let i = 1950; i <= 2000; i+=2) {
        out.innerHTML += i + ' ';
    }
}
document.querySelector('.b-10').onclick = t10;

function t11() {
    let out = document.querySelector('.out-11');

    let elem = document.querySelectorAll('.div-11');

    for(let i = 0; i < elem.length; i++) {
        out.innerHTML += elem[i].innerHTML + ' ';
    }
}
document.querySelector('.b-11').onclick = t11;

function t12() {
    let elem = document.querySelectorAll('.div-12');

    for(let i = 0; i < elem.length; i++) {
        elem[i].style.background = 'orange';
    }
}
document.querySelector('.b-12').onclick = t12;

function t13() {
    let out = document.querySelector('.out-13');

    let elem = document.querySelectorAll('.i-13');

    for (let i = 0; i < elem.length; i++) {
        out.innerHTML+= 'Input 13' + i +'.value = ' + elem[i].value + '<br>';
    }
}
document.querySelector('.b-13').onclick = t13;

function t14() {
    let out = document.querySelector('.out-14');

    let elem = document.querySelectorAll('input[name="i-14"]');

    for (let i = 0; i < elem.length; i++) {
        if(elem[i].checked) {
            out.innerHTML = elem[i].value;
        }
    }
}
document.querySelector('.b-14').onclick = t14;

function t15() {
    let out = document.querySelector('.out-15');

    for (let i = 0; i <= 10; i++) {
        out.innerHTML += (10-i) + ' ' + i + ' ';
    }

}
document.querySelector('.b-15').onclick = t15;
