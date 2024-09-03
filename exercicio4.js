function encontrarProximosElementos() {
    // a) Sequência de números ímpares
    // A sequência começa em 1 e incrementa em 2 a cada passo.
    let a = [1, 3, 5, 7];
    let proximosA = [];
    for (let i = 0; i < 5; i++) {
        a.push(a[a.length - 1] + 2); // Adiciona o próximo número ímpar
        proximosA.push(a[a.length - 1]); // Adiciona o número à lista de próximos
    }
    console.log(`a) Sequência: ${a.join(', ')}...`);
    console.log(`   Próximos 5 números: [${proximosA.join(', ')}]`);

    // b) Sequência de potências de 2
    // Cada número é o dobro do anterior.
    let b = [2, 4, 8, 16, 32, 64];
    let proximosB = [];
    for (let i = 0; i < 5; i++) {
        b.push(b[b.length - 1] * 2); // Dobra o último número para obter o próximo
        proximosB.push(b[b.length - 1]); // Adiciona o número à lista de próximos
    }
    console.log(`b) Sequência: ${b.join(', ')}...`);
    console.log(`   Próximos 5 números: [${proximosB.join(', ')}]`);

    // c) Sequência de quadrados perfeitos
    // Cada número é o quadrado de inteiros consecutivos.
    let c = [0, 1, 4, 9, 16, 25, 36];
    let proximosC = [];
    for (let i = 7; i < 12; i++) {
        c.push(i * i); // Adiciona o quadrado do inteiro i
        proximosC.push(i * i); // Adiciona o número à lista de próximos
    }
    console.log(`c) Sequência: ${c.join(', ')}...`);
    console.log(`   Próximos 5 números: [${proximosC.join(', ')}]`);

    // d) Sequência de quadrados perfeitos de números pares
    // Cada número é o quadrado de números pares consecutivos.
    let d = [4, 16, 36, 64];
    let proximosD = [];
    let proximoPar = 10; // Próximo número par após 8
    for (let i = 0; i < 5; i++) {
        d.push(proximoPar * proximoPar); // Adiciona o quadrado do próximo número par
        proximosD.push(proximoPar * proximoPar); // Adiciona o número à lista de próximos
        proximoPar += 2; // Incrementa o número par
    }
    console.log(`d) Sequência: ${d.join(', ')}...`);
    console.log(`   Próximos 5 números: [${proximosD.join(', ')}]`);

    // e) Sequência de Fibonacci
    // Cada número é a soma dos dois números anteriores.
    let e = [1, 1, 2, 3, 5, 8];
    let proximosE = [];
    while (e.length < 11) {
        e.push(e[e.length - 1] + e[e.length - 2]); // Adiciona a soma dos dois últimos números
    }
    for (let i = 6; i < 11; i++) {
        proximosE.push(e[i]); // Adiciona os próximos números à lista de próximos
    }
    console.log(`e) Sequência: ${e.join(', ')}...`);
    console.log(`   Próximos 5 números: [${proximosE.join(', ')}]`);

    // f) Sequência com diferenças pequenas
    // A sequência não segue um padrão simples. Vamos adicionar números consecutivos após o último. Sequência identificada: 8-2-4-1-1-1
    let f = [2, 10, 12, 16, 17, 18, 19];
    let proximosF = [];
    for (let i = 0; i < 5; i++) {
        f.push(f[f.length - 1] + 1); // Adiciona o próximo número consecutivo
        proximosF.push(f[f.length - 1]); // Adiciona o número à lista de próximos
    }
    console.log(`f) Sequência: ${f.join(', ')}...`);
    console.log(`   Próximos 5 números: [${proximosF.join(', ')}]`);
}

encontrarProximosElementos();
