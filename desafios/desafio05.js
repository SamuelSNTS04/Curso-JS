const { get, print } = require('../aulas/funcoes-auxiliares');

const valorSalario = get();
const valorAdicional = get();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function percentComBaseNoSalario(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = percentComBaseNoSalario(valorSalario);
const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);

const valorTotal = valorSalario - valorImposto + valorAdicional;
print(valorTotal);
