/**
 * 6 - Soma de Números até 50 (do while)
Use um loop `do while` para somar números a partir de 1 até que a soma atinja ou ultrapasse 50. 
Exiba a soma final no console.
 */


// Inicialização do escutado
window.addEventListener("load", () => {

    // Atribuição das variáveis
    let num = 1;
    let sum = 0;
    let viewResult = document.querySelector(".div-resultado");

    while (num <= 50) {
        viewResult.style.textAlign = `justify`;
        viewResult.innerHTML += `${num}, `;

        sum = sum + num;
        num++;
    }

    viewResult.innerHTML += `<br><br>`;
    viewResult.innerHTML += `A soma de todos os números é igual à <strong>${sum}</strong>`;
});