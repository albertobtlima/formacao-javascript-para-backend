import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nome, qtdVagas) {
    return `Curso ${nome} criado com ${qtdVagas} vagas`;
  }
}

const novoAdmin = new Admin("Chaves", "c@c.com", "1990-01-01");

// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso("JavaScript", 20));
