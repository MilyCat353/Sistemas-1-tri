let livros = [
    { 
        titulo: "Guerra dos tronos",
        paginas: 600,
        Autor: "George R.R Martin",
        Genero: "Fantasia",
        Ano: 1996,
        Preco: 85,
        Sinopse: "Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros."
    },
    { 
        titulo: "A fúria dos reis",
        paginas: 648,
        Autor: "George R.R Martin",
        Genero: "Fantasia",
        Ano: 1998,
        Preco: 130,
        Sinopse: "O futuro de Westeros está em jogo, e ninguém descansará até que os Sete Reinos tenham explodido em uma verdadeira tormenta de espadas. Dos cinco pretendentes ao trono, um está morto e outro caiu em desgraça, e ainda assim a guerra continua em toda sua fúria, enquanto alianças são feitas e desfeitas."
    },
    { 
        titulo: "A tormenta das espadas",
        paginas: 832,
        Autor: "George R.R Martin",
        Genero: "Fantasia",
        Ano: 2000,
        Preco: 100,
        Sinopse: "O futuro de Westeros está em jogo, e ninguém descansará até que os Sete Reinos tenham explodido em uma verdadeira tormenta de espadas. Dos cinco pretendentes ao trono, um está morto e outro caiu em desgraça, e ainda assim a guerra continua em toda sua fúria, enquanto alianças são feitas e desfeitas."
    },
    { 
        titulo: "O festin dos corvos",
        paginas: 448,
        Autor: "George R.R Martin",
        Genero: "Fantasia",
        Ano: 2005,
        Preco: 67,
        Sinopse: "Há séculos os sete grandes reinos de Westeros se enfrentam em amargas disputas, batalhas e traições. Agora, com Joffrey Baratheon e Robb Stark fora da jogada e lordes insignificantes competindo pelas Ilhas de Ferro, a guerra que devorou o continente parece ter finalmente chegado ao fim."
    },
    { 
        titulo: "Fogo e sangue",
        paginas: 664,
        Autor: "George R.R Martin",
        Genero: "Fantasia",
        Ano: 2018,
        Preco: 97,
        Sinopse: "A história de Fogo e sangue começa com o lendário Aegon, o Conquistador, criador do Trono de Ferro, e segue narrando as gerações de Targaryen que lutaram para manter o assento, até a guerra civil que quase destruiu sua dinastia."
    }
]



function mostraLivros(){
    livros.forEach((livro) => {
        console.log(livro.titulo + "-" +
                    livro.Autor + " Ano: " +
                    livro.Ano + " Páginas: " +
                    livro.paginas + " Preço: " +
                    livro.Preco)
    })
}


// Gera um arquivo json dos livros
// Json = JavaScript object notation
function criaArquivo(){
    let livrosTexto = JSON.stringify(livros);
    const fs = require('fs');
    fs.writeFileSync("livros.json", livrosTexto);

}
criaArquivo()
mostraLivros()

