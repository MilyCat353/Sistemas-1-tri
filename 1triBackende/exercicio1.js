let av1 = 5.0;
let av2 = 6.0;
let recup1 = 7.0;
let recup2 = 3.0;
let nota1;
let nota2;
let resultado;
let media;

if ( av1 > recup1) {
    nota1 = av1
} else {
    nota1 = recup1
}
if ( av2 > recup2) {
    nota2 = av2
}
else if ( av2 < recup2) {
    nota2 = recup2
}

resultado = (nota1 + nota2);
media = (resultado /2);

if (media >= 6.0 ) {
    console.log("Aprovado!! Você tirou:" , media) 
}
else if (media > 6.0) {
    console.log("Reprovado... Vocẽ tirou:" , media)
}


