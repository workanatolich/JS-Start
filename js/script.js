function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}


let d1 = [33, 'best', 66, 'best'];
function f1() {
    let value = document.querySelector('.i-1').value;
    d1[d1.length] = value;
    showArr('.out-1',d1);
}
document.querySelector('.b-1').onclick = f1;


function f2() {
    d1.pop();
    showArr('.out-2',d1);
}
document.querySelector('.b-2').onclick = f2;


function f3() {
    d1.shift();
    showArr('.out-3',d1);
}
document.querySelector('.b-3').onclick = f3;


function f4() {
    let value = document.querySelector('.i-4').value;
    d1.push(value);
    showArr('.out-4',d1);
}
document.querySelector('.b-4').onclick = f4;


function f5() {
    let value = document.querySelector('.i-5').value;
    d1.unshift(value);
    showArr('.out-5',d1);
}
document.querySelector('.b-5').onclick = f5;

let d6 = ['test', 5, 12];
function f6() {
    let value = document.querySelector('.i-6').value;
    d6[d6.length] = value;
    showArr('.out-6',d6);
}
document.querySelector('.b-6').onclick = f6;


let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
function f7() {
    d7.length --;
    showArr('.out-7',d7);
}
document.querySelector('.b-7').onclick = f7;


let d8 = [2,'4', 12, 67, 'hello'];
function f8() {
    let value = document.querySelector('.i-8').value;

    for(let i = d8.length; i >= 0; i--) {
        d8[i] = d8[i-1];
    }
    console.log(d8);
    d8[0] = value;

    showArr('.out-8',d8);
}
document.querySelector('.b-8').onclick = f8;

let d9 = [100, 200, 300, 400, 700, 121];
function f9() {
    for(let i = 0; i < d9.length; i++) {
        d9[i] = d9[i+1]
    }
    d9.length --;

    showArr('.out-9',d9);
}
document.querySelector('.b-9').onclick = f9;

let d10 = [3,14,15,92,6];
function f10() {
    d10.reverse()
    showArr('.out-10',d10);
}
document.querySelector('.b-10').onclick = f10;


let d11 = [2,3,4,5,6,7];
function f11() {
    let out = document.querySelector('.out-11');

    let value = +document.querySelector('.i-11').value;

    out.innerHTML = d11.indexOf(value);
}
document.querySelector('.b-11').onclick = f11;

let d12 = [6, 62, 60, 70, 1, 5];
function f12() {
    let out = document.querySelector('.out-12');

    let value = +document.querySelector('.i-12').value;

    for (let i = 0; i < d12.length; i++) {
        if (d12[i] == value) {
            out.innerHTML = i;
            break;
        }
        else {
            out.innerHTML = -1;
        }
    }
}
document.querySelector('.b-12').onclick = f12;

let d13 = [6, 0, 22, 1, 4, 76, 14];
function f13() {
    let a = '';
    let b = d13.length;

    let i = 0;
    while (i <= b-1-i) {
        a = d13[i];
        d13[i] = d13[b-1-i];
        d13[b-1-i] = a;
        i++;
    }

    showArr('.out-13', d13);
}
document.querySelector('.b-13').onclick = f13;


let d14 = [];
function f14() {
    let count = +document.querySelector('.i-14').value;

    for(let i = 0; i < count; i++) {
        d14[i] = 1;
    }
    console.log(d14);
    showArr('.out-14', d14);
}
document.querySelector('.b-14').onclick = f14;


let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
function f15() {
    let num = +document.querySelector('.i-15').value;

    if (d15.indexOf(num) === -1) {d15.push(num);}

    showArr('.out-15', d15);
}
document.querySelector('.b-15').onclick = f15;


let d16 = [];
let d161 = [5,6,7,8,9];
let d162 = [23,24,56,87];
function f16() {
    d16 = d161.concat(d162);
    showArr('.out-16', d16);
    console.log(d16);
}
document.querySelector('.b-16').onclick = f16;

let d17 = [];
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1,2,3,4,5];
function f17() {
    let i = 0;

    let k1 = d171.length;
    let k2 = d172.length;

    let k0 = k1 - k2;

    if (k0 < 0) {
        while (i < k2) {
            if (i < k1) {
                d17[i] = d171[i];
                d17[i + k1] = d172[i];
            } else {
                d17[i + k1] = d172[i];
            }

            i++;
        }
    }

    if (k0 >= 0) {
        while (i < k1) {
            if(i < k2) {
                d17[i] = d171[i];
                d17[i+k1] = d172[i];
            }
            else {
                d17[i] = d171[i];
            }
            i++;
        }
    }

    showArr('.out-17', d17);
}
document.querySelector('.b-17').onclick = f17;

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];
function f18() {
    let out = document.querySelector('.out-18');

    let value = document.querySelector('.i-18').value;

    out.innerHTML = d18.includes(value);
}
document.querySelector('.b-18').onclick = f18;

let d19 = ['Your','payment','method','will','automatically','be','charged','in','advance','every' ];
function f19() {
    let out = document.querySelector('.out-19');

    let maxString = (array) => {
        let a = array[0];
        for (let i = 0; i < array.length; i++) {
            if (a.length < array[i].length) {
                a = array[i];
            }
        }
        return a;
    }

    out.innerHTML = maxString(d19);

}
document.querySelector('.b-19').onclick = f19;

let d20 = [4,5,6,7,8,9,10];
function f20() {
    let out = document.querySelector('.out-20');

    let str = d20.join('');

    out.innerHTML = str;
}
document.querySelector('.b-20').onclick = f20;