import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Clotilde", "c@c.com", "1970-01-01");
// console.log(novoUser.exibirInfos());
novoUser.nome = "";
console.log(novoUser.nome);

// const novoAdmin = new User("Clotilde", "c@c.com", "1970-01-01");
// console.log(novoAdmin.nome);
