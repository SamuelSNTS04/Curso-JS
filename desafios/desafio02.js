const precoGasolina = 6.59;
const precoEtanol = 4.49;
const gastoMedioPorKm = 10;
const distancia = 100;
const tipoCombustivel = 'gasolina';
let valorGastoNaViagem = (distancia/gastoMedioPorKm);

if (tipoCombustivel === 'etanol') {
    valorGastoNaViagem *= precoEtanol;
} else {
    valorGastoNaViagem *= precoGasolina;
}

console.log('Valor total gasto foi ',valorGastoNaViagem.toFixed(2));