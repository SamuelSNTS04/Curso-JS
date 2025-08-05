const { get, print } = require("../aulas/funcoes-auxiliares");

const media = get();

if (media < 5) {
    print('Reprovado');
} else if(media >= 5 && media < 7){
    print('Recuperação');
} else {
    print('Aprovado');
}