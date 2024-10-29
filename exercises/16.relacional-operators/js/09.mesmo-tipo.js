

/**9. Verifique se uma variável é do mesmo tipo que outra.*/

/** Não é possível fazer essa comparação usando o PROMPT porque ele retorna uma STRING */

var valor1 = typeof(prompt("Digite o primeiro valor: "))
var valor2 = typeof(prompt("Digite o segundo valor: "))


var mesmoTipo = valor1 === valor2

alert(`A variavel 1 ( ${valor1} ) é do mesmo tipo que a variavel 2 ( ${valor2} )? : ${mesmoTipo}`)