
const numero = 6;

const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numero === 0) {
    console.log('o numero é invalido');
} else if (numeroPar) {
    console.log('par');
} else {
    console.log('impar');
}