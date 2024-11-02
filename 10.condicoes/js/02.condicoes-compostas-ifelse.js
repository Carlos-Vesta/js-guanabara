// Crie um programa que diga se a pessoa é moçambicana ou estrangeiro.


// Cria o escutador 
var buttonVerificar = document.querySelector(".button-verificar")
buttonVerificar.addEventListener("click", verificar)


function verificar() {

    var pais = document.querySelector(".input-pais").value
    var resultado = document.querySelector(".resultado")

    if (pais == "Mocambique") {
        resultado.innerHTML = `Você é moçambicano!`
    } else {
        resultado.innerHTML = `Você é estrangeiro!`
    }
}