let arr1 = [true, false, 123, 'qwe'];
function t1() {
    let out = document.querySelector('.out-1');
    
    out.innerHTML = arr1;
}
document.querySelector('.b-1').onclick = t1;

let arr2 = [true, false, 123, 'qwe'];
function t2() {
    let out = document.querySelector('.out-2');
    
    let value = '';
    
    for (let i = 0; i < arr2.length; i++) {
        value +=arr2[i]+' ';
    }
    
    out.innerHTML = value;
}
document.querySelector('.b-2').onclick = t2;

let arr3 = [true, false, 123, 'qwe'];
function t3() {
    let out = document.querySelector('.out-3');

    out.innerHTML = arr3.length;
}
document.querySelector('.b-3').onclick = t3;

let arr4 = [1,2,3,4,5,6,7,8,9];
function t4() {
    let out = document.querySelector('.out-4');

    out.innerHTML = `${arr4[0]} ${arr4[3]} ${arr4[8]}`;
}
document.querySelector('.b-4').onclick = t4;

let arr5 = [1,2,3,4,5,6,7,8,9];
function t5() {
    let out = document.querySelector('.out-5');

    out.innerHTML = `${arr5[0] + arr5[2] + arr5[3]}`;
}
document.querySelector('.b-5').onclick = t5;

let arr6 = ['Иван', 'Телец', '11', '05'];
function t6() {
    let out = document.querySelector('.out-6');

    let value = '';

    for (let i = 0; i < arr6.length; i++) {
        value += arr6[i] + ' ';
    }
    out.innerHTML = valeu;
}
document.querySelector('.b-6').onclick = t6;

let arr7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
function t7() {
    let out = document.querySelector('.out-7');

    arr7[5] = 'italy';
    arr7[6] = 'turkey';
    arr7[7] = 'vietnam';

    let value = '';

    for(let i = 0; i < arr7.length; i++) {
        value += arr7[i] + ' ';
    }
    out.innerHTML = value;
}
document.querySelector('.b-7').onclick = t7;

let arr8 = [];
function t8() {
    let out = document.querySelector('.out-8');


    arr8[3] = 3.14;
    arr8[4] = 17;
    arr8[6] = 5;

    let value = '';

    for (let i = 0; i < arr8.length; i++) {
        value += arr8[i] + '-';
    }

    out.innerHTML = value;

    let out1 = document.createElement('div');
    out1.classList.add('out-8-1');
    out1.innerHTML = arr8.length;
    out.after(out1);

}
document.querySelector('.b-8').onclick = t8;

let arr9 = [100, 200, 300, 400, 700, 121];
function t9() {
    let out = document.querySelector('.out-9');

    out.innerHTML = arr9[arr9.length-1];
}
document.querySelector('.b-9').onclick = t9;

let arr10 = [100, 200, 300, 400, 700, 121];
function t10() {
    let out = document.querySelector('.out-10');
    let sum = arr10[1] + arr10[arr10.length-1];
    out.innerHTML = sum;
}
document.querySelector('.b-10').onclick = t10;

let arr11 = [2,3,4,5,6,7];
function t11() {
    let out = document.querySelector('.out-11');

    let a = arr11[2];
    arr11[2] = arr11[4];
    arr11[4] = a;

    let value = '';

    for (let i = 0; i < arr11.length; i++) {
        value += arr11[i] + ' ';
    }

    out.innerHTML = value;
}
document.querySelector('.b-11').onclick = t11;

let arr12 = ['test', 'west', 'list', 'class', 'best'];
function t12() {
    let out = document.querySelector('.out-12');

    let a = arr12[arr12.length-1];
    arr12[arr12.length-1] = arr12[0];
    arr12[0] = a;

    let value = '';

    for (let i = 0; i < arr12.length; i++) {
        value += arr12[i] + ' ';
    }

    out.innerHTML = value;
}
document.querySelector('.b-12').onclick = t12;

let arr13 = ['test', 'west', 'list', 'class', 'best'];
function t13() {
    let out = document.querySelector('.out-13');

    let value = '';

    for (let i = 0; i < arr13.length; i++) {
        value += `${i} ${arr13[i]} `;
    }

    out.innerHTML = value;
}
document.querySelector('.b-13').onclick = t13;

let arr14 = [1, 2, 3, 'hello', 66];
function t14() {
    let out = document.querySelector('.out-14');

    let value = '';

    for (let i = arr14.length-1; i >= 0; i--) {
        value += `${arr14[i]} `;
    }

    out.innerHTML = value;

}
document.querySelector('.b-14').onclick = t14;

let arr15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
function t15() {
    let out = document.querySelector('.out-15');

    let value = '';

    for (let i = 0; i < arr15.length; i++) {
        if(arr15[i] > 0) {
            value += `${arr15[i]} `;
        }
    }

    out.innerHTML = value;
}
document.querySelector('.b-15').onclick = t15;


let arr16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let arr16_odd = [];
let arr16_even = [];
function t16() {
    let outOdd = document.querySelector('.out-16_odd');
    let outEven = document.querySelector('.out-16_even');

    let valueOdd = '';
    let valueEven = '';

    for (let i = 0, j = 0; i < arr16.length; i++) {
        if(arr16[i] % 2 === 0) {
            arr16_even[j] = arr16[i];
            j++;
        }
    }

    for (let i = 0, j = 0; i < arr16.length; i++) {
         if(arr16[i] % 2 !== 0) {
            arr16_odd[j] = arr16[i];
            j++;
        }
    }

    for (let i = 0; i < arr16_odd.length; i++) {valueOdd += `${arr16_odd[i]} `}
    for (let i = 0; i < arr16_even.length; i++) {valueEven += `${arr16_even[i]} `}

    outOdd.innerHTML = valueOdd;
    outEven.innerHTML = valueEven;
}
document.querySelector('.b-16').onclick = t16;

let arr17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
function t17() {
    let out = document.querySelector('.out-17');

    let flag = 0

    for (let i = 0; i < arr17.length; i++) {
        if(arr17[i] > 3) {
            flag++;
        }
    }

    out.innerHTML = flag;
}
document.querySelector('.b-17').onclick = t17;

let arr18 = [15,24,13,78,21,4,45,67];
function t18() {
    let out = document.querySelector('.out-18');

    let max = arr18[0];

    for (let i = 0; i < arr18.length; i++) {
        if(arr18[i] > max) {
            max = arr18[i];
        }
    }
    out.innerHTML = max;
}
document.querySelector('.b-18').onclick = t18;

let arr19 = [15,424,313,78,241,4,45,67];
function t19() {
    let out = document.querySelector('.out-19');

    let min = arr19[0];
    let minInd = 0;

    for (let i = 0; i < arr18.length; i++) {
        if(arr19[i] < min) {
            min = arr19[i];
            minInd = i;
        }
    }
    out.innerHTML = minInd;
}
document.querySelector('.b-19').onclick = t19;

let arr20 = [4,5,6,7,8,9,10];
function t20() {
    let out = document.querySelector('.out-20');
    let sum = 0;

    for (let i = 0; i < arr20.length; i++) {
        sum += arr20[i];
    }
    out.innerHTML = sum;
}
document.querySelector('.b-20').onclick = t20;