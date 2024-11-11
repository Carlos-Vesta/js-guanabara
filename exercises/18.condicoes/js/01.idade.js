/**
 * 1 - Validação de Idade
  Crie uma aplicação que peça ao usuário sua idade e exiba uma mensagem diferente dependendo da faixa etária:
- Menor de 18 anos: "Você é menor de idade."
- Entre 18 e 60 anos: "Você é adulto."
- Maior de 60 anos: "Você é idoso."
 */



// Criar o escutador
let inputButton = document.querySelector(".input-button")
inputButton.addEventListener("click", faixaEtaria)


// Inicializando a função
function faixaEtaria() {
  
  let idade = document.querySelector("#input-idade").value
  let resultado = document.querySelector(".mostrar-resulatdo")

  if (idade.length == 0 || Number(idade) < 0) {

    resultado.innerHTML = `Erro - Campo vazio ou idade menor que zero (0)!`
    resultado.style.color = `red`

  } else if (Number(idade) < 18 && Number(idade) >= 0) {

    // resultado.innerHTML = ``
    resultado.innerHTML = `Você tem <strong>${Number(idade)}</strong> ano(s). Você é menor de idade!`
    resultado.style.color = `#000000`

  } else if (Number(idade) >= 18 && Number(idade) < 60) {

    resultado.innerHTML = `Você tem <strong>${Number(idade)}</strong> anos. Você é um(a) adulto(a)!`
     resultado.style.color = `#000000`

  } else if (Number(idade) <= 100) {

    resultado.innerHTML = `Você tem <strong>${Number(idade)}</strong> anos. Você é um(a) idoso(a)!`
    resultado.style.color = `#000000`

  } else {

    resultado.innerHTML = `Você tem <strong>${Number(idade)}</strong> anos. Difilmente humanos vivem até essa idade!`
     resultado.style.color = `#000000`
  }


}