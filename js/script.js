let s1 = new Set();

s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h');

console.log(s1);

let s2 = new Set();

const f2 = () => {

    let value = document.querySelector('.i-2').value;

    s2.add(value);

    console.log(s2);
}

document.querySelector('.b-2').onclick = f2;



let s3 = new Set(['one', 'two', 'three']);

const f3 = () => {
    let value = document.querySelector('.i-3').value;

    s3.delete(value);

    console.log(s3);
}

document.querySelector('.b-3').onclick = f3;



let s4 = new Set(['a','b','c','z']);

const f4 = () => {
    let out = document.querySelector('.out-4');

    let value = document.querySelector('.i-4').value;

    out.innerHTML = s4.has(value);
}

document.querySelector('.b-4').onclick = f4;



let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => {
    let out = document.querySelector('.out-5');

    out.innerHTML = s5.size;
}

document.querySelector('.b-5').onclick = f5;



let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5,
          2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1,
          1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

const f6 = () => {
    let out = document.querySelector('.out-6');

    let s6 = new Set(a6);

    out.innerHTML = s6.size;
}

document.querySelector('.b-6').onclick = f6;



const f7 = () => {
    let out = document.querySelector('.out-7');

    let pass = document.querySelector('.i-7').value;
    let s7 = new Set(pass.split(''));

    if(s7.size>6) {
        out.innerHTML = 1;
    }
    else {
        out.innerHTML = 0;
    }
}

document.querySelector('.b-7').onclick = f7;



let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5,
                        7, 8, 9, 23, 45, 5, 2, 4, 5, 3,
                        24, 5, 2, 4, 56, 4, 3, 2, 335, 2,
                        23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5,
                        24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => {
    for (let item of s8) {
        if(item > 5) {
            ar8.push(item);
        }
    }

    console.log(ar8);
}

document.querySelector('.b-8').onclick = f8;



const f9 = (our_set) => {
    let str = '';

    for(let item of our_set) {
        str += `${item} `;
    }

    return str;
}

document.querySelector('.b-9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    document.querySelector('.out-9').innerHTML = f9(s9);
}



const f10 = (our_set, elem) => {
    let str = '';

    for(let item of our_set) {
        str += `${item} `;
    }

    document.querySelector(elem).innerHTML = str;
}

document.querySelector('.b-10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};



const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
}

document.querySelector('.b-11').onclick = f11;




let str12 = 'The name conjures up visions of plum pudding and ' +
            'Christmas punch quaint coaching inns and cozy firesides ' +
            'but also of orphaned and starving children';

const f12 = () => {
    let ar12 = str12.split('');
    return new Set(ar12);
}

document.querySelector('.b-12').onclick = () => {
    console.log(f12());
}



let str13 = 'The name conjures up visions of plum pudding and Christmas ' +
            'punch quaint coaching inns and cozy firesides but also of ' +
            'orphaned and starving children';


const f13 = () => {
    let ar = str13.split('');
    let s = new Set(ar);
    let obj = {};

    for(let item of s) {
        let count = 0;
        for(let i = 0; i < ar.length; i++) {
            if(item === ar[i]) {
                count++;
                obj[item] = count;
            }
        }
    }

    return obj;
}

document.querySelector('.b-13').onclick = () => {
    console.log(f13());
}