const notaFinal = 7;
const faltas = 6;
const advertencias = 0;

if (notaFinal < 7 || faltas > 4) {
  console.log("Reprovado");
} else {
  console.log("Não foi reprovado por faltas");
}

if (faltas <= 2 && !advertencias) {
  console.log("Recebeu bônus");
} else {
  console.log("Não recebeu bônus");
}
