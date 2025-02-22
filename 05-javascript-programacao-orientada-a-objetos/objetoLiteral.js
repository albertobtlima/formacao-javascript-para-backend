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

//user.exibirInfos();

//const exibir = user.exibirInfos
//exibir();

const exibir = function () {
  console.log(this.nome, this.email);
};

const exibirNome = exibir.bind(user);
exibirNome();
