/**
 * 16 - Cálculo de Imposto
Crie uma aplicação que peça ao usuário para inserir sua renda. 
Use `if`, `else if` e `else` para calcular o imposto devido:
- Até R$ 2.000: isento
- R$ 2.001 a R$ 5.000: 10%
- Acima de R$ 5.000: 20%
 */

// Criar o escutador
document.querySelector(".input-button").addEventListener("click", calcularImposto);


function calcularImposto() {

    // Inicialização das variáveis
    let income = document.querySelector("#renda").value.trim();
    let viewResult = document.querySelector(".div-resultado");

    // Variáveis percentuais
    let tenPercentTax = Number(income) * 0.1;
    let twentyPercentTax = Number(income) * 0.2;



    viewResult.innerHTML = ``;


    // Validação dos campos do formulário
    if (income.length === 0) {
        viewResult.innerHTML = `O campo da renda não deve estar vazio.`;
        viewResult.style.color = `#FF0000`;
        return;

    } else if (isNaN(Number(income)) || Number(income) < 0) {
        viewResult.innerHTML = `Apenas números reais positivos são aceites.`;
        viewResult.style.color = `#FF0000`;
        return;
    }


    // Cálculo de Imposto
    if (Number(income) <= 2000) {
        viewResult.innerHTML = `Com a renda de <strong>${Number(income).toFixed()} MT</strong>, está isento a Impostos.`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        return;

    } else if (Number(income) <= 5000) {
        viewResult.innerHTML = `Com a renda de <strong>${Number(income).toFixed()} MT</strong>,tem um Imposto 
        de <strong>${tenPercentTax.toFixed(2)} MT</strong>, correspondente a 10% do valor da renda.`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        return;

    } else if (Number(income) > 5000) {
        viewResult.innerHTML = `Com a renda de <strong>${Number(income).toFixed()} MT</strong>,tem um Imposto 
        de <strong>${twentyPercentTax.toFixed(2)} MT</strong>, correspondente a 20% do valor da renda.`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        return;
    }
}