let a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let out = '';
for(let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (a[i][k] % 2 === 0) {
            out += a[i][k] + ' ';
        }
    }
    console.log(out);
}
console.log(out);
document.querySelector('.out-1').innerHTML = out;