function verificarLetraA(texto) {
    // Utiliza uma expressão regular para encontrar todas as letras 'a' e 'A'
    const correspondencias = texto.match(/a/gi);
    // Retorna a quantidade de correspondências ou 0 se não houver
    return correspondencias ? correspondencias.length : 0;
  }
  
  // Solicita ao usuário para inserir uma string
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite uma palavra, frase ou texto: ', (entrada) => {
    const quantidadeA = verificarLetraA(entrada);
    console.log(`A letra 'a' (maiúscula e minúscula) ocorre ${quantidadeA} vez(es) na sua entrada.`);
    rl.close();
  });
  