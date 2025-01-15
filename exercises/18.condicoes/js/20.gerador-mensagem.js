/**
 * 20 - Gerador de Mensagens
Crie uma aplicação onde o usuário escolhe uma opção (1 a 5) e, usando `switch case`, 
exiba uma mensagem aleatória correspondente a cada número.
 */


// Criar o escutador
document.querySelector(".input-button").addEventListener("click", gerarMensagem);


function gerarMensagem() {

    // Inicialização das variáveis
    let message = document.querySelector("input[type=radio]:checked");
    let viewResult = document.querySelector(".div-resultado");


    // Validação do formulário
    if (message === null) {
        viewResult.innerHTML = `Escolha uma opção para gerar a mensagem.`;
        viewResult.style.color = `#FF0000`;
        return;

    } else {

        switch(message.value) {
            case "1": 
            viewResult.innerHTML = `<strong>${message.value} - Acredite em Si Mesmo</strong><br><br>
            Você é mais forte do que imagina e mais capaz do que acredita. Cada passo 
            que você dá em direcção aos seus sonhos é uma victória. Confie em si mesmo 
            e siga em frente!`;
            viewResult.style.color = `#000000`;
            viewResult.style.textAlign = `justify`;
            break;

            case "2": 
            viewResult.innerHTML = `<strong>${message.value} - O Poder da Persistência</strong><br><br>
            O caminho para o sucesso é pavimentado com desafios e obstáculos. Não desista! 
            Cada dificuldade que você enfrenta é uma oportunidade de crescimento. 
            A persistência é a chave que abre as portas do seu futuro.`;
            viewResult.style.color = `#000000`;
            viewResult.style.textAlign = `justify`;
            break;

            case "3": 
            viewResult.innerHTML = `<strong>${message.value} - Transforme Sonhos em Metas</strong><br><br>
            Sonhar é o primeiro passo, agir é o segundo. Transforme seus sonhos em metas 
            concretas e trabalhe todos os dias para alcançá-las. Lembre-se: grandes 
            conquistas começam com pequenos passos.`;
            viewResult.style.color = `#000000`;
            viewResult.style.textAlign = `justify`;
            break;

            case "4": 
            viewResult.innerHTML = `<strong>${message.value} - Aprenda com os Erros</strong><br><br>
            Os erros não são falhas, mas sim lições disfarçadas. Cada tropeço traz consigo 
            uma oportunidade de aprendizado. Levante-se, reflita e siga em frente com mais 
            sabedoria e determinação.`;
            viewResult.style.color = `#000000`;
            viewResult.style.textAlign = `justify`;
            break;

            case "5": 
            viewResult.innerHTML = `<strong>${message.value} - O Valor da Gratidão</strong><br><br>
            Pratique a gratidão diariamente. Aprecie as pequenas coisas da vida, pois elas 
            são os verdadeiros tesouros. Quando você se concentra no positivo, atrai ainda 
            mais coisas boas para sua vida.`;
            viewResult.style.color = `#000000`;
            viewResult.style.textAlign = `justify`;
            break;
        }
    }
}