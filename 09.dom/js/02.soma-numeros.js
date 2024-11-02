
// Criação do escutador para o Botão #buttonSomar
var buttonSomar = document.querySelector("#buttonSomar")
buttonSomar.addEventListener("click", somar)


function somar() {
    // Converter as variáveis em Valores numéricos
    var numero1 = Number(document.querySelector("#input-1").value)
    var numero2 = Number(document.querySelector("#input-2").value)

    // Definição do elemento responsável pela Visualização do Resultado
    var resultado = document.querySelector(".resultado")

    // Calcular a soma entre os valores das variáveis
    var soma = numero1 + numero2


   

    // Mensagem que será visualizada
    resultado.innerHTML = `A soma de ${numero1} e ${numero2} é igual a ${soma}`

}