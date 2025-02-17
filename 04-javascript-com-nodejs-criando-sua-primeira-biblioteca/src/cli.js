const fs = require("fs");
const trataErros = require("./erros/funcoesErro");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    contaPalavras(texto);
  } catch (erro) {
    console.log(trataErros(erro));
  }
});
