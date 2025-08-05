const numeros = [2,4,5,7,9,12,15,14,17,18];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`é par: ${numeros[i]}`);
    }
}