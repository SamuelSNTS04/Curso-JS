const { get, print } = require("../aulas/funcoes-auxiliares");

let maiorValor = 0.0;

for(let i=0; i<5; i++){
    const numeroSorteado = get();
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);