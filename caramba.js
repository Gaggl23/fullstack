let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');




ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 40, 35);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(260, 0, 40, 35);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(0, 240, 40, 80);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(20, 270, 60, 80);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(260, 240, 40, 80);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(220, 270, 70, 60);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "cyan";
ctx.fillRect(0, 100, 40, 60);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "cyan";
ctx.fillRect(260, 110, 40, 40);
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(110, 130, 40, 40);
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0, 130);
ctx.lineTo(300, 130);
ctx.strokeStyle = "green";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(150, 130);
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(150, 130);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150, 130);
ctx.lineTo(150, 280);
ctx.strokeStyle = "grey";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'cyan';
ctx.strokeStyle = 'gren';
ctx.arc(150,300,30,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'cyan';
ctx.strokeStyle = 'blue';
ctx.arc(150,100,10,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,130,50,1*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,130,80,1*Math.PI,1.225*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,130,80,1.77*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,300,50,1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(150,300,60,1.5*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(80,200,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(220,200,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Canvas", 120, 40);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, 300, 300);
ctx.closePath();
