const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '50px';

// console.log(one.style);

one.classList.add('two', 'three');
one.classList.remove('three', 'two');

const toggle = document.querySelector('.toggle');
toggle.onclick = function () {
    this.classList.toggle('three');
}

console.log(one.getAttribute('data'));

one.setAttribute('date-num', 6);

let gas = document.querySelectorAll('.gas');
for(let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let litres = document.querySelector('.litres').value;
        let amount = this.getAttribute('data');
        console.log(litres*amount);
    }
}

let a = document.createElement('div');
a.innerHTML = 'Hello!';
a.classList.add('one');

document.querySelector('.test').appendChild(a);