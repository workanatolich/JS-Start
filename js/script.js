function f1() {
    let a1 = {
        "one" : 15,
        "two" : 16,
        "five" : 20
    };

    return a1.two;
}
document.querySelector('.b-1').onclick = () => {
    document.querySelector('.out-1').innerHTML = f1();
};

function f2() {
    let a2 = {
        "one" : "hello",
        "two" : "mahai",
        "five" : "hi"
    };

    return a2.five;
}
document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').innerHTML = f2();
};

function f3() {
    let a3 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };

    let out = '';
    for(let key in a3) {
        if(a3[key] === 'hi') {
            out += 'hi' + ' ';
        }
    }

    return out;
}
document.querySelector('.b-3').onclick = () => {
    document.querySelector('.out-3').innerHTML = f3();
}

function f4() {
    let a4 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };

    let out = '';
    for(let key in a4) {
        out += `${key} ${a4[key]} <br>`;
    }

    return out;
}
document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
}

function f5(array, block) {
    let a = array;
    let out = '';

    for(let key in a) {
        out += `${key} ${a[key]} <br>`;
    }

    document.querySelector(block).innerHTML = out;
}
document.querySelector('.b-5').onclick = () => {
    let a = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
    };

    f5(a, '.out-5');



}

function f6() {
    let a6 = {
        "b": 17,
        "e": 22
    };

    let key = document.querySelector('.i-61').value;
    let value = document.querySelector('.i-62').value;

    a6[key] = value;

    f5(a6, '.out-6');
}
document.querySelector('.b-6').onclick = f6;

function f7() {
    let a7 = {
        "b": 17,
        "e": 22
    };

    let out = document.querySelector('.out-7');
    let key = document.querySelector('.i-7').value;

    if(a7[key]) {
        out.innerHTML = 1;
    }
    else out.innerHTML = 0;
}
document.querySelector('.b-7').onclick = f7;

function f8() {
    let a8 = {
        "b": 17,
        "e": 22
    };

    let out = document.querySelector('.out-8');
    let key = document.querySelector('.i-8').value;

    if(a8[key]) {
        out.innerHTML = a8[key];
    }
    else out.innerHTML = 0;
}
document.querySelector('.b-8').onclick = f8;

function f9() {
    let a9 = {
        "b": 17,
        "e": 22,
        "j": 17,
        "k": 22,
        "d": 54
    };

    let out = '';
    let value = document.querySelector('.i-9').value;

    for (let key in a9) {
        if(a9[key] == value) {
            out += key + ' ';
        }
        else {
            out += ' ';
        }
    }

    document.querySelector('.out-9').innerHTML = out;
}
document.querySelector('.b-9').onclick = f9;

function f10(arr, val) {
    for (let key in arr) {
        if(arr[key] == val) {
            return true;
        }
        else return false;
    }
}
document.querySelector('.b-10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }
    document.querySelector('.out-10').innerHTML = f10(a10, 22);
};

function f11() {
    let a11 = {
        "b": 17,
        "e": 22,
        "j": 17,
        "k": 22,
        "d": 54
    };

    let key = document.querySelector('.i-11').value;

    delete a11[key];

    f5(a11, '.out-11');

}

document.querySelector('.b-11').onclick = f11;

function f12() {
    let a12 = {
        "b": 17,
        "e": 22,
        "j": 17,
        "k": 22,
        "d": 17,
    };

    let value = document.querySelector('.i-12').value;

    for (let key in a12) {
        if (a12[key] == value) {
            delete a12[key];
        }
    }

    f5(a12, '.out-12');
}

document.querySelector('.b-12').onclick = f12;


function f13() {
    let a13 = {
        'prim': 'hello',
        'one': 4,
        'testt': 'vodoley',
        'ivan': 6,
    };

    let sum = '';

    for (let key in a13) {
        if (typeof (a13[key]) == "number") {
            sum += a13[key];
            sum = Number(sum);
        }
    }

    document.querySelector('.out-13').innerHTML = sum;
}

document.querySelector('.b-13').onclick = f13;

function f14() {
    let a14 = {
        'prim': [1, 2, 23],
        'one': [3, 4, 5],
        'testt': [6, 7, 8],
        'ivan': [9, 10]
    };

    let out = '';

    for (let key in a14) {
        out += a14[key][0] + ' ';
    }

    document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').onclick = f14;

function f15() {
    let a15 = {
        'prim': [1, 2, 23],
        'one': [3, 4, 5],
        'testt': [6, 7, 8],
        'ivan': [9, 10]
    };

    let out = '';

    for (let key in a15) {
        for(let i = 0; i < a15[key].length; i++) {
            out += a15[key][i] + ' ';
        }
        out += '<br>';
    }

    document.querySelector('.out-15').innerHTML = out;
}

document.querySelector('.b-15').onclick = f15;

function f16() {
    let a16 = {
        "iis8sj": {
            "name": "Ivan",
            "age": 27,
        },
        "iiss7j": {
            "name": "Petr",
            "age": 26,
        },
        "s3s8sj": {
            "name": "Serg",
            "age": 47,
        },
    }

    let out = '';

    for (let key in a16) {
        for(let dkey in a16[key]) {
            if (dkey == "name") {
                out += a16[key][dkey] + ' ';
            }
        }
    }

    document.querySelector('.out-16').innerHTML = out;
}

document.querySelector('.b-16').onclick = f16;

function f17() {
    let a17 = {
        "iis8sj": {
            "name": "Ivan",
            "age": 27,
        },
        "iiss7j": {
            "name": "Petr",
            "age": 26,
        },
        "s3s8sj": {
            "name": "Serg",
            "age": 47,
        },
    }

    let out = '';

    for (let key in a17) {
        for(let dkey in a17[key]) {
            if (dkey == "age" && a17[key][dkey] > 30) {
                out += a17[key]['name'] + ' ';
            }
        }
    }

    document.querySelector('.out-17').innerHTML = out;
}

document.querySelector('.b-17').onclick = f17;


function f18() {
    let a18 = {
        "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
        "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
        "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
    }

    let out = '';
    let name = document.querySelector('.i-18').value;

    for (let key in a18) {
        if (key == name) {
            for (let i = 0; i < a18[key].length; i++) {
                out += a18[key][i] + ' ';
            }
        }

    }

    document.querySelector('.out-18').innerHTML = out;
}

document.querySelector('.b-18').onclick = f18;

function f19() {

    let a19 = {
        "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
        "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
        "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
    }
    let out = '';


    let name = document.querySelector('.i-19').value;

    for (let key in a19) {
        for (let i = 0; i < a19[key].length; i++) {
            if(a19[key][i].toLowerCase() == name.toLowerCase()) {
                out = key;
            }
        }
    }

    document.querySelector('.out-19').innerHTML = out;

}

document.querySelector('.b-19').onclick = f19;

function f20() {

    let a20 = {
        "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
        "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
        "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
    }

    let out = '';

    for(let key in a20) {
        for (let i = 0; i < a20[key].length; i++) {
            if(a20[key][i][1] === 2) {
                out += a20[key][i][0] + ' ';
            }
        }
    }

    document.querySelector('.out-20').innerHTML = out;

}

document.querySelector('.b-20').onclick = f20;




