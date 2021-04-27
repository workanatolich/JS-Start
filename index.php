<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css"
    <title>Lesson 3</title>
</head>
<body>
        <div class="container">
            <h1 class="text-center">Working with forms</h1>

            <section>
                <div class="form-action">
                    <input type="range" id="one" min="0" max="200">
                </div>
                <button class="btn-1">Push</button>
                <span>100</span>
            </section>

            <section>
                <div class="form-action">
                    <input type="checkbox" id="two"><label for="two">Click on me</label>
                </div>
                <button class="btn-2">Push 2</button>
                <div class="out-2"></div>
            </section>

            <section>
                <form action="">
                    <input type="text" id="three" name="n1">
                    <textarea id="four" cols="30" rows="10"></textarea>
                    <button class="btn-3">Push 3</button>
                </form>
            </section>
        </div>

    <script src="js/script.js"></script>
</body>
</html>