/**
 * 6 - Status de Login
Implemente uma verificação de login. Peça ao usuário para inserir um nome de usuário e uma senha. 
Use `if`, `else if` e `else` para verificar se as credenciais estão corretas e exiba uma mensagem apropriada.
 */


// Criar o escutador
document.querySelector(".input-button").addEventListener("click", statusLogin);

// Inicializar a função
function statusLogin() {
   
    // Definindo as variáveis
    let userName = "Carlos";
    let userPassword = "123456";

    let inputUserName = document.querySelector("#input-username").value.trim(); // Captura e valor e remove espaços em branco
    let inputUserPassword = document.querySelector("#input-password").value;
    let resultado = document.querySelector(".mostrar-resulatdo");


    // Validação dos campos

    // Validação do campo do user name
    if (inputUserName.length === 0) {

        resultado.innerHTML = `Erro - Campo User Name está vaziu!`;
        resultado.style.color = `#FF0000`;
        return; // Sai da função caso haja erro!

    // Validação do campo da password
    } else if (inputUserPassword.length === 0) {

        // resultado.innerHTML = ``;
        resultado.innerHTML = `Erro - Campo Password está vaziu!`;
        resultado.style.color = `#FF0000`;
        return; // Sai da função caso haja erro!


    } else if (userName !== inputUserName) {

        resultado.innerHTML = `Nome do usuário errado!`;
        resultado.style.color = `#FF0000`;

    } else if (userPassword !== inputUserPassword) {

        resultado.innerHTML = `Password incorrecta!`;
        resultado.style.color = `#FF0000`;

    } else {

         resultado.innerHTML = `Acesso Concedido!`;
         resultado.style.color = `#00FF00`;

    }

}