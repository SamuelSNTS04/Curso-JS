const precoCombustivel = 5.79;
const gastoMedioPorKm = 12;
const distancia = 1580;

let valorGastoNaViagem = (distancia/gastoMedioPorKm) * precoCombustivel;

console.log('Valor total gasto foi ',valorGastoNaViagem.toFixed(2));