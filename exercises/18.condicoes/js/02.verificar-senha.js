/**
 * 2 - Verificação de Senha
    Peça ao usuário que insira uma senha. Use `if`, `else if` e `else` 
    para verificar se a senha é forte (8 caracteres ou mais, com números e letras). 
    Mostre uma mensagem correspondente.
 */


// Criar o escutador
let inputButton = document.querySelector(".input-button")
inputButton.addEventListener("click", gerarSenha)


// Inicializando a função
function gerarSenha() {
    
    // Criar as variáveis
    let senha = document.querySelector("#input-senha").value
    let resultado = document.querySelector(".mostrar-resulatdo")

    // Validar o campo para não aceitar valor nulo
    if (senha.length == 0) {

        resultado.innerHTML = `Erro - Valor vazio!`
        resultado.style.color = `red`

    } else if (senha.length < 8) {

        resultado.innerHTML = `( ${senha} ) Senha fraca!`
         resultado.style.color = `#ffd14b`

    } else {

        resultado.innerHTML = `( ${senha} ) Senha forte!`
        resultado.style.color = `#00890f`
    }
}