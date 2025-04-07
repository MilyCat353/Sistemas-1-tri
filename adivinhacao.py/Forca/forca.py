palavra = "escola"
limite_tentativas = len(palavra) + 5
acertou = False
enforcou = False

letras_acertadas = []
for letra in palavra:
    letras_acertadas.append("-")

contador = 1
while(not acertou and not enforcou):
    print(letras_acertadas)
    print("Tentativas: ", contador, "/", limite_tentativas)
    chute = input("Digite a letra: ").lower()

    indice = 0
    for letra in palavra:
        if chute == letra:
            letras_acertadas[indice] = chute
        indice = indice + 1

    if contador == limite_tentativas:
        enforcou = True
        print("Você perdeu!")
        print(palavra)

    if letras_acertadas.count("-") == 0:
        acertou = True
        print("Parabêns!! Você acertou!")
        print(letras_acertadas)

    contador = contador + 1
