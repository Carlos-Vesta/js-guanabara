/**
 * Cálculo de Desconto
 * Crie um formulário onde o usuário insira o valor de uma compra. 
 * Use `if` para aplicar um desconto baseado no valor:
 * - Até R$ 100: sem desconto
 * - De R$ 100 a R$ 500: 10% de desconto
 * - Acima de R$ 500: 20% de desconto
 */


// Criar o escutador
document.querySelector(".input-button").addEventListener("click", calcularDesconto);


// Inicialização da função para calcular o desconto
function calcularDesconto() {

    // Definir as variáveis
    let valor = document.querySelector("#input-desconto").value.trim(); // .trim() remove espaços em branco
    let resultado = document.querySelector(".mostrar-resultado");


    // Validação do Campo se estiver vazio
    if (valor.length === 0) {

        resultado.innerHTML = `Erro - Campo vazio!`;
        resultado.style.color = `#FF0000`;
        return; // Sai da função se houver erro
    }


    // Converte o valor de String para Number
    let valorNumerico = Number(valor);

    // Verifica se o valor é um número válido
    if (isNaN(valorNumerico) || valorNumerico < 0) {

        resultado.innerHTML = `Erro! Valor inválido (deve ser um número positivo)`;
        resultado.style.color = `#FF0000`;
        return; // Sai da função se houver erro
    }


    // Inicializa variáveis para desconto e valor final
    let desconto = 0;


    // Determina o percentual com base no valor
    if (valorNumerico < 100) {

        resultado.innerHTML = `<strong>${valor}MT</strong>: Não tem desconto!`;

    } else if (valorNumerico < 500) {

        desconto = valorNumerico * 0.1; // 10% do desconto
        resultado.innerHTML = `<strong>${valor}MT</strong>: Tem 10% de desconto! <br>
                               <strong>Valor do desconto</strong>: ${desconto.toFixed(2)}MT <br>
                               <strong>Valor com desconto</strong>: ${(valorNumerico - desconto).toFixed(2)}MT`;

    } else {

        desconto = valorNumerico * 0.2; // 20% de desconto
        resultado.innerHTML = `<strong>${valor}MT</strong>: Tem 20% de desconto! <br>
                               <strong>Valor do desconto</strong>: ${desconto.toFixed(2)}MT <br>
                               <strong>Valor com desconto</strong>: ${(valorNumerico - desconto).toFixed(2)}MT`;

    }

    // Define a cor do texto do resultado
    resultado.style.color = `#000000`
}