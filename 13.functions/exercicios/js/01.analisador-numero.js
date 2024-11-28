/**
 * === ARRAYS E FUNCTIONS ===
 * Crie um programa que permita adicionar números entre 1 à 100, em um array,
 * e mostre o mesmo em uma lista (valor 6 adicionado.). Valide o campo para que não
 * aceite enviar o formulário se o campo estiver vaziu, que não haja repetição de números, 
 * que não seja possível adicionar números fora do intevalo e que não seja possível finalizar a lista se
 * ela estiver vazia.
 * 
 * Após feita a lista, devemos finaliza-la, clicando no botão "Finalizar" que irá
 * visualizar o total de números adicionados a lista, o maior número da lista, o 
 * menor número da lista, a soma dos números da lista e a média dos números da lista.
 * 
 * Caso se adicione um novo valor ou número a lista, o programa deve gerar uma nova lista
 * actualizada.
 * 
 */

// Criar o escutador para o botão "Adicionar Número"
document.querySelector(".input-adicionar").addEventListener("click", adicionar);


// Atribuição das variáveis
let numero = document.querySelector("#input-numero");
let verLista = document.querySelector("#select-number");
let resultadoDiv = document.querySelector(".mostrar-resultado");
let valoresLista =[];



//  Para fazer a adição do número, iremos usar duas funções

 /** 
  * FUNÇÃO 1: isNumero => poderia ter outro nome qualquer, foi definida para fazer uma análise do 
  * "numero.value" se é ou não um número!
 */
function isNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;

    } else {
        return false;
    };
};


/** 
 * FUNÇÃO 2: !inLista => poderia ter outro nome qualquer, foi definida para fazer uma análise do 
 * "numero.value" para saber se o número que foi digitado está na lista ou não!
*/
function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;

    } else {
        return false;
    };
 };


// Inicialização da função adicionar
function adicionar() {
    resultadoDiv.innerHTML = ``; // Limpa a caixa da mensagem

    // Verifica se é um número e se já faz parte da lista
    if (isNumero(numero.value) && !isLista(numero.value, valoresLista)) {
        // Adicionar Valores no Array ou na lista
        valoresLista.push(Number(numero.value));
        
        // Adicionar o elemento no select a partir de um option
        let elemento = document.createElement('option'); // Cria um elemento do tipo option
        elemento.text = `Valor ${Number(numero.value)} adicionado`; // Adiciona o texto ao elemento option
        verLista.appendChild(elemento); // Adiciona o elemento option ao select

    } else {
        resultadoDiv.innerHTML = ` <p style="color: red; text-align: center;">Valor inválido ou já encontrado na lista!</p> `;
    };

    numero.value = ``; // Remove o elemento da caixa do texto "#input-numero" ou limpa a caixa do texto
    numero.focus(); // Coloca o cursor na caixa do texto
};


// Criar o escutador para o botão "Finalizar Lista"
document.querySelector(".input-finalizar").addEventListener("click", finalizar);

// Inicialização da função finalizar
function finalizar() {
    // Validação do campo
    if (valoresLista.length == 0) {
        resultadoDiv.innerHTML = ` <p style="color: red; text-align: center;"> Adicione valores antes de finalizar!</p> `;

    } else {
        resultadoDiv.innerHTML = ``; // Limpa a caixa da mensagem

        /**
         * Atribuição de variáveis para procura do maior e o menor valor da lista, 
         * cálculo da soma e da média dos valores da lista
         */
        let totalElementos = valoresLista.length; // Calcula o total de elementos na lista
        let maiorValorLista = valoresLista[0];
        let menorValorLista = valoresLista[0];
        let soma = 0;
        let media = 0;

        
        for(let posicao in valoresLista) {

           // Procura pelo maior valor da lista
           if (valoresLista[posicao] > maiorValorLista) {
            maiorValorLista = valoresLista[posicao];
           };

           // Procura pelo menor valor da lista
           if (valoresLista[posicao] < menorValorLista) {
            menorValorLista = valoresLista[posicao];
           };

            // Cálcular a soma
            soma += valoresLista[posicao];
        };

        // Cálculo da média
        media = soma / totalElementos;

        resultadoDiv.innerHTML += ` <p> Ao todo temos <strong>${totalElementos}</strong> números cadastrados</p> `;
        resultadoDiv.innerHTML += ` <p> O maior valor da lista é <strong>${maiorValorLista}</strong></p> `;
        resultadoDiv.innerHTML += ` <p> O menor valor da lista é <strong>${menorValorLista}</strong></p> `;
        resultadoDiv.innerHTML += ` <p> Somando todos os valores da lista, temos <strong>${soma}</strong></p> `;
        resultadoDiv.innerHTML += ` <p> A média dos valores da lista é <strong>${media.toFixed(2)}</strong></p> `;
    }

}





















// Validação do Intervalo dos Números
// function isNumero(n) {
//     if (Number(n) >= 1 && Number(n) <= 100) {
//         return true;
        
//     } else {
//         return false;
//     };
// };

// // Validação dos Números na Lista
// function inLista(n, l) {
//     if (l.indexOf(Number(n)) != -1) {
//         return true;

//     } else {
//         return false;
//     };
// };



// // Inicialização da função Adicionar Número
// function adicionar() {

//     // Verificar se o número está na lista
//     if (isNumero(numero) && !inLista(numero, listaNumeros)) {
//         alert("Ok")
//     } else {
//         resultadoParagrafo.innerHTML = `<p>Valor inválido ou já encontrado na lista.</p>`;
//     };
// }; 







