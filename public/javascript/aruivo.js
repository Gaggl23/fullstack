function DarAlerta(texto) {
    var texticulo = document.getElementById("texticulo").value;
    window.alert("seu amigo da vizinhanca " + texticulo);
    document.body.style.backgroundColor = "yellow"; 
}


DarAlerta("ja");


console.log("esta msg esta escondida");

var entrada = prompt("entre com a sua idade:");

console.log(entrada);

entrada = parseInt(entrada);

if (entrada >= 18){
    console.log("vc é maior de id");
    document.getElementById("testeID").innerHTML="vc é de maior";
    document.getElementById("bodynho").style.setProperty("background-color","red");
}else if (entrada < 18){
    console.log("vc é de menor");
} else {
    console.log("invalido");
}


