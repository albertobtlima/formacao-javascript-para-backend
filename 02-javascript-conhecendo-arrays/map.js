const notas = [10, 6.5, 8, 7.5];

// const notasAtualizadas = notas.map(function (nota) {
//   return nota + 1;
// });

const notasAtualizadas = notas.map((nota) => (nota + 1 >= 10 ? 10 : nota + 1));

console.log(notasAtualizadas);
