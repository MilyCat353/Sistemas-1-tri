import random
sorteio = random.randint(1, 10)
print("Jogo da adivinhação")
print("Adivinhe o número que estou pensando de 1 a 10")
limite_tentativas = 3
tentativa = 1
while (limite_tentativas >= tentativa):
    print("tentativa" , tentativa)
    chute = int(input("Digite o seu chute:"))
    if (chute == sorteio):
        print("EBAAAAAAAAAA VC ACERTOU, O numero era:", sorteio)
        break
    elif (chute > sorteio):
        print("Chute um número menor")
    elif (chute < sorteio):
        print("Chute um número maior")
    tentativa = tentativa + 1
                                     