const samuel = {
    nome: "samuel",
    idade: 21,

    descrever: function () {
        console.log(`meu nome é ${this.nome} minha idade é ${this.idade}`);
    }
}

samuel.descrever();

console.log(samuel.nome);
console.log(samuel.idade);
console.log(samuel);

samuel.altura = 1.71;
delete samuel.nome;

console.log(samuel);

/*********************************************/

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`meu nome é ${this.nome} minha idade é ${this.idade}`);
    };
}

const samuelS = new Pessoa("samuel santos", 21);
const ezequiel = new Pessoa('ezequiel', 22);

samuelS.descrever();

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
}

compararPessoa(samuelS, ezequiel);