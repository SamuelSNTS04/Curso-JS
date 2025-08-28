// formas de invocar uma função

const pessoa = {
    nome: "samuel",
    idade: 21
}

//invocação direta - o this será undefined porque ele não está no contexto do objeto
function gritar(prefixo){
    console.log(prefixo, this.nome);
}


gritar();

//com apply conseguimos colocar a função dentro do contexto do objeto pessoa
gritar.apply(pessoa, ['olaaaaaa']);

//funciona da mesma forma que o apply, mas não recebe um array e sim quantos argumentos forem passados separados por virgulas
gritar.call(pessoa, 'olaaaaaa');