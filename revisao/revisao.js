/* Arquivo base para realização da Atividade de Revisão do 1º TRIMESTRE */

// 1) Criação de variável de texto e numérica
const nome = "Emily Emanuelle Savczuk";
const chamada = 8;
// 2) Criação de uma lista
const jogos = ["Roblox", "Minecraft", "Pou"];


// 3) Utilização de um laço while
function mostrarJogos() {
    let contador = 0;
    console.log("########## Exercício 3 ##########")
    console.log("##### Jogos favoritos da Emily são #####");
    while (contador < jogos.length) {
        let espaco = contador + 1;
        console.log(espaco + "- " + jogos[contador]);
        contador = contador + 1;
    }
}
mostrarJogos();

// 4) Criação de um objeto
const serieFavorita = [
    {
        Serie: "Game Of Thrones",
        Ano: 1980,
        IMDB: 9.6
    }
];

console.log(nome + ", Nome: " + serieFavorita[0].Serie + ", Ano: " + serieFavorita[0].Ano);

// 5) Utilização de if-else
function NotaIMDB(nota) {
    if (nota <= 4) {
        console.log("O filme possui uma nota considerada baixa.");
    } else if (nota > 4 && nota <= 7) {
        console.log("O filme é considerado razoável.");
    } else if (nota > 7) {
        console.log("O filme é considerado bom!");
    }
}
const notaIMDB = serieFavorita[0].IMDB;
console.log("### Exercício 5 ###")
console.log("Nota do IMDB: " + notaIMDB);
NotaIMDB(notaIMDB);

// 6) Criação de uma função que analisa os dados da previsão do tempo
const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
]
console.log("Exercício 6 ")
function verificaPrevisao(previsoes) {
    previsoes.forEach(previsao => {
        if (previsao.chanceDeChuva >= 50) {
            console.log("No dia da semana " + previsao.dia + ", a previsão é de chuva. Leve um guarda-chuva!");
        } else {
            console.log("No dia da semana " + previsao.dia + ", a previsão estará agradável");
        }
    });
}

verificaPrevisao(previsaoTempo);

