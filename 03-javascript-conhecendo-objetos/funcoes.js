//const mediaBase = 7;

const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "123456789",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551198989898", "551167676767"],
  media: 7.5,
  estaAprovado: function (mediaBase) {
    return this.media >= mediaBase ? true : false;
  },
};

console.log(estudante.estaAprovado(7));
