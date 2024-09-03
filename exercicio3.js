let INDICE = 12;
let SOMA = 0;
let K = 1;

// Exibe o estado inicial
console.log(`Inicial: K = ${K}, SOMA = ${SOMA}`);

// Loop while para calcular a soma
while (K < INDICE) {
    K = K + 1; // Incrementa K
    SOMA = SOMA + K; // Adiciona K à SOMA
    
    // Exibe o estado após cada iteração
    console.log(`Após K = ${K}, SOMA = ${SOMA}`);
}

console.log(`Resultado final: SOMA = ${SOMA}`);
