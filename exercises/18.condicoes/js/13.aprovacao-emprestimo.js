/**
 * 13 - Aprovação de Empréstimo
   Peça ao usuário para inserir seu salário e a quantia que deseja emprestar. 
   Use `if` para verificar se a quantia não ultrapassa 30% do salário para aprovar ou não o empréstimo.
 */


document.querySelector(".input-button").addEventListener("click", aprovacaoEmprestimo);

function aprovacaoEmprestimo() {
    
    // Atribuição de Variáveis
    let wage = document.querySelector("#input-salario").value.trim();
    let loanAmount = document.querySelector("#input-emprestimo").value.trim();
    let viewResult = document.querySelector(".div-resultado");

    let thirtyPercentSalary = Number(wage) * 0.3;
    let loanAmountInPercentage = (Number(loanAmount) * 100) / Number(wage);
    
    viewResult.innerHTML = ``;


    // Validação dos campos

    // Validação do input Salário
    if (wage.length === 0) {
        viewResult.innerHTML = `O campo <strong>salário</strong> não deve estar vazio.`;
        viewResult.style.color = "#FF0000";
        viewResult.style.textAlign = "center";
        return;

    } else if (isNaN(Number(wage))) {
        viewResult.innerHTML = `O valor do <strong>salário</strong> deve ser um número.`;
        viewResult.style.color = "#FF0000";
        viewResult.style.textAlign = "center";
        return;

    } else if (Number(wage) <= 0) {
        viewResult.innerHTML = `O valor do <strong>salário</strong> deve ser maior que <strong>zero (0)</strong>.`;
        viewResult.style.color = "#FF0000";
        viewResult.style.textAlign = "center";
        return;

    // Validação do input Valor do Empréstimo
    } else if (loanAmount.length === 0) {
        viewResult.innerHTML = `O campo <strong>valor do empréstimo</strong> não deve estar vazio.`;
        viewResult.style.color = "#FF0000";
        viewResult.style.textAlign = "center";
        return;

    } else if (isNaN(Number(loanAmount))) {
        viewResult.innerHTML = `O valor do <strong>empréstimo</strong> deve ser um número.`;
        viewResult.style.color = "#FF0000";
        viewResult.style.textAlign = "center";
        return;

    } else if (Number(loanAmount) <= 0) {
        viewResult.innerHTML = `O valor do <strong>empréstimo</strong> deve ser maior que <strong>zero (0)</strong>.`;
        viewResult.style.color = "#FF0000";
        viewResult.style.textAlign = "center";
        return;
    }


    // Aprovar Empréstimo
    if (Number(loanAmount) <= thirtyPercentSalary) {
        viewResult.innerHTML = `O seu salário é <strong>${Number(wage).toFixed(2)} MT</strong>, e pediste um empréstimo no
        valor de <strong>${Number(loanAmount).toFixed(2)} MT</strong>, o que equivale a <strong>${loanAmountInPercentage.toFixed(2)}%</strong>
        do seu salário. Assim sendo: <br><br> Empréstimo <strong>Aprovado</strong>. 😃`;
        viewResult.style.color = "#000000";
        viewResult.style.textAlign = "justify";
        return;

    } else {
        viewResult.innerHTML = `O seu salário é <strong>${Number(wage).toFixed(2)} MT</strong>, e pediste um empréstimo no
        valor de <strong>${Number(loanAmount).toFixed(2)} MT</strong>, o que equivale a <strong>${loanAmountInPercentage.toFixed(2)}%</strong>
        do seu salário. Assim sendo: <br><br> Empréstimo <strong>Não Aprovado</strong>. 😔`;
        viewResult.style.color = "#000000";
        viewResult.style.textAlign = "justify";
        return;
    }
}