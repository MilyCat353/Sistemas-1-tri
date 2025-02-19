import random
sorteio = random.randint(1, 10)
print("Jogo da adivinhação")
print("Adivinhe o número que estou pensando de 1 a 10")
chute = int(input("Digite o seu chute:"))
print(sorteio)
print(chute)
if (chute == sorteio):
    print("EBAAAAAAAAAA VC ACERTOU, O numero era:", sorteio)
if (chute != sorteio):
    print("Voce errou ;n; O numero era:", sorteio)    
 