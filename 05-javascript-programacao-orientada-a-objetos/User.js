export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome;
  }
  get email() {
    return this.#email;
  }
  get nascimento() {
    return this.#nascimento;
  }
  get role() {
    return this.#role;
  }
  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("Nome inválido");
    }
    this.#nome = novoNome;
  }

  // exibirInfos() {
  //   return `${this.nome}, ${this.email}`;
  // }

  exibirInfos() {
    if (this.role === "estudante") {
      return `Dados estudante: ${this.nome}, ${this.email}`;
    } else if (this.role === "admin") {
      return `Dados admin: ${this.nome}, ${this.role}`;
    } else if (this.role === "docente") {
      return `Dados docente: ${this.nome}, ${this.role}`;
    }
  }
}

const novoUser = new User("Madruga", "m@m.com", "1990-01-01");

// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));
