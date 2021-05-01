function f1() {
    alert('First task');
}
document.querySelector('.b-1').onclick = f1;

function f2() {
    alert('Second task');}

document.querySelector('.b-2').onclick = f2;

function f3() {
    alert('Third task');
}
document.querySelector('.p-3').onclick = f3;

function f4() {
    let out = document.querySelector('.out-4');

    let value = document.querySelector('.i-4').checked;

    if(value === true) {
        out.innerHTML = true;
    }
    else {
        out.innerHTML = false;
    }
}
document.querySelector('.b-4').onclick = f4;

function f5() {
    let out = document.querySelector('.out-5');

    let check = document.querySelector('.i-5').checked;
    let value = document.querySelector('.i-5').value;

    if(check === true) {
        out.innerHTML = value;
    }
    else {
        out.innerHTML = false;
    }
}
document.querySelector('.b-5').onclick = f5;

function f6() {
    let out = document.querySelector('.out-6');

    let value = document.querySelector('.i-6').value;

    out.innerHTML = value;}
document.querySelector('.b-6').onclick = f6;

function f7() {
    let out1 = document.querySelector('.out-71');
    let out2 = document.querySelector('.out-72');

    let value = document.querySelector('.i-7').value;

    out1.innerHTML = value;

    if(value.length >= 6) {
        out2.innerHTML = 1;
    }
    else {
        out2.innerHTML = 0;
    }


}
document.querySelector('.b-7').onclick = f7;

function f81() {
    let out = document.querySelector('.out-81');

    let value = document.querySelector('.i-81').value;

    out.innerHTML = value;
}
document.querySelector('.b-8').onclick = () => {
    document.querySelector('.out-8').innerHTML =
        "<input type='text' class='i-81'> " +
        "<button class='button-primary b-81'>Task 81</button>" +
        "<div class='out-81'></div>"
    document.querySelector('.b-81').onclick = f81;
}

function f9() {
    let out = document.querySelector('.out-9');

    let check = document.querySelector('.r-9').checked;
    let value = document.querySelector('.r-9').value;

    console.log(check);

    if(check === true) {
        out.innerHTML = value;
    }
    else {
        out.innerHTML = 0;
    }
}
document.querySelector('.b-9').onclick = f9;

function f10() {
    let out = document.querySelector('.out-10');

    let value = document.querySelector('.i-10').value;

    out.style.background = value;
}
document.querySelector('.b-10').onclick = f10;

function f11() {
    let out = document.querySelector('.i-112');
    let value = document.querySelector('.i-111').value;

    out.value = value;
}
document.querySelector('.b-11').onclick = f11;

function f12() {
    let out = document.querySelector('.out-12');

    let date = document.querySelector('.i-12').value;

    out.innerHTML = date;
}
document.querySelector('.b-12').onclick = f12;

function f13() {
    let out = document.querySelector('.out-13');

    let value = document.querySelector('.i-13').value;

    out.innerHTML = value;
}
document.querySelector('.i-13').oninput = f13;

function f14() {
    let out = document.querySelector('.out-14');

    let value = document.querySelector('.t-14').value;

    out.innerHTML = value;}
document.querySelector('.b-14').onclick = f14;

function f15() {
    let out1 = document.querySelector('.out-15');
    let out2 = document.querySelector('.t-15');

    let value = document.querySelector('.i-15').value;

    out1.innerHTML = value;
    out2.value = value;
}
document.querySelector('.b-15').onclick = f15;

function f16() {
    let out = document.querySelector('.out-16');

    let value = document.querySelector('.s-16').value;

    out.innerHTML = value;
}
document.querySelector('.b-16').onclick = f16;

function f17() {
    let out = document.querySelector('.out-17');

    let value = document.querySelector('.s-17').value;

    out.innerHTML = value;
}
document.querySelector('.s-17').onchange = f17;

function f18() {
    let out = document.querySelector('.i-18');

    let value = document.querySelector('.s-18').value;

    out.value = value;
}
document.querySelector('.s-18').onchange = f18;

function f19() {
    let out = document.querySelector('.out-19');

    let name = document.querySelector('.i-191').value;
    let password = document.querySelector('.i-192').value;

    out.innerHTML = name + ' ' + password;
}
document.querySelector('.b-19').onclick = f19;

function f20() {
    let out = document.querySelector('.out-20');

    let form = document.querySelector('.f-20');
    let name = form.elements.item(0).value;
    let password = form.elements.item(1).value;

    out.innerHTML = name + ' ' + password;

}
document.querySelector('.b-20').onclick = (event) => {
    event.preventDefault();
    f20();
};