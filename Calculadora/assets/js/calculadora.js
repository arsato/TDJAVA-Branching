let valor1 = document.getElementById("valor1");
let operacion = document.getElementById("operacion");
let valor2 = document.getElementById("valor2");
let resultado = document.getElementById("resultado");

let valor1Data = prompt("Ingrese el primer valor: ");
let valor2Data = prompt("Ingrese el segundo valor: ")
let operacionData = prompt("Ingrese una operacion: ")

valor1.innerHTML = valor1Data
valor2.innerHTML = valor2Data
operacion.innerHTML = operacionData

let resultadoData = 0;

if(operacionData == "+"){
    resultadoData = +valor1Data + +valor2Data;
} else if(operacionData == "-"){
    resultadoData = +valor1Data - +valor2Data;
} else if(operacionData == "*"){
    resultadoData = +valor1Data * +valor2Data;
} else if (operacionData == "/"){
    resultadoData = +valor1Data / +valor2Data;
}

resultado.innerHTML = resultadoData

