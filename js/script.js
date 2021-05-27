document.querySelector('.i-1').onkeydown = function (event) {
    console.log('keydown');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);

    //console.log(event);
}

document.querySelector('.i-1').onkeypress = function (event) {
    console.log('keypress');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);

    //console.log(event);
}

document.querySelector('.i-1').onkeyup = function (event) {
    console.log('keyup');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);

    //console.log(event);
}
