const nota1 = 1.0;
const nota2 = 1.5;
const nota3 = 7.0;

const soma = nota1 + nota2 + nota3;
const media = soma / 3;

if (media < 5) {
    console.log('reprovação');
} else if (media >= 5 && media <= 7) {
    console.log('recuperação');
} else {
    console.log('passou de semestre');
}