// closures

//na invocação da função somaParcial ele guarda o valor de X mesmo não estando no escopo da segunda função
function soma(x) {
    return function (y) {
        return x + y;
    }
}

const somaParcial = soma(10);

console.log(somaParcial(20));
console.log(somaParcial(30));
console.log(somaParcial(40));