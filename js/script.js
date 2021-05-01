let f1 = document.querySelector('.f-1');

function one() {
    console.log("It's work");
}

one();

f1.onclick = one;

console.log(1+one()); // NaN
console.log(one()); // underfined

function two() {
    console.log('work 1111');
    return 54;
}

console.log(1+two());

let a = 8;
let b = 9;

function multi() {
    console.log(a*b);
    return a * b;
}

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);

function multi2(x,y) {
    return x * y;
}

console.log(multi2(4,5));

document.querySelector('.f-2').onclick = () => {
    console.log ('*****');
}

document.querySelector('.f-2').onclick = function() {
    console.log ('123*****');
}
