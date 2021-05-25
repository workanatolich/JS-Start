let a1_res = [],
    a2_res = [],
    a3_res = [],
    a4_res = [],
    a5_res = [],
    a6_res = [],
    a7_res = [],
    a8_res,
    a9_res = '',
    a10_res = '';

function t1() {
    let a = [4,5,6,7,12,34,56,78,90,11];
    a.forEach((elem) => {
        a1_res.push(elem*2);
    })

    document.querySelector('.out-1').innerHTML = a1_res;
}

document.querySelector('.b-1').addEventListener('click', t1);

function t2() {
    let a = [2,3,4,5,10,11,12];
    a.forEach((elem) => {
        a2_res.push(elem/2);
    })

    document.querySelector('.out-2').innerHTML = a2_res;
}

document.querySelector('.b-2').onclick = t2;

function t3() {
    let a = [2, 'hello', 3, 'hi', 4, 'Mazai'];
    a.forEach((elem) => {
        if(typeof(elem) == 'number') {
            a3_res.push(elem);
        }
    })

    document.querySelector('.out-3').innerHTML = a3_res;
}

document.querySelector('.b-3').onclick = t3;

function t4() {
    let allSpan = document.querySelectorAll('.task-4');

    allSpan.forEach((elem) => {
        a4_res.push(elem.getAttribute('data'));
    })

    document.querySelector('.out-4').innerHTML = a4_res;
}

document.querySelector('.b-4').onclick = t4;

function t5_1() {
    let allP = document.querySelectorAll('.task-5');
    allP.forEach((elem) => {
        elem.onclick = t5;
    })
}

function t5() {
    a5_res.push(this.getAttribute('data'));
    document.querySelector('.out-5').innerHTML = a5_res;
}

t5_1();

function t6() {
    let str ='helloworld';
    a6_res = str.split('');
    document.querySelector('.out-6').innerHTML = a6_res;
}

document.querySelector('.b-6').onclick = t6;

function t7() {
    let str ='hello world hi mazai';
    a7_res = str.split(' ');
    document.querySelector('.out-7').innerHTML = a7_res;
}

document.querySelector('.b-7').onclick = t7;

function t8() {
    let a = [1,2,66,77,15];
    a8_res = a.join('-');
    document.querySelector('.out-8').innerHTML = a8_res;
}

document.querySelector('.b-8').onclick = t8;

function t9() {
    let a = [['hi', 'mahai'], ['test', 'best']];
    a.forEach((elem) => {
        a9_res += `${elem.join('-')}-`;
    })
    console.log(a9_res);
}

document.querySelector('.b-9').onclick = t9;


function t10() {
    let a = {name: 'ivan', age: 15, sex: 1, id: 45};

    let out = '?';

    for(let key in a) {
        out += `${key}=${a[key]}&`;
    }

    document.querySelector('.out-10').innerHTML = out;
}

document.querySelector('.b-10').onclick = t10;