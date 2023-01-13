//operaciones basicas

function add(x1, x2){//sumar
    return x1 + x2;

}

function substract(x1, x2){//restar
    return x1 - x2;

}

function multiply(x1, x2){//multiplicar
    return x1 * x2;

}

function divide(x1, x2){//dividir
    if(x2 == 0){
        console.log("No se puede dividir por Cero");
    } else {
        return x1 / x2;
    }

}

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide
