//função construtora

function Pesssoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pesssoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

//o código abaixo opera da mesma forma, só está mais padronizado com outras linguagens

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`)
    }
}