
// access db
function sum(num1, num2){
    if(null === num1 || null === num2){
        return "Invalid sum by null";
    }
    let result = `El resultado de sumar ${num1} + ${num2}  = ` + (parseFloat(num1) + parseFloat(num2)).toString();
    console.log(result);
    return result;
}

function substract(num1, num2){
    if(null === num1 || null === num2){
        return "Invalid substract by null";
    }
    let result = `El resultado de restar ${num1} - ${num2}  = ` + (parseFloat(num1) - parseFloat(num2)).toString();
    console.log(result);
    return result;
}

function divide(num1, num2){
    if(null === num1 || null === num2){
        return "Invalid division by null";
    }
    if(0 === num2){
        return "Invalid division by zero";
    }
    let result = `El resultado de dividir ${num1} / ${num2}  = ` + (parseFloat(num1) / parseFloat(num2)).toString();
    console.log(result);
    return result;
}

function multiply(num1, num2){
    if(null === num1 || null === num2){
        return "Invalid multiply by null";
    } else{
        let result = `El resultado de multiplicar ${num1} * ${num2}  = ` + (parseFloat(num1) * parseFloat(num2)).toString();
        console.log(result);
        return result;
    }
}

module.exports = {
    sum,
    substract,
    divide,
    multiply
}

// routes -> services -> infrastructure -> db
// routes <- services <- infrastructure <- db