const operation_infrastructure = require("../infrastructure/operation_infrastructure");

function sum(num1, num2){
    return operation_infrastructure.sum(num1, num2);
}

function substract(num1, num2){
    return operation_infrastructure.substract(num1, num2);
}

function divide(num1, num2){
    return operation_infrastructure.divide(num1, num2);
}

function multiply(num1, num2){
    return operation_infrastructure.multiply(num1, num2);
}

module.exports = {
    sum,
    substract,
    divide,
    multiply
}

// routes -> services -> infrastructure -> db
// routes <- services <- infrastructure <- db