
// Criação do escutador para o Botão #buttonSomar
var buttonSomar = document.querySelector("#buttonSomar")
buttonSomar.addEventListener("click", somar)


function somar() {
    var numero1 = Number(document.querySelector("#input-1").value)
    var numero2 = Number(document.querySelector("#input-2").value)

    var soma = numero1 + numero2


    // Visualização do Resultado
    var resultado = document.querySelector(".resultado")

    resultado.innerHTML = `A soma de ${numero1} e ${numero2} é igual a ${soma}`

}