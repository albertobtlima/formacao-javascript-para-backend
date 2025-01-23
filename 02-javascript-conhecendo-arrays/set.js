const nomes = 
  ["Chaves", "Kiko", "Madruga", "Madruga", "Bruxa", "Bruxa", "Bruxa"];

// const nomesAtualizados = new Set(nomes);
// const listaNomesAtualizados = [...nomesAtualizados];

const listaNomesAtualizados = [...new Set(nomes)];

//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);
