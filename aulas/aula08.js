// First Class functions
// Higher Order functions


//function declaration - sofre o hoisting
function nomeDaFuncao() {
    console.log('nomeDaFuncao');
}

//function expression - não sofre o hoisting
const nomeDeOutraFuncao = function () {
    console.log('nomeDeOutraFuncao');
}

nomeDaFuncao();
nomeDeOutraFuncao();
