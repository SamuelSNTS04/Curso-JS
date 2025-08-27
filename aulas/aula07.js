//__proto__

const pessoa = {
    genero: "masculino"
}

const samuel = {
    nome: 'samuel',
    idade: 21,
    __proto__: pessoa
}

console.log(samuel.genero)