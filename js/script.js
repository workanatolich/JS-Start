// let div = document.querySelectorAll('.one');
// console.log(div);
//
// for (let i = 0; i < div.length; i++) {
//     div[i].style.background = 'yellow';
//     div[i].onclick = two;
// }
//
// function two () {
//     console.log('Works!');
// }
//
// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);
//
// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '3px solid red';
// }

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);

    for(let i = 0; i < r.length; i++) {
        if(r[i].checked) {
            console.log(r[i].value);
        }
    }
}

let out = '';
for(let i=0; i < 10; i++) {
    if(i == 6) continue;
    if(i == 8) break;
    out += i + ' ';
}
document.querySelector('#out').innerHTML = out;