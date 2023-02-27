var valorMenor = 1;
var valorMayor = 10;

const numeroSecreto = numeroAleatoria();

function numeroAleatoria(){
    return parseInt(Math.random() * valorMayor + 1);
}
console.log("El numero dado por ramdom es:", numeroSecreto);
const valor_dado = document.getElementById("numero");

var contenido =valor_dado.innerHTML;
console.log("El numero dado es:" + contenido);

const elementoMayorValor = document.getElementById("valor-mayor");
elementoMayorValor.innerHTML = valorMayor;

const elementoMenorValor = document.getElementById("valor-menor");
elementoMenorValor.innerHTML = valorMenor;

var mensaje = document.getElementById("que")
if(numeroSecreto == contenido){
    mensaje.innerText = "Igual acertado!!!"
    document.querySelector("body").style.background = "red"
}else if (numeroSecreto < contenido){
    mensaje.innerText = "Menor"
}
else{
    mensaje.innerText = "Mayor"
}
