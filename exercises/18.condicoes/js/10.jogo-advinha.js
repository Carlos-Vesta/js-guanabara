/**
 * 10 - Jogo da Adivinhação
Crie um jogo simples onde o usuário deve adivinhar um número entre 1 e 10. 
Use `if` e `else` para dar feedback se o palpite está correto ou não.
 */

// Criar o escutador
document.querySelector(".input-button").addEventListener("click", advinharNumero);


// Inicialização da função
function advinharNumero() {


    // Atribuição das variáveis
    let palpite = document.querySelector("#input-palpite").value.trim();
    let resultado = document.querySelector(".div-resultado");

    const numeroMaximo = 10;
  

    // Validação do campo
    if (palpite.length === 0) {
        resultado.innerHTML = `Erro - O campo não deve estar vazio.`;
        resultado.style.color = "#FF0000";
        return;

    } else if (isNaN(Number(palpite)) || Number(palpite) <= 0 || Number(palpite) > 10) {
        resultado.innerHTML = `Erro - Digite um número válido entre 1 à 10.`;
        resultado.style.color = "#FF0000";
        return;
    }

    // Advinhando o número
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    // let numeroSecreto = 10;

    if (Number(palpite) === numeroSecreto) {
        resultado.style.color = "#000000";
        resultado.innerHTML = `O seu número é <strong>${Number(palpite)}</strong> <br>
        O número secreto é <strong>${numeroSecreto}</strong> <br><br>
        Você <strong>GANHOU</strong> O jOGO! 🥳🎈🎆🎇`

    } else if (Number(palpite) !== numeroSecreto) {
        resultado.style.color = "#000000";
        resultado.innerHTML = `O seu número é <strong>${Number(palpite)}</strong> <br>
        O número secreto é <strong>${numeroSecreto}</strong> <br><br>
        Você <strong>PERDEU</strong> O jOGO! 😭😭😭`
    }
}


