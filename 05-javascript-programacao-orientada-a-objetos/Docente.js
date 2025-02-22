import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovarEstudante(nome, curso) {
    return `
      Estudante ${nome} aprovado(a) no curso ${curso}, responsável: ${this.nome}
    `;
  }
}

const novoDocente = new Docente(
  "Professor Girafales",
  "pg@pg.com",
  "1990-01-01"
);

console.log(novoDocente.aprovarEstudante("Chiquinha", "JavaScript"));
