<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css"
    <title>Lesson 9</title>
</head>
<body>
        <div class="container">
            <h1 class="text-center">Introduction to DOM</h1>

            <button class="toggle">Toggle</button>
            <p class="one" data="privet">Test</p>

            <section>
                <p>Выберите тип бензина:</p>
                <div class="form-control">
                    Количество литров
                    <label><input type="number" class="litres"></label>
                </div>

                <button class="gas" data="1.2">А 92</button>
                <button class="gas" data="1.6">А 95</button>
                <button class="gas" data="1.9">А 98</button>

            </section>

            <div class="test"></div>

        </div>
    <script src="js/script.js"></script>
</body>
</html>