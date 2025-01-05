/**
 * 9 - Seleção de Vestuário
Peça ao usuário para informar o clima (frio, ameno, quente). 
Use `switch case` para sugerir as roupas apropriadas para cada clima.

 */


document.querySelector(".input-button").addEventListener("click", escolherRoupa);

function escolherRoupa() {
   

    let clima = document.querySelector("input[type=radio]:checked"); // Retorna o valor do radio selecionado (checked)
    let resultado = document.querySelector(".div-resultado"); 


    // Validação do formulário
    if (clima !== "input[type=radio]:checked") {
        resultado.innerHTML = `Selecione uma das opções acima.`;
        resultado.style.color = "#FF0000";

    }


    // Selcção do clima
    switch (clima.value) {
        case "Frio":
            resultado.innerHTML = `<strong><span style="font-size: 1.8rem;">Clima ${clima.value}</span></strong><br><br>
            <strong>Camadas:</strong> Camisetas térmicas, suéteres, casacos, jaquetas, sobretudo.<br><br>
            <strong>Tecidos:</strong> Lã, fleece, algodão grosso, couro.<br><br>
            <strong>Calçados:</strong> Botas de cano alto, tênis impermeáveis, sapatilhas forradas.<br><br>
            <strong>Acessórios:</strong> Gorros, luvas, cachecóis.<br>`;
            resultado.style.color = "#000000";
            resultado.style.textAlign = "justify";
            break;

        case "Ameno":
            resultado.innerHTML = `<strong><span style="font-size: 1.8rem;">Clima ${clima.value}</span></strong><br><br>
            <strong>Versatilidade:</strong> Camisas de manga longa, cardigans, blazers, jaquetas leves.<br><br>
            <strong>Tecidos:</strong> Algodão, linho, viscose.<br><br>
            <strong>Calçados:</strong> Tênis, sapatilhas, botas de cano baixo.<br><br>
            <strong>Acessórios:</strong> Lenços, cintos.<br>`;
            resultado.style.color = "#000000";
            resultado.style.textAlign = "justify";
            break;

        case "Quente":
            resultado.innerHTML = `<strong><span style="font-size: 1.8rem;">Clima ${clima.value}</span></strong><br><br>
            <strong>Leveza:</strong> Vestidos, saias, shorts, camisetas.<br><br>
            <strong>Tecidos:</strong> Algodão, linho, viscose.<br><br>
            <strong>Calçados:</strong> Sandálias, rasteirinhas, tênis leves.<br><br>
            <strong>Acessórios:</strong> Chapéus, óculos de sol.<br>`;
            resultado.style.color = "#000000";
            resultado.style.textAlign = "justify";
            break;
    }

}