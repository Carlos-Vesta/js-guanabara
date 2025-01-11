/**
 * 14 - Sistema de Feedback
Crie um formulário onde o usuário dá uma nota de 1 a 5. Use `switch case` 
para exibir uma mensagem de feedback correspondente à nota.
 */


// Criação do escutador
document.querySelector(".input-button").addEventListener("click", feedback);


function feedback() {

    // Declaração de variáveis
    let note = document.querySelector("input[type=radio]:checked");
    let viewResult = document.querySelector(".div-resultado");

    // viewResult.innerHTML = ``;

    // Validação do formulário
    if (note === null ) {
        viewResult.innerHTML = `Dê uma nota ao agente para ver a mensagem.`;
        viewResult.style.color = `#FF0000`;

    } else {

       switch (note.value) {

        case "1":
        viewResult.innerHTML = `<strong>Avaliação Nota 1</strong> <br><br>
        Péssimo atendimento! O agente foi rude e não se mostrou disposto a ajudar. 
        Meu problema não foi resolvido e saí mais frustrado do que entrei. 
        Precisa melhorar urgentemente! ⭐`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        break;

        case "2":
        viewResult.innerHTML = `<strong>Avaliação Nota 2</strong> <br><br>
        Infelizmente, não fiquei satisfeito com o atendimento. 
        O agente parecia desinformado e não conseguiu responder às minhas perguntas. 
        Espero que melhorem esse aspecto no futuro. ⭐⭐`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        break;

        case "3":
        viewResult.innerHTML = `<strong>Avaliação Nota 3</strong> <br><br>
        Atendimento razoável. O agente tentou ajudar, mas não conseguiu resolver minha 
        questão de forma satisfatória. A comunicação foi boa, mas a solução deixou a 
        desejar. ⭐⭐⭐`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        break;

        case "4":
        viewResult.innerHTML = `<strong>Avaliação Nota 4</strong> <br><br>
        Bom atendimento, mas houve um pequeno atraso na resolução do meu problema. 
        O agente foi educado e prestativo, mas poderia ter sido mais ágil. 
        No geral, uma experiência positiva. ⭐⭐⭐⭐`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        break;

        case "5":
        viewResult.innerHTML = `<strong>Avaliação Nota 5</strong> <br><br>
        Atendimento excepcional! O agente foi extremamente atencioso e resolveu 
        meu problema rapidamente. Agradeço pela paciência e pela clareza nas explicações. 
        Recomendo a todos! ⭐⭐⭐⭐⭐`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        break;

       }
    }
}