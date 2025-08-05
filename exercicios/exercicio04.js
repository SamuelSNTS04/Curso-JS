function escrevaMeuNome(nome) {
    console.log('meu nome é ' + nome);
}

escrevaMeuNome('samuel');
escrevaMeuNome('ezequiel');
/********************************************/

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('é maior de idade');
    } else {
        console.log('não é maior de idade');
    }
}

(function () {
    const idade = 18;
    const maioridade = verificarIdade(idade);
})();

/********************************************/

function escolhaDePagamento(valorDoProduto,formaDePagamento) {
    if (formaDePagamento === 'debito') {
        valorDoProduto -= 0.1 * valorDoProduto;
        console.log('valor: ', valorDoProduto);
    } else if (formaDePagamento === 'dinheiro ou pix') {
        valorDoProduto -= 0.15 * valorDoProduto;
        console.log('valor: ', valorDoProduto);
    } else if (formaDePagamento === 'dividido em mais de duas vezes') {
        valorDoProduto += 0.1 * valorDoProduto;
        console.log('valor: ', valorDoProduto);
    } else {
        console.log('valor:', valorDoProduto);
    }
}

(function () {
    let valorDoProduto = 300.00;
    const formaDePagamento = escolhaDePagamento(valorDoProduto,'dividido em mais de duas vezes');
})();
