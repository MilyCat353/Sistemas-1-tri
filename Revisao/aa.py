musica = "Dandelions"
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