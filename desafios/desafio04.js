const { get, print } = require('../aulas/funcoes-auxiliares');

const qntdNumeros = get();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < qntdNumeros; i++) {
    const numeros = get();
    if (numeros % 2 === 0) {
        if (maiorPar === null || numeros > maiorPar) {
            maiorPar = numeros;
        }
    } else {
        if (menorImpar === null || numeros < menorImpar) {
            menorImpar = numeros;
        }
    }
}

print(maiorPar);
print(menorImpar);