let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'red';
ctx.arc(300,100,40,0 * Math.PI, 2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.fillRect (0,250,500,200);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.fillRect(150,140,100,110);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'cyan';
ctx.fillRect(160,170,30,30);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'cyan';
ctx.fillRect(210,170,30,30);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#5d4037';
ctx.fillRect(190,200,20,50);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'orange';
ctx.moveTo(130, 145);  // base esquerda (um pouco além da casa)
ctx.lineTo(270, 145);  // base direita
ctx.lineTo(200, 85);   // pico centralizado (x=200 = 150 + 100/2)
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(70,170,30,80);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#1e90ff';
ctx.arc(0,240,45,1.5 * Math.PI, 0.5 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#1e90ff';
ctx.fillRect(0,240,45,160);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#1e90ff';
ctx.fillRect(0,350,150,50)
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#1e90ff';
ctx.arc(150,380,30,0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(85,150,40,0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(320,270,30,80);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(335,270,40,0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.closePath();