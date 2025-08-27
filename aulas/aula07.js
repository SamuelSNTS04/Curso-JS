//sobrescrita

const pessoa = {
    idade: 21
}

const samuel = {
    nome: "samuel",
    idade: 30,
    __proto__: pessoa
}

console.log(samuel.idade)