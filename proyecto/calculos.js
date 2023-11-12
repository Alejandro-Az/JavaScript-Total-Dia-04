/* Operaciones */
function suma() {    
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    let response = +numberOne + +numberTwo;
    mostrarResultado(response);
}

function resta() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    let response = +numberOne - +numberTwo;
    mostrarResultado(response);
}

function multiplicacion() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    let response = +numberOne * +numberTwo;
    mostrarResultado(response);
}

function division() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    let response = +numberOne / +numberTwo;
    mostrarResultado(response);
}

/* Funciones */

function power() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    let response = Math.pow(numberOne, numberTwo);
    mostrarResultado(response);
}

function root() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    let resultado = +numberOne + +numberTwo;
    let response = Math.sqrt(resultado);
    mostrarResultado(response);
}

function absolute() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    let resultado = +numberOne - +numberTwo;
    let response = Math.abs(resultado);
    mostrarResultado(response);
}

function rand() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    let response = Math.floor(Math.random() * (+numberTwo - +numberOne) + +numberOne);
    mostrarResultado(response);
}

/* Tipos de redondeo */

function redondear() {
    let redondea = document.getElementById("response");
    let response = Math.round(redondea.value);
    redondea.value = response;
}

function piso() {
    let redondea = document.getElementById("response");
    let response = Math.floor(redondea.value);
    redondea.value = response;
}

function techo() {
    let redondea = document.getElementById("response");
    let response = Math.ceil(redondea.value);
    redondea.value = response;
}

/* Imprimir resultado */

function mostrarResultado(operationResult) {
    let response = document.getElementById("response");
    response.value = operationResult;
}