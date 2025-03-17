let comidas = ["Beterraba", "Macarronada", "Pepino-Azedo", "Almondefa", "Peixe", "Ariba"];
let valores = [10, 50, 4, 10, 2, 30]

function MostraComidas(){
    let contador = 0;
    console.log("Comidas");
    while(contador < comidas.length){
        let c2 = contador + 1 
        console.log(c2 + "- " + comidas[contador] + "  R$" + valores[contador]);
        contador = contador + 1;
    }
}

function AdicionaComida(NovaComida, Preco){

    comidas.push(NovaComida);
    valores.push(Preco);
}


function CardapioEspecial(){
    let valoresComDesconto = valores.map((valor) => valor - (valor*0.15));
    let contador = 0;
    console.log("Cardapio especial");
    while(contador < comidas.length){
        let c2 = contador + 1 
        console.log(c2 + "- " + comidas[contador] + "  R$" + valoresComDesconto[contador]);
        contador = contador + 1;
    }
}
MostraComidas();
AdicionaComida("Requeijão", 12);
MostraComidas();
CardapioEspecial();