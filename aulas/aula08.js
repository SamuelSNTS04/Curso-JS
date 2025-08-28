// map

class Pessoa{
    constructor(name) {
        this.name = name;
    }
}

const lista = [new Pessoa('samuel'), new Pessoa('tiago'), new Pessoa('bianca'), new Pessoa('ezequiel')];

//conversão da lista pessoa, para a lista de nomes - conversão de um objeto para outro
const listaNomes = lista.map((element) => {
    return element.name;
});

console.log(listaNomes);

