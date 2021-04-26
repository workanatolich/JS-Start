const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;

    if (num >= 16 && num <=60) {
        console.log('Welcome');
    }
    else if (num > 60) {
        console.log('Уверен?');
    }
    else {
        console.log("У тебя нет доступа");
    }

    switch (num) {
        case 15:
            console.log('Еще один год потерпи');
            break;
        case 16:
            console.log('Ура. Заходи');
            break;
        default:
            console.log('У тебя нет доступа');
    }
}