let NovoUsuario = {
    nome : "João",
    idade : 30,
    funcao : "Padeiro",
    cidade : "RJ"

}

console.log(NovoUsuario)


let attUsuario = {
    ...NovoUsuario,
    status: "Desativado",
}

console.log(attUsuario)