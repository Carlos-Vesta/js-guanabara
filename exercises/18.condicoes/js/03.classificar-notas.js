/**
 * 3 - Classificação de Notas
Crie um formulário onde o usuário insira uma nota (de 0 a 100). Use `if`, `else if` e `else` 
para classificar a nota:
- A (90-100)
- B (80-89)
- C (70-79)
- D (60-69)
- F (menor que 60)
 */

// Criar o escutador
let inputButton = document.querySelector(".input-button")
inputButton.addEventListener("click", calculaNota)

// Inicializar a função
function calculaNota() {

    // Definir as variáveis
    let nota = document.querySelector("#input-nota").value
    let resultado = document.querySelector(".mostrar-resultado")

    // Validar o input
    if (nota < 0 || nota.length == 0) {

        resultado.innerHTML = `Erro - Campo vazio ou nota menor que zero (0)!`
        resultado.style.color = `red`

    } else if (Number(nota) < 60) {

        resultado.innerHTML = `A sua nota é <strong>${nota}</strong>. Classificação: <strong>F</strong>`
        resultado.style.color = `#000000`

    } else if (Number(nota) >= 60 && Number(nota) < 70) {

        resultado.innerHTML = `A sua nota é <strong>${nota}</strong>. Classificação: <strong>D</strong>`
        resultado.style.color = `#000000`

    } else if (Number(nota) >= 70 && Number(nota) < 80) {

        resultado.innerHTML = `A sua nota é <strong>${nota}</strong>. Classificação: <strong>C</strong>`
        resultado.style.color = `#000000`
        
    } else if (Number(nota) >= 80 && Number(nota) < 90) {

        resultado.innerHTML = `A sua nota é <strong>${nota}</strong>. Classificação: <strong>B</strong>`
        resultado.style.color = `#000000`
        
    } else if (Number(nota) >= 90 && Number(nota) <= 100) {

        resultado.innerHTML = `A sua nota é <strong>${nota}</strong>. Classificação: <strong>A</strong>`
        resultado.style.color = `#000000`
        
    } else {

        resultado.innerHTML = `Sem classificação para esta nota.<br> Tente notas entre 0 - 100!`
        resultado.style.color = `#000000`
    }
}