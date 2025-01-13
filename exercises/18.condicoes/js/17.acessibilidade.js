/**
 * 17 - Acessibilidade
Peça ao usuário para informar se ele tem alguma deficiência. 
Use `if` para exibir uma mensagem personalizada sobre as adaptações disponíveis.
 */

// Criar escutador
document.querySelector(".input-button").addEventListener("click", mensagem);

function mensagem() {

    // Declaração das variáveis
    let yesNo = document.querySelector("input[type=radio]:checked");
    let viewResult = document.querySelector(".div-resultado");

    viewResult.innerHTML = ` `;

    if (yesNo === null) {
        viewResult.innerHTML = `Escolha uma das opções acima, <strong>Sim/Não</strong>.`;
        viewResult.style.color = `#FF0000`;
        return;

    } else if (yesNo.value === "Sim") {
        viewResult.innerHTML = `Estamos comprometidos em garantir a acessibilidade física. 
        Nossas instalações possuem rampas, elevadores e banheiros adaptados para atender às suas necessidades.<br><br>

        Oferecemos tecnologia assistiva, como softwares de leitura de tela e dispositivos de entrada alternativos, 
        para facilitar o acesso à informação e comunicação.<br><br>

        Disponibilizamos materiais adaptados, como livros em braille, audiolivros e recursos digitais acessíveis, 
        para garantir que todos possam participar plenamente.<br><br>

        Realizamos treinamentos regulares para nossa equipe sobre inclusão e acessibilidade, assegurando que todos 
        estejam preparados para oferecer o suporte necessário.<br><br>

        Oferecemos serviços de apoio psicológico e orientação para ajudar a lidar com os desafios que podem surgir 
        devido a deficiências.<br><br>

        Estamos abertos a discutir opções de trabalho flexíveis, como horários adaptados ou trabalho remoto, 
        para melhor atender às suas necessidades.<br><br>

        Disponibilizamos transporte acessível para facilitar sua locomoção até nossas instalações.`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        return;

    } else if (yesNo.value === "Não") {
        viewResult.innerHTML = `Óptimo! Não há adaptações necessárias.`;
        viewResult.style.color = `#000000`;
        viewResult.style.textAlign = `justify`;
        return;
    }
}