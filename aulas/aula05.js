const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);
let sum = 0.0;

for (let i = 0; i < notas.length; i++) {
    sum += notas[i];
}

const media = sum / notas.length;

console.log(media.toFixed(2));