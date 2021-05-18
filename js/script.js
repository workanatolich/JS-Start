let a1 = [5,7,9, 11, 13, 15];

function f1() {
    let out = '';
    for (let i = 0; i < a1.length; i++) {
        out += `${a1[i]} `;
    }
    document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').addEventListener('click', f1);

let a2 = [5,7,9, 11, 13, 15];

function f2() {
    let out = '';
    for (let i = 0; i < a2.length; i++) {
        out += `${i} ${a2[i]} `;
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').addEventListener('click', f2);

function f3() {
    let out = document.getElementsByClassName('out-3');

    for(let i=0; i<out.length; i++) {
        out[i].innerHTML = 3;
    }

}

document.querySelector('.b-3').addEventListener('click', f3);

function f4() {
    let out = document.querySelectorAll('.out-4');

    for(let i=0; i<out.length; i++) {
        out[i].innerHTML = 4;
    }
}

document.querySelector('.b-4').addEventListener('click', f4);

let a5 = [3,4,5,2,1,7,8,2,4,6,8,11,23,17];

function f5() {
    let a = [];

    for(let item of a5) {
        if(item > 7) {
            a.push(item);
        }
    }

    return a;
}

document.querySelector('.b-5').addEventListener('click', ()=> {
    document.querySelector('.out-5').innerHTML = f5();
});

let a6 = [[1,2], [3,4], [5,6]];

function f6() {
    let a = [];
    let out = document.querySelector('.out-6');

    for (let item of a6) {
        for (let elem of item) {
            a.push(elem);
        }
    }

    out.innerHTML = a.join(' ');
}

document.querySelector('.b-6').addEventListener('click', f6);


let a7 = [{ id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f7() {
    let a = {};

    let id = '';
    let name = '';

    for(let i = 0; i < a7.length; i++) {
        for (let key in a7[i]) {
            if(key == 'id') {
                id = a7[i][key];
            }
            if(key == 'name') {
                name = a7[i][key];
            }
            a[id] = name;
        }
    }

    return a;
}


document.querySelector('.b-7').addEventListener('click', ()=>{
    console.log(f7());
});

let a8 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f8() {
    let a = [];

    for(let item of a8) {
        a.push(item.id);
    }

    return a;
}

document.querySelector('.b-8').addEventListener('click', ()=>{
    console.log(f8());
});

let a9 = [ [4,3,2], [2,5], [0,0,0,0,0]];

function f9() {
    let index = 0;

    for(let item of a9) {
        if(item.length-1 > index) {
            index = item.length-1;
        }
    }

    return index;
}

document.querySelector('.b-9').addEventListener('click', ()=>{
    document.querySelector('.out-9').innerHTML = f9();
});

let a10 = [4, 6, 9, 'Hello'];

function f10() {
    let a = {};

    for(let item of a10) {
        a[item] = item;
    }

    return a;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});

let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
}

function f11() {
    let out = '';

    for(let key in a11) {
        if(a11[key] > 10) {
            out += `${a11[key]} `;
        }
    }

    document.querySelector('.out-11').innerHTML = out;
}

document.querySelector('.b-11').addEventListener('click', f11);

let a12 = [4,5,6,7];

function f12() {
    let out = '';

    for(let item of a12) {
        out += `${item} `;
    }

    document.querySelector('.out-12').innerHTML = out;
}

document.querySelector('.b-12').addEventListener('click', f12);

let a13 = 'testone';

function f13() {
    let out = '';

    for(let item of a13) {
        out += `${item} `;
    }

    document.querySelector('.out-13').innerHTML = out;
}

document.querySelector('.b-13').addEventListener('click', f13);

let a14 = new Set([4,5,6]);

function f14() {
    let out = '';

    for(let item of a14) {
        out += `${item} `;
    }

    document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').addEventListener('click', f14);

function f15() {
    let out = document.querySelectorAll('.out-15');

    for(let item of out) {
        item.innerHTML = 15;
    }
}

document.querySelector('.b-15').addEventListener('click', f15);