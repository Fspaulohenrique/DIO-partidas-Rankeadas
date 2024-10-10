/*# Desafio 2 proposto pela DIO 
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

//Meu código
let saldoVitorias = calcularDesempenho(200,5)
let rankAtual;

function calcularDesempenho(vitorias, derrotas) {
    let saldorankAtualeadas = vitorias - derrotas
    return saldorankAtualeadas
}

if (saldoVitorias < 10) {
    rankAtual = "Ferro";
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    rankAtual = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    rankAtual = "Prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    rankAtual = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    rankAtual = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    rankAtual = "Lendário";
} else if (saldoVitorias >= 101) {
    rankAtual = "Imortal";
}

//Saída
console.log("O Herói tem " + saldoVitorias + " vitórias e está no rank " + rankAtual)