'use strict';

let verificar_id = (txt) => {
    
    if (txt.charAt(0) != '3') {
        throw "La c�dula juridica dede comenzar con 3";
    }
    if (txt.length != 10) {
        throw "La c�dula debe tener una longitud de 10 numeros";
    }
};

let campo_requerido = (txt) => {

    if (txt.length == 0) {
        throw "Campo requerido";
    }
}