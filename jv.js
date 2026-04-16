let canvas  = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


var retangulo1 = {
    x:50,
    y:50,
    largura:50,
    altura:10,
    cor:'blue',
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }

}

retangulo1.desenha();

var retangulo2 = {
    x:150,
    y:200,
    largura:100,
    altura:10,
    cor:'red',
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }

}
retangulo2.desenha();

let circulo = {
    x: 100,
    y: 200,
    raio: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}

let circulo2={
    x: 300,
    y: 200,
    raio: 50,
    cor: "yellow",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
}
}

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'download.jfif';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2*this.raio , 2*this.raio);
        ctx.closePath();
    }
}

let altura1 =1;
let direcao = 1;
function animar(){
    ctx.clearRect(0,0,400,400);
    if (retangulo1.x == 350){
        direcao = -1
    }
    if ( retangulo1.x == 0){
        direcao = 1
    }
    if (retangulo2.altura == 400){
        altura1 = -1
    }
    if ( retangulo2.altura == 0){
        altura1= 1
    }

    retangulo1.x= retangulo1.x + direcao;
    retangulo2.altura += altura1;
    retangulo2.y -= altura1 / 2;
    retangulo1.desenha();
    retangulo2.desenha();
    circulo.desenha();
    circulo2.desenha();
    requestAnimationFrame(animar);

}

animar();



function animacao(){
    ctx.clearRect(0,0,400,400)
    circulo.desenha();
    circulo2.desenha();
    retangulo1.desenha();
    retangulo2.desenha();
    bola.desenha();
    requestAnimationFrame(animacao)
}
animacao();

document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {circulo.y = circulo.y-5}  
    if(tecla == 'ArrowDown') {circulo.y = circulo.y+5}  
    if(tecla == 'ArrowLeft') {circulo.x = circulo.x-5}  
    if(tecla == 'ArrowRight'){circulo.x = circulo.x+5}  
    if(tecla == 'w')   {circulo2.y = circulo2.y-5}  
    if(tecla == 's') {circulo2.y = circulo2.y+5}  
    if(tecla == 'a') {circulo2.x = circulo2.x-5}  
    if(tecla == 'd'){circulo2.x = circulo2.x+5}  
})

document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);

    if (x_mouse > 0 + bola.raio && x_mouse<400 - bola.raio && 
        y_mouse > 0 + bola.raio && y_mouse<400 - bola.raio){
    bola.x = x_mouse;
    bola.y = y_mouse;
        }

    else{
        bola.x = bola.x
        bola.y = bola.y
    }
})




