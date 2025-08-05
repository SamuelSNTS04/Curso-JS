let valorDoProduto = 300.00;
const formaDePagamento = 'dividido em duas vezes';

if(formaDePagamento === 'debito'){
    valorDoProduto -= 0.1 * valorDoProduto;
    console.log('valor: ',valorDoProduto);
} else if (formaDePagamento === 'dinheiro ou pix'){
    valorDoProduto -= 0.15 * valorDoProduto;
    console.log('valor: ',valorDoProduto);
} else if(formaDePagamento === 'dividido em mais de duas vezes'){
    valorDoProduto += 0.1 * valorDoProduto;
    console.log('valor: ',valorDoProduto);
}else {
    console.log('valor:', valorDoProduto);
}