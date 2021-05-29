function t1() {
    document.querySelector('.out-1').innerHTML = event.key;
}

document.querySelector('.i-1').onkeypress = t1;

function t2() {
    document.querySelector('.out-2').innerHTML = `charCode: ${event.charCode} keyCode: ${event.keyCode}`;
}

document.querySelector('.i-2').onkeypress = t2;

function t3() {
    let min = 48;
    let max = 57;

    let out = '';
    out = event.keyCode < min || event.keyCode > max;

    document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.i-3').onkeypress = t3;

let out4 = '';
function t4() {

    let alf = {a:97, b:98, c:99, d:100, e:101, f:102, g:103,
        h:104, i:105, j:106, k:107, l:108, m:109, n:110,
        o:111, p:112, q:113, r:114, s:115, t:116, u:117,
        v:118, w:119, x:120, y:121, z:122};

    let upperMin = 65;
    let upperMax = 90;

    let keyCode = '';

    if(event.keyCode >= upperMin && event.keyCode <= upperMax) {
        keyCode = event.keyCode + 32;
        for(let key in alf) {
            if(alf[key] == keyCode) {
               return key;
            }
        }

    } else {
        return event.key;
    }

}

document.querySelector('.i-4').onkeypress = () => {
    out4 += t4();
    document.querySelector('.out-4').innerHTML = out4;
}

let out5 = '';
function t5() {

    let alf = {A:65, B:66, C:67, D:68, E:69, F:70,
        G:71, H:72, I:73, J:74, K:75, L:76, M:77,
        N:78, O:79, P:80, Q:81, R:82, S:83, T:84,
        U:85, V:86, W:87, X:88, Y:89, Z:90};

    let lowerMin = 97;
    let lowerMax = 122;

    let keyCode = '';

    if(event.keyCode >= lowerMin && event.keyCode <= lowerMax) {
        keyCode = event.keyCode - 32;
        for(let key in alf) {
            if(alf[key] == keyCode) {
               return key;
            }
        }

    } else {
        return event.key;
    }

}

document.querySelector('.i-5').onkeypress = () => {
    out5 += t5();
    document.querySelector('.out-5').innerHTML = out5;
}


let out6 = '';

document.querySelector('.i-6').onkeypress = () => {
    out6 += t4();
    document.querySelector('.i-6').value = out6;
}


function t7() {

    const a7 = [];
    a7.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
        'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#',
        '$', '%', '&', '?', '-', '+', '=', '~', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

    let num = Math.floor(Math.random() * a7.length);
    let out = '';

    for(let key in a7) {
        if(key == num) {
            out = a7[key];
        }
    }

    document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.i-7').onkeypress = t7;


let out8 = '';
function t8() {
    let key = event.key;
    if(key == 'i') {
        out8 += 1;
    } else if(key == 'o') {
        out8 += 0;
    } else if(key == 'l') {
        out8 += 7;
    } else {
        out8 += key;
    }

    document.querySelector('.out-8').innerHTML = out8;
}

document.querySelector('.i-8').onkeypress = t8;

let out9 = 0;
function t9() {
    if(event.key == 'ArrowDown') {
        out9 += 1;
    }

    document.querySelector('.out-9').innerHTML = out9;
}

document.querySelector('.i-9').onkeydown = t9;

let width10 = 50;
let height10 = 50;
function t10() {
    let img = document.querySelector('.img-10');
    if(event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        width10 ++;
        img.style.width = width10 + 'px';
    } else if(event.key == 'ArrowDown' || event.key == 'ArrowUp') {
        height10 ++;
        img.style.height = height10 + 'px';
    }
}

document.querySelector('.i-10').onkeydown = t10;

function t11() {
    let set = new Set (['1','2','3','4','5','6',
        '7','8','9','0', 'q','w','e','r','t','y', 'u',
        'i','o','p', 'shiftleft', 'controlleft', 'altleft', 'space', 'enter']);

    let out = '';
    let elem;
    function clearCode(out) {
       let code = event.code;

       if(code.includes('Digit')) {
           out = code.substr(-1);
       } else if(code.includes('Key')) {
           out = code.substr(-1);
       } else {
           out = code;
       }

       return out;
    }

    let lowerOut = clearCode(out).toLowerCase();
    if(set.has(lowerOut)) {
        elem = document.querySelector(`.keyboard-${lowerOut}`);
        elem.classList.toggle('active');
    }
}

document.querySelector('.i-11').onkeydown = t11;



