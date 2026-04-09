let canvas  = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(0,300,400,100);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.arc(300,100,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(150,200,100,100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'cyan';
ctx.fillRect(210,220,30,30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'cyan';
ctx.fillRect(160,220,30,30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#5d4037';
ctx.fillRect(190,250,20,50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'orange';
ctx.moveTo(200,150);
ctx.lineTo(250,200);
ctx.lineTo(150,200);
ctx.lineTo(200,150);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#5d4037';
ctx.fillRect(60,250,20,50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#5d4037';
ctx.fillRect(320,320,20,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(70,250,30,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.arc(330,310,30,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#4169E1';
ctx.fillRect(0,300,50,100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#4169E1';
ctx.fillRect(50,360,100,40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#4169E1';
ctx.arc(0,300,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#4169E1';
ctx.arc(150,410,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();
