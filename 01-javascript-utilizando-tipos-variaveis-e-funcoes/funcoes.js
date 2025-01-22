//const nome = "Bozo";

function exibirNome(nome) {
  console.log(nome);
}

function exibirInfosEstudante(nome, nota) {
  return `Aluno: ${nome}, nota: ${nota}`;
}

exibirNome("Chaves");
exibirNome("Kiko");

console.log(exibirInfosEstudante("Chiquinha", 8));
