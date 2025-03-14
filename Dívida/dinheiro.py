Custos = [500, 600, 300, 400]
Ganhos = [1200, 200, 650, 50]

def Somatorio(lista):
    Contador = 0
    soma = 0
    while(Contador < len(lista)):
        soma = soma + lista[Contador]
        Contador = Contador + 1
    return soma
somaCustos = Somatorio(Custos)
SomaGamhos = Somatorio(Ganhos)
print("O seu custo é:", somaCustos)
print("O seu ganho é:", SomaGamhos)
print("O seu saldo final é:", SomaGamhos - somaCustos)


 
