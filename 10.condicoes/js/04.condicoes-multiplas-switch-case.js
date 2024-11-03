// Crie um programa que mostre o dia de semana

var data = new Date()
var diaSemana = data.getDay()

/**
 * Esta variável atribui um valor estático ao dia para questões de testes. 
 * Se comentada a linha termos dias dinámicos.
 */
var diaSemana = 0

/**
 * 0 = Doming
 * 1 = Segunda-Feira
 * 2 = Terça-Feira
 * 3 = Quarta-Feira
 * 4 = Quinta-Feira
 * 5 = Sexta-Feira
 * 6 = Sábado
 */


// console.log(diaSemana)

switch(diaSemana) {
    case 0:
        console.log("Domingo")
        break

    case 1:
        console.log("Segunda-Feira")
        break

    case 2:
        console.log("Terça-Feira")
        break

    case 3:
        console.log("Quarta-Feira")
        break

    case 4:
        console.log("Quinta-Feira")
        break

    case 5:
        console.log("Sexta-Feira")
        break

    default:
        console.log("[ERRO!] Dia inválido.")
}