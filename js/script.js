function t1() {
    let text = document.querySelector('.div-1').textContent;
    document.querySelector('.out-1').innerHTML = text;
}

document.querySelector('.div-1').onclick = t1;

function t2(event) {
    document.querySelector('.out-2').innerHTML = event.altKey;
}

document.querySelector('.div-2').onclick = t2;

let w = 75;
function t3() {
    w+=5;
    this.style.width = w + 'px';

    document.querySelector('.out-3').innerHTML = w + 'px';
}

document.querySelector('.div-3').onclick = t3;

function t4() {
    let text = document.querySelector('.div-4').textContent;
    document.querySelector('.out-4').innerHTML = text;
}

document.querySelector('.div-4').ondblclick = t4;

function t5() {
    let classList = document.querySelector('.div-5').classList;
    if(classList.contains('active')) {
        classList.remove('active');
    } else {
        classList.add('active');
    }

}

document.querySelector('.div-5').ondblclick = t5;

function t6() {
    let classList = document.querySelector('.ul-6').classList;
    if(classList.contains('hide')) {
        classList.remove('hide');
    } else {
        classList.add('hide');
    }

}

document.querySelector('.div-6').ondblclick = t6;

function t7() {
    let classList = this.classList;
    if(!(classList.contains('active'))) {
        classList.add('active');
    } else {
        classList.remove('active');
    }

}

document.querySelector('.div-7').oncontextmenu = t7;

function t8() {
    let classList = this.classList;

    classList.toggle('contextMenu');

    if(classList.contains('contextMenu')) {
        this.oncontextmenu = () => {
            return true;
        }
    }
    else {
        this.oncontextmenu = () => {
            return false;
        }
    }

}

document.querySelector('.ch-8').onchange = t8;

function t9() {
    let img = document.querySelector('.div-9 img');
    img.setAttribute('src', 'img/2.png');
}

document.querySelector('.div-9').oncontextmenu = t9;

function t10() {
    let img = document.querySelector('.div-10 img');
    img.setAttribute('src', 'img/2.png');
}

document.querySelector('.div-10').onmouseenter = t10;

function t11() {
    let img = document.querySelector('.div-11 img');
    if(event.type == 'mouseenter') {
        img.setAttribute('src','img/2.png');
    } else {
        img.setAttribute('src', 'img/1.png');
    }
}

document.querySelector('.div-11').onmouseenter = t11;
document.querySelector('.div-11').onmouseleave = t11;

function t12() {
    this.classList.add('active');
}

document.querySelector('.div-12').onmousedown = t12;

function t13() {
    if(event.type == 'mousedown') {
        this.classList.add('active');
    } else {
        this.classList.remove('active');
    }
}

document.querySelector('.div-13').onmousedown = t13;
document.querySelector('.div-13').onmouseup = t13;

function t14() {
    document.querySelector('.div-14').classList.add('active');
}

document.querySelector('.b-14').onclick = t14;

function t15() {
    this.textContent ++;
}

document.querySelector('.div-15').onmousemove = t15;

let widthDiv16 = 75;
function t16() {
    widthDiv16++;
    this.style.width = widthDiv16 + 'px';
}

document.querySelector('.div-16').onmousemove = t16;

function t17On() {
    document.querySelector('.div-16').onmousemove = t16;
}

document.querySelector('.b-17_on').onclick = t17On;

function t17Off() {
    document.querySelector('.div-16').onmousemove = false;
}

document.querySelector('.b-17_off').onclick = t17Off;

function t18() {
    this.textContent = getComputedStyle(this).width;
}

document.querySelector('.div-18').onmouseenter = t18;

function t19() {
    this.textContent = this.classList;
}

document.querySelector('.div-19').onmouseout = t19;

function t20() {
    this.value++;
}

document.querySelector('progress').onmousemove = t20;








