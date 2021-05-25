document.querySelector('.one').onclick = function (event) {
    console.log(event);
    console.log('click');
}

document.querySelector('.two').ondblclick = () => {
    console.log('double click');
}

document.querySelector('.two').oncontextmenu = () => {
    console.log('right bottom');
    return false;
}

// let w = 75;
// document.querySelector('.three').onmousemove = () => {
//     document.querySelector('.three').style.width = w + 'px';
//     w++;
// }

document.querySelector('.three').onmouseenter = () => {
    document.querySelector('.three').style.background = 'blue';
}

document.querySelector('.three').onmouseleave = () => {
    document.querySelector('.three').style.background = 'blueviolet';
}

document.querySelector('.three').onmousedown = () => {
    document.querySelector('.three').style.background = 'red';
}

document.querySelector('.three').onmouseup = () => {
    document.querySelector('.three').style.background = 'green';
}

let p = 10;
document.querySelector('button').onclick = () => {
    p++;
    document.querySelector('progress').value = p;
}





