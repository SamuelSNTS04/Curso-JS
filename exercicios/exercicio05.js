class Carros{
    marca;
    cor;
    gastoMedioDeCombustivel;

    constructor(cor,gastoMedioDeCombustivel,marca){
        this.cor = cor;
        this.gastoMedioDeCombustivel = gastoMedioDeCombustivel;
        this.marca = marca;
    }

    valorDoPercurso(distancia,precoCombustivel){
        return distancia * this.gastoMedioDeCombustivel * precoCombustivel;
    }
}

const uno = new Carros('preto', 1/12, 'fiat');
const palio = new Carros('branco', 1/10,'fiat')

console.log(uno.valorDoPercurso(70,5).toFixed(2));
console.log(palio.valorDoPercurso(70,5).toFixed(2));