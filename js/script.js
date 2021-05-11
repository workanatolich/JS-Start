fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=34104e06802e539cc00d1ab3ac753226')
    .then(function (resp) {return  resp.json()})
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp-273) + '&deg';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.featured li').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

    })
    .catch(function () {
       //catch any errors
    });