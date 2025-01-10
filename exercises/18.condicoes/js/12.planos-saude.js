/**
 * 12 - Planos de Saúde
Crie uma aplicação que peça ao usuário a idade e o sexo. 
Use `if`, `else if` e `else` para determinar o valor do plano de saúde:
- Masculino: R$ 200 + R$ 50 por ano acima de 30 anos.
- Feminino: R$ 180 + R$ 30 por ano acima de 30 anos.

     * valor base homem = 200; 
     * valor base mulher = 180
     * idade base = 30
       acrescimo base homem = 50;  
       acrescimo base mulher = 30;
    
       acrescimo por idade = idade - 30 anos
       valor do acrescimo = acrescimo por idade * acrescimo base
       valor total = valor base + valor do acrescimo
 */

document.querySelector(".input-button").addEventListener("click", verificarPlano);



function verificarPlano() {
    
    // Declaração das variáveis
    let age = document.querySelector("#input-idade").value.trim();
    let gender = document.querySelector("input[type=radio]:checked");
    let viewResult = document.querySelector(".div-resultado");

    // Valores bases
    const baseValueMan = 200; // Valor base do homem
    const baseValueWoman = 180; // valor base da mulher
    const baseAge = 30; // Idade base

    // Acrescimos bases
    const baseAdditionMan = 50; // Acrescimo base do homem
    const baseAdditionWoman = 30; // Acrescimo base da mulher

    let increaseByAge = Number(age) - baseAge; // Cálculo da diferença da idade

    // Valores dos acrescimos
    let increaseValueMan = increaseByAge * baseAdditionMan; // Valor do acrescimo do homem
    let increaseValueWoman = increaseByAge * baseAdditionWoman; // Valor do acrescimo da mulher

    // Valores finais
    let finalValueMan = baseValueMan + increaseValueMan; // Valor final do homem
    let finalValueWoman = baseValueWoman + increaseValueWoman; // Valor final da mulher
    


    viewResult.innerHTML = ``;
    
    // ############ Validação dos inputs ############
    if (age.length === 0) {
        viewResult.innerHTML = `Erro - o campo idade não deve estar vazio.`;
        viewResult.style.color = "#FF0000";
        return;

    } else if (Number(age) < 0) {
        viewResult.innerHTML = `Erro - apenas números inteiros.`;
        viewResult.style.color = "#FF0000";
        return;

    } else if (isNaN(Number(age))) {
        viewResult.innerHTML = `Preencha os dados correctamente, apenas números.`;
        viewResult.style.color = "#FF0000";
        return;

    } else if (gender === null) {
        viewResult.innerHTML = `Erro - Escolha o sexo.`;
        viewResult.style.color = "#FF0000";
        return;
    }


    // ################## Calculando o Plano de Saúde ##################
    if (age <= baseAge && gender.value === "Masculino") {
        viewResult.innerHTML = `O seu plano de saúde base é de <strong>${baseValueMan} MT</strong> até aos ${baseAge} anos.
        A sua idade é <strong>${Number(age)}</strong> anos, e por ser menor ou igual a ${baseAge} anos, não contempla nenhum acrescimo.`;
        viewResult.style.color = "#000000";
        viewResult.style.textAlign = "justify";
        return;

    } else if (age <= baseAge && gender.value === "Feminino") {
        viewResult.innerHTML = `O seu plano de saúde base é de <strong>${baseValueWoman} MT</strong> até aos ${baseAge} anos.
        A sua idade é <strong>${Number(age)}</strong> anos, e por ser menor ou igual a ${baseAge} anos, não contempla nenhum acrescimo.`;
        viewResult.style.color = "#000000";
        viewResult.style.textAlign = "justify";
        return;
        
    } else if (age > baseAge && gender.value === "Masculino") {
        viewResult.innerHTML = `O seu plano de saúde base é de <strong>${baseValueMan} MT</strong> até aos ${baseAge} anos. O mesmo, tem um acrescimo base de <strong>${baseAdditionMan} MT</strong> 
        por ano, após os ${baseAge} ano(s), e que em um período de ${increaseByAge} ano(s) acumulou um valor igual à <strong>${increaseValueMan} MT</strong>.
        Assim sendo, o seu plano de saúde custa um total de <strong>${finalValueMan} MT</strong>.`;
        viewResult.style.color = "#000000";
        viewResult.style.textAlign = "justify";
        return;
        
    } else if (age > baseAge && gender.value === "Feminino") {
        viewResult.innerHTML = `O seu plano de saúde base é de <strong>${baseValueWoman} MT</strong> até aos ${baseAge} anos. O mesmo, tem um acrescimo base de <strong>${baseAdditionWoman} MT</strong> 
        por ano, após os ${baseAge} ano(s), e que em um período de ${increaseByAge} ano(s) acumulou um valor igual à <strong>${increaseValueWoman} MT</strong>.
        Assim sendo, o seu plano de saúde custa um total de <strong>${finalValueWoman} MT</strong>.`;
        viewResult.style.color = "#000000";
        viewResult.style.textAlign = "justify";
        return;
    }
}