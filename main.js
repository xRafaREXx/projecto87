canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Usa la función beginPath() para empezar un path.
    Luega, usa strokeStyle para establecer el color a "grey".
    Usa lineWidth para establecer el ancho a 1.
    Usa rect() para crear un rectángulo en 150 y 143
con un ancho de 430 y una altura de 200.
*/

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

/*
    Usa la función beginPath() para empezar un path.
    Luega, usa strokeStyle para establecer el color a "blue".
    Usa lineWidth para establecer el ancho a 5.
    Usa arc() para crear un círculo en x = 150, y = 143
con un radio de 40, un startAngle de 0 y un endAngle de 2 * Math.PI.
*/

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// De igual forma, crea un círculo negro en la posición 350 y 210

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(x = 350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// De igual forma, crea un círculo rojo en la posición 210 y 40

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// De igual forma, crea un círculo naranja en la posición 300 y 250

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

// De igual forma, crea un círculo verde en la posición 400 y 250

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();