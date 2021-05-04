const a = [1,2,3,4,5,6,7,8,9];
const b = ['a','b','c','d','e','f'];

console.log(a.length);
console.log(a.push(10,12,13,14,15,16));
console.log(a);

b.push('j','e');
console.log(b);

console.log(b.pop());
console.log(b.pop());
console.log(b);

delete a[3];
console.log(a);

a.splice(3,4);
console.log(a);