const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "123456789",
  turma: "JavaScript",
};

console.log(estudante.nome);
console.log(`O nome do estudante é :${estudante.nome}`);
console.log(`Os três primeiro números do CPF são: 
  ${estudante.cpf.substring(0, 3)}`);
