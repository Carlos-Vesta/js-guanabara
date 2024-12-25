/**
 * 8 - Classificação de Índice de Massa Corporal (IMC) 
 * 
 * IMC = peso kg / altura m2
 * 
 * 
Crie um formulário onde o usuário insira seu peso e altura. 
Calcule o IMC e use `if`, `else if` e `else` para classificar:

/**
 * IMC menor que 17  =>  Muito abaixo do Peso
 * Magreza Grave: Pode levar a uma Insuficiência cardíaca,
 * Anemia grave, Enfraquecimento do Sistema Imunológico.
 * 
 * IMC entre 17 e 18.5  =>  Abaixo do Peso
 * Magreza Leve: Propenso a problemas de saúde ligados a
 * desnutrição.
 * 
 * IMC entre 18,5 e 24,9  =>  Peso Normal
 * Eutrófico: Saudável, com menor risco para doenças.
 * 
 * IMC entre 25 e 29,9  =>  Aciam do Peso
 * Sobrepeso: Pode levar a fadiga, varizes e má circulação do sangue.
 * 
 * IMC entre 30 e 34,9  =>  Obesidade I
 * Obesidade Grau I: Pode levar a diabétes, infarto, angina e 
 * aterosclerose.
 * 
 * IMC entre 35 e 39,9  =>  Obesidade II
 * Obesidade Grau II (Obesidade Severa): Pode causar a falta de ar e apneia do sono.
 * 
 * IMC maior que 40  =>  Obesidade III
 * Obesidade Grau III (Obesidade Mórbida): Pode causar refluxo, infarto, AVC, dificuldade
 * para locomoção, entre outros.
*/


// Esutador
document.querySelector(".input-button").addEventListener("click", calcular);


function calcular() {
   
    // Definição das variáveis
    let peso = document.querySelector("#input-peso").value.trim();
    let altura = document.querySelector("#input-altura").value.trim();
    let resultado = document.querySelector(".mostrar-resulatdo");

    // Cálculo do Índice de Massa Corporal
    let imc = Number(peso) / Math.pow(Number(altura), 2);

    resultado.innerHTML = ``;

    // Validação dos campos
    if (peso.length === 0 || peso < 0) {
        resultado.innerHTML = `<span style="font-size: 0.8em;">Erro! O campo do peso está vazio ou valor menor que zero (0).</span>`;
        resultado.style.color = `#FF0000`;
        return;

    } else if (isNaN(peso)) {
        resultado.innerHTML = `<span style="font-size: 0.8em;">Digite um valor válido, apenas números!</span>`
        resultado.style.color = `#FF0000`;
        return;

    } else if (altura.length === 0 || altura < 0) {
        resultado.innerHTML = `<span style="font-size: 0.8em;">Erro! O campo da altura está vazio ou valor menor que zero (0).</span>`;
        resultado.style.color = `#FF0000`;
        return;

    } else if (isNaN(altura)) {
        resultado.innerHTML = `<span style="font-size: 0.8em;">Digite um valor válido, apenas números!</span>`
        resultado.style.color = `#FF0000`;
        return;

    } else if (Number(peso) === 0 && Number(altura) === 0) {
        resultado.innerHTML = `<span style="font-size: 0.8em;">Os valores devem ser maiores que zero (0)!</span>`
        resultado.style.color = `#FF0000`;
        return;

    } else if (Number(peso) > 0 && Number(altura) === 0) {
        resultado.innerHTML = `<span style="font-size: 0.8em;">O valor da altura deve ser maior que zero (0)!</span>`
        resultado.style.color = `#FF0000`;
        return;

    }



    // Classificação do Índice de Massa Corporal
    if (imc < 17) {
        resultado.innerHTML = `<strong>IMC = ${imc.toFixed(2)} kg/m2</strong> : Muito abaixo do Peso.<br><br>
        <span style="font-size: 0.8em;"><strong>Magreza Grave</strong>: Pode levar a uma Insuficiência cardíaca, Anemia grave, Enfraquecimento do Sistema Imunológico.</span>`;
        resultado.style.color = `#000000`;

    } else if (imc >= 17 && imc <= 18.5) {
        resultado.innerHTML = `<strong>IMC = ${imc.toFixed(2)} kg/m2</strong> : Abaixo do Peso.<br><br>
        <span style="font-size: 0.8em;"><strong>Magreza Leve</strong>: Propenso a problemas de saúde ligados a desnutrição.</span>`;
        resultado.style.color = `#000000`;

    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `<strong>IMC = ${imc.toFixed(2)} kg/m2</strong> : Peso Normal.<br><br>
        <span style="font-size: 0.8em;"><strong>Eutrófico</strong>: Saudável, com menor risco para doenças.</span>`;
        resultado.style.color = `#000000`;
        
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `<strong>IMC = ${imc.toFixed(2)} kg/m2</strong> : Aciam do Peso.<br><br>
        <span style="font-size: 0.8em;"><strong>Sobrepeso</strong>: Pode levar a fadiga, varizes e má circulação do sangue.</span>`;
        resultado.style.color = `#000000`;
        
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `<strong>IMC = ${imc.toFixed(2)} kg/m2</strong> : Obesidade I.<br><br>
        <span style="font-size: 0.8em;"><strong>Obesidade Grau I</strong>: Pode levar a diabétes, infarto, angina e aterosclerose.</span>`;
        resultado.style.color = `#000000`;
        
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `<strong>IMC = ${imc.toFixed(2)} kg/m2</strong> : Obesidade II.<br><br>
        <span style="font-size: 0.8em;"><strong>Obesidade Grau II (Obesidade Severa)</strong>: Pode causar a falta de ar e apneia do sono.</span>`;
        resultado.style.color = `#000000`;
        
    } else if (imc >= 40) {
        resultado.innerHTML = `<strong>IMC = ${imc.toFixed(2)} kg/m2</strong> : Obesidade III.<br><br>
        <span style="font-size: 0.8em;"><strong>Obesidade Grau III (Obesidade Mórbida)</strong>: Pode causar refluxo, infarto, AVC, dificuldade para locomoção, entre outros.</span>`;
        resultado.style.color = `#000000`;
        
    }
    
}