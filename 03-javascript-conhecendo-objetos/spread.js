const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "123456789",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551198989898", "551189898989"],
  enderecos: [
    {
      rua: "Rua Joseph Climber",
      numero: "45",
      complemento: "apto 43",
    },
    {
      rua: "Rua Dona Clotilde",
      numero: "71",
      complemento: null,
    },
  ],
};

function exibirTelefones(telefone1, telefone2) {
  console.log(`Ligar para ${telefone1}`);
  console.log(`Ligar para ${telefone2}`);
}

//exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

// const dadosEnvio = {
//   destinatario: estudante.nome,
//   rua: estudante.enderecos[0].rua,
//   numero: estudante.enderecos[0].numero,
// };
const dadosEnvio = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0],
};

console.log(dadosEnvio);
