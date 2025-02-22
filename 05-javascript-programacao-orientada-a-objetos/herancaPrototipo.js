const user = {
  nome: "Chaves",
  email: "chaves@chaves.com",
  nascimento: "1990-01-01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);
  },
};

const admin = {
  nome: "Kiko",
  email: "kiko@kiko.com",
  nascimento: "1990-01-01",
  role: "admin",
  ativo: true,
  criarCurso: function () {
    console.log("Curso criado com sucesso!");
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
