function calcularFatorial(numero) {
    if (numero < 0) {
        return null;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function gerarSequenciaMensagens(mensagem, N) {
    let sequencia = '';
    for (let i = 0; i < N; i++) {
        sequencia += mensagem + ' ';
    }
    return sequencia.trim();
}

function calcularOperacao(valor1, valor2, operacao) {
    switch (operacao) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            if (valor2 === 0) {
                return "Não é possível fazer divisão por ZERO";
            }
            return valor1 / valor2;
        default:
            return "Operação inválida";
    }
}


function calcularTabuada(numero) {
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
        tabuada.push(numero * i);
    }
    return tabuada;
}

function inverterNumero(numero) {
    const numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
    return numeroInvertido;
}

function contarVogais(texto) {
    const vogais = 'aeiouAEIOU';
    let count = 0;
    for (let char of texto) {
        if (vogais.includes(char)) {
            count++;
        }
    }
    return count;
}

function verificarSequenciaBemFormada(sequencia) {
    const pilha = [];
    const correspondencia = {
        '(': ')',
        '[': ']'
    };
    for (let char of sequencia) {
        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            const topo = pilha.pop();
            if (correspondencia[topo] !== char) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}

const nomes = ['Arnaldo', 'Bernaldo', 'Cernaldo', 'Dernaldo', 'Ernaldo', 'Fernaldo'];
function gerarListaObjetosAleatorios(numero) {
    const lista = [];
    for (let i = 0; i < numero; i++) {
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;
        lista.push({ id: i + 1, nome: nome, idade: idade });
    }
    return lista;
}

function calcularMediaIdades(lista) {
    if (lista.length === 0) return 0;
    const totalIdades = lista.reduce((acc, obj) => acc + obj.idade, 0);
    return totalIdades / lista.length;
}

function ordenarListaPorAtributo(lista, atributo) {
    return lista.sort((a, b) => a[atributo] - b[atributo]);
}

console.log(calcularFatorial(5));
console.log(calcularFatorial(0));

console.log(gerarSequenciaMensagens("Psiu ", 3));
console.log(gerarSequenciaMensagens("HA", 5));

console.log(calcularOperacao(10, 5, '+'));
console.log(calcularOperacao(10, 5, '-'));
console.log(calcularOperacao(10, 5, '*'));
console.log(calcularOperacao(10, 5, '/'));
console.log(calcularOperacao(10, 0, '/'));
console.log(calcularOperacao(10, 5, '%'));

console.log(calcularTabuada(5));
console.log(calcularTabuada(7));

console.log(inverterNumero(875));
console.log(inverterNumero(12345));

console.log(contarVogais("Anteteguemon"));
console.log(contarVogais("Xerelete"));

console.log(verificarSequenciaBemFormada("(([]))"));
console.log(verificarSequenciaBemFormada("(([)])"));


let listaAleatoria = gerarListaObjetosAleatorios(5);

console.log("Lista Aleatória:");
console.log(listaAleatoria);

let mediaIdades = calcularMediaIdades(listaAleatoria);
console.log("Média das idades: ", mediaIdades);

let listaOrdenada = ordenarListaPorAtributo(listaAleatoria, 'idade');
console.log("Lista Ordenada por Idade:");
console.log(listaOrdenada);

