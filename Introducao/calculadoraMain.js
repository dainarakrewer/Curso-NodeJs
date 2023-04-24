let calculadora = require('./calculadora')

function sub(a, b) {
    return a - b
}

function div(a, b) {
    return a / b
}

console.log(calculadora.soma(10,20))

let resultadoMult = calculadora.mult(10, 5)
console.log(resultadoMult)

let resultadoSub = sub(50, 25)
console.log(resultadoSub)

console.log(div(10,20))