function f1() {
    let out = document.querySelector('.out-1');

    for(let i = 0; i < 3; i++) {
        for(let k = 0; k < 3; k++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '_';
    }
}
document.querySelector('.b-1').onclick = f1;

function f2() {
    let out = document.querySelector('.out-2');

    for(let i = 1; i < 4; i++) {
        out.innerHTML += `<br> ${i} <br>`;
        for(let k = 0; k < 3; k++) {
            out.innerHTML += `*_`;
        }
    }
}
document.querySelector('.b-2').onclick = f2;

function f3() {
    let out = document.querySelector('.out-3');

    for(let i = 1; i <= 4; i++) {
        for(let k = 0; k < 3; k++) {
            out.innerHTML += '*_';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-3').onclick = f3;

function f4() {
    let out = document.querySelector('.out-4');

    for(let i = 1; i <= 3; i++) {
        out.innerHTML += i + '_';
        for(let k = 1; k < 6; k++) {
            out.innerHTML += k + ' ';
        }
    }
}
document.querySelector('.b-4').onclick = f4;

function f5() {
    let out = document.querySelector('.out-5');

    for(let i = 1; i <= 3; i++) {
        for(let k = 0; k < 6; k++) {
            if(k % 2 !== 0 && k!== 0){
                out.innerHTML += '0';
            }
            else {
                out.innerHTML += '1';
            }
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-5').onclick = f5;

function f6() {
    let out = document.querySelector('.out-6');

    for(let i = 1; i <= 3; i++) {
        for(let k = 0; k < 6; k++) {
            if(k % 3 === 2) {
                out.innerHTML += 'x';
            }
            else if(k % 2 !== 0) {
                out.innerHTML += '0';
            }
            else {
                out.innerHTML += '1';
            }
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-6').onclick = f6;

function f7() {
    let out = document.querySelector('.out-7');

    for(let i = 0; i < 5; i++) {
        for(k = 0; k < i; k++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-7').onclick = f7;

function f8() {
    let out = document.querySelector('.out-8');

    for(let i = 5; i > 0; i--) {
        for(k = 0; k < i; k++) {
            out.innerHTML +='*';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-8').onclick = f8;

function f9() {
    let out = document.querySelector('.out-9');

    for(let i = 1; i < 7; i++) {
        for(k = 1; k < i; k++) {
            out.innerHTML += `${k} `;
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-9').onclick = f9;

function f10() {
    let out = document.querySelector('.out-10');

    for(let i = 0; i < 6; i++) {
        for(let k = 0; k <= 9; k++) {
            if(k === 9) {
                out.innerHTML += `${i+1}0`;
                break;
            }
            out.innerHTML += `${i}${k+1} `;
        }
        out.innerHTML += '<br>'

    }
}
document.querySelector('.b-10').onclick = f10;