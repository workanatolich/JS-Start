let a1_res = [],
    a2_res = [],
    a3_res = [],
    a4_res = [],
    b5_res = [],
    b6_res = [],
    b7_res = [],
    b8_res = [],
    b9_num = [],
    b9_string = [],
    b10_res;


let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function t1() {
    a1_res = a1.map(elem => elem*2);
    return a1_res;
}

document.querySelector('.b-1').onclick = () => {
     console.log(t1());
}


let a2 = [2,3,4,5,10,11,12];

function t2() {
    a2_res = a2.map(elem => elem*elem);
    return a2_res;
}

document.querySelector('.b-2').onclick = () => {
    console.log(t2());
}


let a3 = [4,"3",6,7,"12",34,"56",78,90,11];

function t3() {
    a3_res = a3.map(elem => Number(elem));
    return a3_res;
}

document.querySelector('.b-3').onclick = () => {
    console.log(t3());
}


let a4 = [4,"3",6,7,"12",34,"56",78,90,11];

function t4() {
    a4_res = a4.filter( (elem) => {
        if(typeof(elem) == 'number') {
            return elem;
        }
    })
    return a4_res;
}

document.querySelector('.b-4').onclick = () => {
    console.log(t4());
}



let b1 = [3, 14, 15, 92];

function t5() {
    b5_res = b1.filter( (elem) => {
        if(elem % 2 === 0) {
            return true;
        }
    })
    return b5_res;
}

document.querySelector('.b-5').onclick = () => {
    console.log(t5());
}


let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t6() {
    b6_res = b6.filter( (elem) => {
        if(typeof(elem) == 'number') {
            return true;
        }
    })

    return b6_res;
}

document.querySelector('.b-6').onclick = () => {
    console.log(t6());
}


let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];

function t7() {
    b7_res = b7.filter( (elem) => {
        if(elem.length > 3) {
            return true;
        }
    })

    return b7_res;
}

document.querySelector('.b-7').onclick = () => {
    console.log(t7());
}


let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t8() {
    b8.filter((elem, index) => {
        if(elem % 2 == 0 && typeof(elem) == 'number') {
            b8_res.push(index);
        }
    })
    return b8_res;
}

document.querySelector('.b-8').onclick = () => {
    console.log(t8());
}


let b9 = [3, "hello", 4, "world", 5, "hi"];

function t9() {
    b9_num = b9.filter(elem => typeof(elem) == 'number');
    b9_string = b9.filter(elem => typeof(elem) == 'string');
    return [b9_num, b9_string];
}

document.querySelector('.b-9').onclick = () => {
    console.log(t9());
}


let b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]

function t10() {
    b10_res = b10.filter((elem) => {
        for(let i=0; i<elem.length; i++) {
            if(elem[i] === 3) {
                return true;
            }
        }
    })

    return b10_res;

}

document.querySelector('.b-10').onclick = () => {
    console.log(t10());
}