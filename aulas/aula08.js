// filter

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter recebe uma função que retorna um boolean, se for true entra na nova lista se for false não entra
//filter retorna uma nova lista com o que foi filtrado
const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0);
})

console.log(listaDeNumerosPares);