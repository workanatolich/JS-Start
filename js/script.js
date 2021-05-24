let a = 'hello, hi, mahai';
console.log(a.split(','));

let b = [1,2,3];
console.log(b);
console.log(b.join(' '));

b.forEach((elem, index) => {
    console.log(index);
    console.log(elem);
    console.log('----');
})