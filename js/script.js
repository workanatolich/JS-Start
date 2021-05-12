let a = new Set();

a.add(1);
a.add(2);
a.add('Hello');
a.add(1);

console.log(a);
console.log(a[0]);
console.log(a.size);

for (let item of a) {
    console.log(item);
}

let arr = [1,2,3,4,5,5,'hello', 34,2,5,6];

let b = new Set(arr);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);