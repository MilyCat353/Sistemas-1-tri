nome = "Emily Emanuelle Savczuk"
numero = 8
print("Bem vindo ao sistema!!")
altura = 1.65
musica = "Dandelions"
SerieFavorita = "Game Off Trones"
notaSerie = 8.63
altura = 1.65
AlturaUsuario = float(input("digite sua altura:"))
if altura > AlturaUsuario:
    print("Você é mais baixo")
elif altura < AlturaUsuario:
    print("Vocẽ é mais alto")
else:
    print("Você é do mesmo tamanho")

musicaUsuario = []
contador = 0
while contador < 3:
    entrada = input("Digite sua música favorita: ")
    musicaUsuario.append(entrada)
    contador += 1
if musica in musicaUsuario:
    print("Você gosta da mesma música que eu! MUAHAHAHAHAH")
else:
    print("Saia daqui, você não é como eu, seu sem alma.")

nota_favorito = 8.63
filmes = []
notas = []
for i in range(3):
    filme = input(f"Digite o nome do filme {i+1}: ")
    nota = float(input(f"Digite a nota do IMDB do filme {i+1}: "))
    filmes.append(filme)
    notas.append(nota)
for i in range(3):
    if notas[i] > nota_favorito:
        print(f"O filme '{filmes[i]}' tem nota maior que o meu filme favorito.")
    elif notas[i] < nota_favorito:
        print(f"O filme '{filmes[i]}' tem nota menor que o meu filme favorito.")
    else:
        print(f"O filme '{filmes[i]}' tem a mesma nota que o meu filme favorito.")