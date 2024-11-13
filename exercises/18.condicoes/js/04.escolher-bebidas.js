/**
 * 4 - Escolha de Bebidas
    Peça ao usuário que escolha uma bebida (água, refrigerante, cerveja). 
    Use `switch case` para mostrar uma mensagem diferente para cada escolha.
 */

// Ciar o escutador
let inputButton = document.querySelector(".input-button")
inputButton.addEventListener("click", escolherBebida)


// Inicializar a função
function escolherBebida() {



    let bebida = document.querySelector(".input-select").value
    let resultado = document.querySelector(".mostrar-resultado")

    // Validar o input
    switch (bebida) {
        case "":
            resultado.innerHTML = `Erro - Escolha uma bebida!`
            resultado.style.color = `red`
            break

        case "Água":
            resultado.innerHTML = `<strong>${bebida}</strong>: Mantenha-se Hidratado! <br><br>
            A água é essencial para a saúde do corpo. Ela ajuda na digestão, na regulação da 
            temperatura corporal e na eliminação de toxinas. Tente beber pelo menos 2 litros de 
            água por dia, ou mais se você estiver ativo ou em climas quentes. Lembre-se de que a 
            hidratação adequada pode aumentar sua energia e concentração.<br><br>`
            resultado.style.color = `#000000`
            resultado.style.textAlign = `justify`
            break


        case "Refrigerante":
            resultado.innerHTML = `<strong>${bebida}</strong>: Consuma com Moderação! <br><br>
            Os refrigerantes são frequentemente ricos em açúcar e calorias vazias, o que pode 
            levar ao ganho de peso e a problemas de saúde, como diabetes tipo 2 e cáries dentárias. 
            Se você optar por um refrigerante, considere escolher versões sem açúcar ou com baixo 
            teor calórico, e tente limitar o consumo a ocasiões especiais. Lembre-se de que a água 
            é sempre a melhor opção para se manter hidratado.<br><br>`
            resultado.style.color = `#000000`
            resultado.style.textAlign = `justify`
            break

        
        case "Cerveja":
            resultado.innerHTML = `<strong>${bebida}</strong>: Beba Responsavelmente! <br><br>
            Se você escolher beber cerveja, faça isso com moderação. O consumo excessivo de álcool 
            pode levar a sérios problemas de saúde, incluindo doenças do fígado e dependência. 
            Aproveite a cerveja em momentos sociais, mas esteja ciente dos limites recomendados: 
            até uma bebida por dia para mulheres e até duas para homens. Além disso, nunca beba e 
            dirija! Esses conselhos visam promover um consumo consciente e saudável das bebidas 
            mencionadas, ajudando os consumidores a fazer escolhas informadas sobre o que bebem.<br><br>`
            resultado.style.color = `#000000`
            resultado.style.textAlign = `justify`
            break

    }
    
}