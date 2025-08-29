//assincronismo

const fs = require("fs");

const filePath = path.resolve(__dirname, 'tarefas.csv');

const promessaDaLeituraDoArquivo = fs.promises.readFile("tarefas.csv");

promessaDaLeituraDoArquivo
    .then((arquivo) => arquivo.toString("utf-8"))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';');
        return {
            nome,
            feito: feito.trim() === "true"
        }
    }))
    .then((listaDasTarefas) => console.log(listaDasTarefas))
    .catch((error) => console.log("deu ruim", error))