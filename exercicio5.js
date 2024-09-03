function descobrirInterruptores() {
    // Estado inicial das lâmpadas (todas apagadas e frias)
    let lampadas = {
        A: { estado: 'apagada', temperatura: 'fria' },
        B: { estado: 'apagada', temperatura: 'fria' },
        C: { estado: 'apagada', temperatura: 'fria' }
    };

    // Função para simular o estado dos interruptores
    function ligarInterruptor(interruptor) {
        console.log(`Ligando o ${interruptor}`);
        if (interruptor === 'Interruptor A') {
            lampadas.A.estado = 'acesa';
            lampadas.A.temperatura = 'quente';
        } else if (interruptor === 'Interruptor B') {
            lampadas.B.estado = 'acesa';
            lampadas.B.temperatura = 'quente';
        } else if (interruptor === 'Interruptor C') {
            lampadas.C.estado = 'acesa';
            lampadas.C.temperatura = 'quente';
        }
    }

    function desligarInterruptor(interruptor) {
        console.log(`Desligando o ${interruptor}`);
        if (interruptor === 'Interruptor A') {
            lampadas.A.estado = 'apagada';
            lampadas.A.temperatura = 'morna';
        } else if (interruptor === 'Interruptor B') {
            lampadas.B.estado = 'apagada';
            lampadas.B.temperatura = 'morna';
        } else if (interruptor === 'Interruptor C') {
            lampadas.C.estado = 'apagada';
            lampadas.C.temperatura = 'morna';
        }
    }

    // Simular o processo
    console.log('Início do processo:');

    // Passo 1: Ligue o Interruptor A e deixe-o ligado por 5 minutos (simulado)
    ligarInterruptor('Interruptor A');

    // Passo 2: Desligue o Interruptor A e ligue o Interruptor B
    desligarInterruptor('Interruptor A');
    ligarInterruptor('Interruptor B');

    // Passo 3: Simulando a observação das lâmpadas, temos que:
    console.log('Observando as lâmpadas...');

    // Identificar a lâmpada de acordo com o estado...
    let resultado = {};
    for (let [nome, lampada] of Object.entries(lampadas)) {
        if (lampada.estado === 'acesa') {
            resultado['Interruptor B'] = nome;
        } else if (lampada.temperatura === 'morna') {
            resultado['Interruptor A'] = nome;
        } else {
            resultado['Interruptor C'] = nome;
        }
    }
    // E aqui está o resultado:
    console.log('Resultado:');
    console.log(`Interruptor A controla a lâmpada ${resultado['Interruptor A']}`);
    console.log(`Interruptor B controla a lâmpada ${resultado['Interruptor B']}`);
    console.log(`Interruptor C controla a lâmpada ${resultado['Interruptor C']}`);
}

descobrirInterruptores();
