/**
 * Crie um sistema que verifique a velocidade de um condutor.
 * Se a velocidade estiver acima de 60 km/h, é aplicado uma multa.
 */

// Criação do escutador no botão com a classe ".button-verificar", que será responsável por executar a função "verificar"
var botaoVerificar = document.querySelector(".button-verificar")
botaoVerificar.addEventListener("click", verificar)


function verificar() {

    // Criação da variável que irá armazenar o valor da velocidade
    var velocidade = Number(document.querySelector(".input-velocidade").value)

    // Criação da variável que irá armazenar o valor do elemento responsável por visualizar a mensagem
    var resultado = document.querySelector(".resultado")

    // Mostrará a velocidade do condutor
    resultado.innerHTML = `A velocidade do carro é de <strong>${velocidade}km/h</strong>.<br>`

    if (velocidade > 60) {

        // Essa mesnagem será visualizada se a velocidade estiver acima de 60km/h
        // O operador "+=" é usado para visualizar está mensagem sem excluir a primeira.
        resultado.innerHTML += `Estás acima da velocidade permitida! Recebe <strong>MULTA</strong>.`
    }


}