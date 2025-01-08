/**
 * 11 - Verificação de Par ou Ímpar
Peça ao usuário para inserir um número. 
Use `if` para verificar se o número é par ou ímpar e mostre uma mensagem correspondente.
 */


document.querySelector(".input-button").addEventListener("click", parImpar);

function parImpar() {
   
    // Atribuição das variáveis
    let inpuNumber = document.querySelector("#input-parImpar").value.trim();
    let viewResult = document.querySelector(".div-resultado");

    // Limpa o campo
    viewResult.innerHTML = ``;

    // ############ Validação do input ############
    if (inpuNumber.length === 0) {
        viewResult.innerHTML = `Erro - o campo não deve estar vazio.`;
        viewResult.style.color = "#FF0000";
        return;

    } else if (isNaN(Number(inpuNumber))) {
        viewResult.innerHTML = `Preencha os dados correctamente, apenas números.`;
        viewResult.style.color = "#FF0000";
        return;
    }


     // ############ Verificação de paridade ############
     if (Number(inpuNumber) % 2 === 0 && Number(inpuNumber) < 0) {
        viewResult.innerHTML = `<strong>${inpuNumber}</strong> é um número <strong>Par negativo</strong>.`;
        viewResult.style.color = "#000000";
        return;

     } else if (Number(inpuNumber) % 2 !== 0 && Number(inpuNumber) < 0) {
        viewResult.innerHTML = `<strong>${inpuNumber}</strong> é um número <strong>Impar negativo</strong>.`;
        viewResult.style.color = "#000000";
        return;

     } else if (Number(inpuNumber) % 2 === 0 && Number(inpuNumber) > 0) {
        viewResult.innerHTML = `<strong>${inpuNumber}</strong> é um número <strong>Par positivo</strong>.`;
        viewResult.style.color = "#000000";
        return;

     } else if (Number(inpuNumber) % 2 !== 0 && Number(inpuNumber) > 0) {
        viewResult.innerHTML = `<strong>${inpuNumber}</strong> é um número <strong>Impar positivo</strong>.`;
        viewResult.style.color = "#000000";
        return;

     } else {
        viewResult.innerHTML = `<strong>${inpuNumber}</strong> é um número <strong>Par</strong>.`;
        viewResult.style.color = "#000000";
        return;

     }

}