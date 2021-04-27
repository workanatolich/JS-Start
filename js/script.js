document.querySelector('.btn-1').onclick = () => {
    console.log(document.querySelector('#one').value);
}

document.querySelector('#one').oninput = () => {
    console.log(document.querySelector('#one').value);
    document.querySelector('span').innerHTML = document.querySelector('#one').value;
}

document.querySelector('.btn-2').onclick = () => {
    console.log(document.querySelector('#two').checked);

    let out = document.querySelector('.out-2');
    let check = document.querySelector('#two').checked;
    if (check == true) {
        out.innerHTML = 'Нажата';
    }
    else {
        out.innerHTML = 'Не нажата';
    }
}

document.querySelector('.btn-3').onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('form');

    console.log(form);
    console.log(form.elements.three.value);
    console.log(form.elements.four.value);

}