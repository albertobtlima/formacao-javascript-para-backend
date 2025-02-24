import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Chiquinha", "c@c.com", "1970-01-01");
console.log(novoUser.exibirInfos());
// novoUser.nome = "";
// console.log(novoUser.nome);

const novoAdmin = new Admin("Sr. Barriga", "s@b.com", "1960-01-01");
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente("Professor Girafales", "p@g.com", "1950-01-01");
console.log(novoDocente.exibirInfos());
