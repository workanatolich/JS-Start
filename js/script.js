function t1() {
    let out = document.querySelector('.out-1');
    let i = 1;

    while (i <= 50) {
        out.innerHTML += `${i} `;
        i++;
    }
}
document.querySelector('.b-1').onclick = t1;

function t2() {
    let out = document.querySelector('.out-2');
    let i = 2;

    while(i <= 122) {
        out.innerHTML += `${i} `;
        i+=2;
    }
}
document.querySelector('.b-2').onclick = t2;

function t3() {
    let out = document.querySelector('.out-3');
    let i = 25;

    while(i >= 7) {
        out.innerHTML += `${i} `;
        i--;
    }
}
document.querySelector('.b-3').onclick = t3;

function t4() {
    let out = document.querySelector('.out-4');
    let i = 77;

    while(i >= 35) {
        out.innerHTML += `${i}_`;
        i-=3;
    }
}
document.querySelector('.b-4').onclick = t4;

function t5() {
    let out = document.querySelector('.out-5');
    let i = 1;

    while(i <= 17) {
        if(i % 2 === 0) { out.innerHTML += `${i}_**`; }
        else { out.innerHTML += `${i}_*`; }
        i++;
    }
}
document.querySelector('.b-5').onclick = t5;

function t6() {
    let out = document.querySelector('.out-6');

    let num = +document.querySelector('.i-6').value;
    let i = 1;

    while(i <= num) {
        out.innerHTML += `****** <br>`;
        i++;
    }
}
document.querySelector('.b-6').onclick = t6;

function t7() {
    let out = document.querySelector('.out-7');

    let num = +document.querySelector('.i-7').value;

    while(num >= 0) {
        out.innerHTML += `${num} `;
        num--;
    }
}
document.querySelector('.b-7').onclick = t7;

function t8() {
    let out = document.querySelector('.out-8');

    let a = +document.querySelector('.i-81').value;
    let b = +document.querySelector('.i-82').value;

    while(a <= b) {
        out.innerHTML += `${a} `;
        a++;
    }
}
document.querySelector('.b-8').onclick = t8;

function t9() {
    let out = document.querySelector('.out-9');

    let a = +document.querySelector('.i-91').value;
    let b = +document.querySelector('.i-92').value;

    if(a>b) {
        let c = b;
        b = a;
        a = c;
    }

    while(a <= b) {
        out.innerHTML += `${a} `;
        a++;
    }
}
document.querySelector('.b-9').onclick = t9;

function t10() {
    let out = document.querySelector('.out-10');

    let i = 1950;

    while (i <= 2000) {
        out.innerHTML += i + ' ';
        i += 2;
    }
}
document.querySelector('.b-10').onclick = t10;

function t11() {
    let out = document.querySelector('.out-11');

    let elem = document.querySelectorAll('.div-11');
    let i = 0;

    while (i < elem.length) {
        out.innerHTML += elem[i].innerHTML + ' ';
        i++;
    }
}
document.querySelector('.b-11').onclick = t11;

function t12() {
    let elem = document.querySelectorAll('.div-12');
    let i = 0;

    while (i < elem.length) {
        elem[i].style.marginBottom = '20px';
        elem[i].style.background = 'orange';
        i++;
    }
}
document.querySelector('.b-12').onclick = t12;

function t13() {
    let elem = document.querySelectorAll('.i-13');
    let i = 0;

    while (i < elem.length) {
        elem[i].value = `${i+1}`;
        i++;
    }
}
document.querySelector('.b-13').onclick = t13;

function t14() {
    let out = document.querySelector('.out-14');

    let elem = document.querySelectorAll('.i-14');
    let i = 0;

    while (i < elem.length) {
        if(elem[i].checked) {
            out.innerHTML = elem[i].value;
        }
        i++;
    }
}
document.querySelector('.b-14').onclick = t14;

function t15() {
    let out = document.querySelector('.out-15');

    let i = 0;

    while (i <= 10) {
        out.innerHTML += `${10-i} ${i} `;
        i++;
    }
}
document.querySelector('.b-15').onclick = t15;



