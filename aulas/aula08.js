// declaração explícita e arrow function

//cria um contexto novo e consegue isolar esse contexto
function funcao1(){
    console.log(this);
}

//não cira um contexto, por isso o this não funciona
const funcao2 = () => {
    console.log(this);
}

const samuel = {
    nome: 'samuel',
    funcao1,
    funcao2
}

samuel.funcao1();
samuel.funcao2();