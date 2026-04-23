
var numero = Math.floor( (Math.random()*100) ); 
// window.alert("seu numero é" + numeros);
console.log(numero);
function verificar(){

    var numeroColocado = document.getElementById("advinhacao").value;



    if (numeroColocado == numero ){
    console.log("");
    document.getElementById("lula").innerHTML="vc esta certo";
    document.getElementById("color").style.setProperty("background-color","green");
} else {
    console.log("errado tente novamente");
    document.getElementById("color").style.setProperty("background-color","red");
}

}


