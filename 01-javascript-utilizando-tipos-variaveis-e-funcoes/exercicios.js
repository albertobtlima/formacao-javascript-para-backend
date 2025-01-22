// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada.
// Em seguida, chame a função e exiba a saudação no console.

function saudacao(nome) {
  return `Olá ${nome}, como vai`;
}

console.log(saudacao("Chiquinha"));

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade
// (idade >= 18). Imprima o resultado no console.

let idade = 14;

function verificaMaioridade(idade) {
  if (idade >= 18) {
    return `É maoir de idade`;
  } else {
    return `Não é maior de idade`;
  }
}

console.log(verificaMaioridade(idade));

// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente)
// utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.


function verificaPalindromo(palavra) {
  const palavraInvertida = palavra.split("").reverse().join("");

  if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
    return `Verdadeiro a palavra '${palavra}', é uma palíndromo`;
  } else {
    return `Falso a palavra '${palavra}', não é uma palíndromo`;
  }
}

console.log(verificaPalindromo("Gato"));
console.log(verificaPalindromo("Arara"));

// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
// Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

function maiorNumero(n1, n2, n3) {
  let maior = n1;

  if (n2 > maior) {
    maior = n2;
  }

  if (n3 > maior) {
    maior = n3;
  }
  return `O maior número é: ${maior}`;
}

console.log(maiorNumero(12, 19, 4));
 // Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. 
 // A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = (base, expoente) => {
  const resultado = base ** expoente;
  return `O resultado de ${base} elevado a ${expoente} é: ${resultado}`;
}

console.log(calculaPotencia(3, 4));
