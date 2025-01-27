const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "123456789",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551198989898", "551167676767"],
  endereco: [
    {
      rua: "Rua Dona Florinda",
      numero: "14",
      complemento: "Apto 16",
    },
  ],
};

estudante.endereco.push({
  rua: "Rua Dona Clotilde",
  numero: "71",
  complemento: "",
});

// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter(
  (endereco) => endereco.complemento
);

console.log(listaEnderecosComComplemento);
