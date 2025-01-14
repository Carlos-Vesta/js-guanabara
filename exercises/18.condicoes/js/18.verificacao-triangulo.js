/**
 *  18 - Verificação de Triângulo
    Peça ao usuário três lados e use `if` e `else` para verificar se esses lados 
    podem formar um triângulo e, se sim, qual tipo (equilátero, isósceles ou escaleno).

    Para que três medidas de lados possam formar um triângulo, 
    elas devem satisfazer a Desigualdade Triangular.

    "Condições da Desigualdade Triangular"
    Soma dos Dois Lados: A soma de qualquer dois lados deve ser maior que o comprimento do terceiro lado:
        a + b > c
        a + c > b
        b + c > a

    Para determinar o tipo de triângulo a partir das medidas dos lados, 
    você pode seguir as seguintes classificações:

    1 - Triângulo Equilátero: Todos os três lados têm a mesma medida.
    Ex: a = b = c

    2 - Triângulo Isósceles: Possui pelo menos dois lados com a mesma medida.
    Ex: a = b ou a = c ou b = c

    3 - Triângulo Escaleno: Todos os três lados têm medidas diferentes.
    Ex: a != b != c
    
 */


// Criar o escutador
document.querySelector(".input-button").addEventListener("click", verificarTrangulo);

function verificarTrangulo() {
    // Atribuição das variáveis
    let side_1 = document.querySelector("#lado-1").value.trim();
    let side_2 = document.querySelector("#lado-2").value.trim();
    let side_3 = document.querySelector("#lado-3").value.trim();

    let viewResult = document.querySelector(".div-resultado");

    // Limpar a área do resultado ao carregar
    viewResult.innerHTML = ``;

    // Conversão dos lados para números
    const numSide1 = Number(side_1);
    const numSide2 = Number(side_2);
    const numSide3 = Number(side_3);

    // Validação dos lados
    function validateSide(side, sideName) {
        if (side.length === 0) {
            return `Campo <strong>${sideName}</strong> está vazio, preencha os dados correctamente.`;
        } else if (isNaN(Number(side))) {
            return `Erro - <strong>${sideName}</strong>, apenas números são permitidos.`;
        } else if (Number(side) < 0) {
            return `Erro - <strong>${sideName}</strong>, use apenas números positivos.`;
        }
        return null; // Retorna null se não houver erro
    }

    let erroMessage = validateSide(side_1, "lado 1") ||
                      validateSide(side_2, "lado 2") ||
                      validateSide(side_3, "lado 3");

    if (erroMessage) {
        viewResult.innerHTML = `${erroMessage}`;
        viewResult.style.color = `#FF0000`;
        viewResult.style.fontSize = `0.9rem`;
        return; // Interrompe a execução após mostrar erro
    }

    // Condições da Desigualdade Triangular
    if ((numSide1 + numSide2) > numSide3 && 
        (numSide1 + numSide3) > numSide2 && 
        (numSide2 + numSide3) > numSide1) {

        viewResult.innerHTML = `Os lados <strong>${numSide1}, ${numSide2} e ${numSide3}</strong>, podem formar um triângulo.`;
        
        // Classificação do tipo de triângulo
        let tipoTriangulo;
        
        if (numSide1 === numSide2 && numSide2 === numSide3) {
            tipoTriangulo = "Equilátero"; // Todos os lados iguais
        } else if (numSide1 === numSide2 || numSide1 === numSide3 || numSide2 === numSide3) {
            tipoTriangulo = "Isósceles"; // Pelo menos dois lados iguais
        } else {
            tipoTriangulo = "Escaleno"; // Todos os lados diferentes
        }

        viewResult.innerHTML += `<br>O triângulo é do tipo: <strong>${tipoTriangulo}</strong>`;

    } else {
        
        viewResult.innerHTML = `Os lados <strong>${numSide1}, ${numSide2} e ${numSide3}</strong>, não podem formar um triângulo.`;
        
    }
    
    // Definindo o estilo do resultado após todas as verificações
    viewResult.style.color = `#000000`;
}





















// // Criar o escutador
// document.querySelector(".input-button").addEventListener("click", verificarTrangulo);


// function verificarTrangulo() {

//     // Atribução das variáveis
//     let side_1 = document.querySelector("#lado-1").value.trim();
//     let side_2 = document.querySelector("#lado-2").value.trim();
//     let side_3 = document.querySelector("#lado-3").value.trim();

//     let viewResult = document.querySelector(".div-resultado");

//     // Limpar os a área do resultado ao carregar
//     viewResult.innerHTML = ``;


//     // Validação dos campos do formulário
//     function validateSide(side, sideName) {

//         if (side.length === 0) {
//             return `Campo <strong>${sideName}</strong> está vazio, preencha os dados correctamente.`;

//         } else if (isNaN(Number(side))) {
//             return `Erro - <strong>${sideName}</strong>, apenas números são permitidos.`;

//         } else if (Number(side) < 0) {
//             return `Erro - <strong>${sideName}</strong>, use apenas números positivos.`;
//         }
//         return null; // Retorna null se não houver erro
//     }

//     // Validação dos lados
//     let erroMessage = validateSide(side_1, "lado 1") ||
//                       validateSide(side_2, "lado 2") ||
//                       validateSide(side_3, "lado 3");

//     if (erroMessage) {
//         viewResult.innerHTML = `${erroMessage}`;
//         viewResult.style.color = `#FF0000`;
//         viewResult.style.fontSize = `0.9rem`;
//     }



//     // Condições da Desigualdade Triangular
//     if ((side_1 + side_2) > side_3 && 
//         (side_1 + side_3) > side_2 && 
//         (side_2 + side_3) > side_1) {

//         viewResult.innerHTML = `Os lados <strong>${side_1}, 
//         ${side_2} e ${side_3}</strong>, podem formar uma triângulo.`;
//         viewResult.style.color = `#000000`;
//         // viewResult.style.fontSize = `0.9em`;
//         return;

//     } else {

//         viewResult.innerHTML = `Os lados <strong>${side_1}, 
//         ${side_2} e ${side_3}</strong>, não podem formar uma triângulo.`;
//         viewResult.style.color = `#000000`;
//         // viewResult.style.textAlign = `0.9em`;
//         return;
//     } 

// }

