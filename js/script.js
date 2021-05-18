let arr = [4, 7, 9];
let allP = document.getElementsByTagName('p');

console.log(arr);
console.log(allP);

for(let i = 0; i < allP; i++) {
    console.log(allP[i]);
}

for(let key in allP) {
    console.log(allP[key]);
}

for(let item of allP) {
    console.log(item);
}

