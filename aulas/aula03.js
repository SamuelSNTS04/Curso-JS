function quadrado(valor) {
    return Math.pow(valor, 2);
}

console.log(quadrado(10));

function incrementarJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));

/*******************************************************/
function calcularJuros() {

}


function main() {
    console.log('programa principal');
    calcularJuros();
}
/*******************************************************/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'obeso';
    } else {
        return 'obesidade grave';
    }
}

(function () {
    const peso = 54.6;
    const altura = 1.71;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

