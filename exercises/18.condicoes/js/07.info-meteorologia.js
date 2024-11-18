/**
 * 7 - Informações Meteorológicas
Peça ao usuário que insira a temperatura em graus Celsius. Use `if`, `else if` e `else` para exibir uma mensagem:
- Frio (menor que 10°C)
- Agradável (10°C a 25°C)
- Quente (acima de 25°C)


    Extremamente Frio: (temp <= -60)
    Demasiado Frio: (temp < 0)
    Muito Frio: (temp >= 0 && temp < 10)
    Frio: (temp >= 10 && temp < 20)
    Agradável: (temp >= 20 && temp <= 25)
    Quente: (temp > 25)
    Muito (temp > 30)
    Demasiado Quente: (temp > 40)
    Extremamente Quente: (temp > 50)

 */



// Criar o escutador
document.querySelector(".input-button").addEventListener("click", verTemperatura);


// Inicialização da função
function verTemperatura() {

    // Criação das variáveis
    let temperatura = document.querySelector("#input-temperatura").value.trim();
    let resultado = document.querySelector(".mostrar-resulatdo") ;


    resultado.innerHTML = ``

    temperaturaConvertida = Number(temperatura)

    // Validação do campo
    if (temperatura.length === 0) {

        resultado.innerHTML = `Erro - Campo vaziu!`;
        resultado.style.color = `#FF0000`;
        return;

    // Temperaturas Frias
    } else if (temperaturaConvertida <= -60) {

        resultado.innerHTML = `<strong>${temperaturaConvertida}°C</strong>: Extremamente Frio.`;
        resultado.style.color = `#000000`;

    } else if (temperaturaConvertida < 0) {

        resultado.innerHTML = `<strong>${temperaturaConvertida}°C</strong>: Demasiado Frio.`;
        resultado.style.color = `#000000`;

    } else if (temperaturaConvertida >= 0 && temperaturaConvertida < 10) {

        resultado.innerHTML = `<strong>${temperaturaConvertida}°C</strong>: Muito Frio.`;
        resultado.style.color = `#000000`;

    } else if (temperaturaConvertida >= 10 && temperaturaConvertida < 20) {

        resultado.innerHTML = `<strong>${temperaturaConvertida}°C</strong>: Frio.`;
        resultado.style.color = `#000000`;

    } else if (temperaturaConvertida >= 20 && temperaturaConvertida < 26) {

        resultado.innerHTML = `<strong>${temperaturaConvertida}°C</strong>: Agradável.`;
        resultado.style.color = `#000000`;

    } else if (temperaturaConvertida >= 26 && temperaturaConvertida < 30) {

        resultado.innerHTML = `<strong>${temperaturaConvertida}°C</strong>: Quente.`;
        resultado.style.color = `#000000`;

    } else if (temperaturaConvertida >= 30 && temperaturaConvertida < 40) {

        resultado.innerHTML = `<strong>${temperaturaConvertida}°C</strong>: Muito Quente.`;
        resultado.style.color = `#000000`;

    } else if (temperaturaConvertida >= 40 && temperaturaConvertida < 50) {

        resultado.innerHTML = `<strong>${temperaturaConvertida}°C</strong>: Demasiado Quente.`;
        resultado.style.color = `#000000`;

    } else if (temperaturaConvertida >= 50) {

        resultado.innerHTML = `<strong>${temperaturaConvertida}°C</strong>: Extremamente Quente.`;
        resultado.style.color = `#000000`;

    }
}