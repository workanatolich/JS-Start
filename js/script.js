let a = [4, 5, 2000, 1, 0, -2];

let b = a.map(item => item * 5);

let c = a.filter((item,index) => {
    if (item % 2 === 0) {
        return true;
    }
})

console.log(c);