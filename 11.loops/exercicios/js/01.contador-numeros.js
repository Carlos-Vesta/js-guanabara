/**
 * Criar um programa que faça a contagem de números, que tenha um número inicial,
 * um número final e um número de saltos. Valide os campos de modo a não permitir campos vazios,
 * e o número de saltos não deve ser menor ou igual a zero (0). 
 */

// Criando o escutador
var buttonEnviar = document.querySelector(".input-button")
buttonEnviar.addEventListener("click", contar)

// Criando a funcção
function contar() {

    // Definindo as variáveis
    let inputInicial = document.querySelector("#input-inicial").value
    let inputFinal = document.querySelector("#input-final").value
    let inputSalto = document.querySelector("#input-salto").value

    let contador
    let resultado = document.querySelector(".contador-resulatdo")


    // Validação dos campos
    if (inputInicial.length == 0 || inputFinal.length == 0 || inputSalto.length == 0) {
        resultado.innerHTML = `Erro - Verifique os dados!`
        resultado.style.color = "red"

    // Validação do campo de Saltos, não deve ser menor ou igual a zero (0)
    } else if (inputSalto <= 0) {
        resultado.innerHTML = `Erro - número de salto menor que 1!`
        resultado.style.color = "red"

    } else {
        // Vai permitir zerar a caixa de visualizão toda vez que for feita a contagem
        resultado.innerHTML = `` 

        // Conversão das variáveis, de STRING para NUMBER
        numeroInicial = Number(inputInicial)
        numeroFinal = Number(inputFinal)
        numeroSalto = Number(inputSalto)

        // Condição para a execução da contagem Progressiva
        if (numeroInicial <= numeroFinal) {

            // Inicialização do contador progressivo
            for (contador = numeroInicial; contador <= numeroFinal; contador += numeroSalto) {
                resultado.innerHTML += ` ${contador} 👉`
                resultado.style.textAlign = "justify"; // Irá alinhar o resultado justificado
            }


        } else {
            // Inicialização do contador regressivo
            for (contador = numeroInicial; contador >= numeroFinal; contador -= numeroSalto) {
                resultado.innerHTML += ` ${contador} 👉 `
                resultado.style.textAlign = "justify"; // Irá alinhar o resultado justificado
            }
        }
        
        // Será impresso depois do último número da contagem (Meta da Contagem)
        resultado.innerHTML += `🏴`
        resultado.style.color = "#000"
    }
}