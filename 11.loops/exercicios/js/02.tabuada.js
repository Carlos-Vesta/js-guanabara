/**
 * Criar uma Tabuada
 */


// Criando o escutador
let inputButton = document.querySelector(".input-button")
inputButton.addEventListener("click", gerarTabuada)


// Criando a funão
function gerarTabuada() {
    
    // criando as variáveis
    let numero = document.querySelector("#input-numero").value
    let numeroVariavel
    let resultado = document.querySelector(".contador-resulatdo")

    
     resultado.innerHTML = `` // Vai zerar o input

    //  Validação do campo do número, não pode estar vazio
     if (numero.length == 0) {
        resultado.innerHTML = `Erro - Campo vazio!`
        resultado.style.color = `red`

     } else {

        // COnversão de valores de STRING para NUMBER
        for (numeroVariavel = 1; numeroVariavel <= 12; numeroVariavel++) {

            let multiplicacao = Number(numero) * numeroVariavel
    
            resultado.innerHTML += `${numero} x ${numeroVariavel} = ${multiplicacao} <br>`
            resultado.style.color = `#000000`
            // resultado.style.textAlign = `justify`
        }
     }
}