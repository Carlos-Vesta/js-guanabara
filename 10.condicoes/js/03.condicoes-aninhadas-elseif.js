/**
 * Crie um programa que leia a idade de uma pessoa e diga se ela pode votar ou não.
 * Se a pessoa tiver idade menor que 16 anos, ela "NÃO VOTA". E se tiver idade maior ou igual a 16 anos
 * e menor que 18 anos, ou idade maior que 65 anos, o voto é opcional (VOTO OPCIONAL). 
 * Caso tenha idade maior ou igual a 18 anos, "VOTO OBRIGATÓRIO".
 */


var buttonVerificar = document.querySelector(".button-verificar")
buttonVerificar.addEventListener("click", verificar)


function verificar() {


    var idade = Number(document.querySelector(".input-idade").value)
    var resultado = document.querySelector(".resultado")

    if (idade < 16) {
        resultado.innerHTML = `Você tem <strong>${idade}</strong> anos de idade! <strong>NÃO VOTA.</strong>`

    } else if (idade >= 16 && idade < 18 || idade > 65) {
        resultado.innerHTML = `Você tem <strong>${idade}</strong> anos de idade! <strong>VOTO OPCIONAL.</strong>`

    } else {
        resultado.innerHTML = `Você tem <strong>${idade}</strong> anos de idade! <strong>VOTO OBRIGATÓRIO.</strong>`
    }
}