
/** 7. Verifique se uma string tem o mesmo valor que outra. */


var texto1 = String(prompt("Digite o primeiro texto: "))
var texto2 = String(prompt("Digite o segundo texto: "))

var mesmoValor = texto1 == texto2

alert(`O texto 1 ( ${texto1} ) é igual ao texto 2 ( ${texto2} )? ${mesmoValor}`)