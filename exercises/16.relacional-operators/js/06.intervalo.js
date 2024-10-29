
/** 5. Verifique se um número é maior ou igual a outro. */

var numero = Number(prompt("Digite um numero e verifique se esta no intervalo de 10 a 20: "));

var intervaloMenor = 10;
var intervaloMaior = 20;


var intervalo = numero >= 10 && numero <= 20

alert(`O numero ${numero} faz parte do intervalo de 10 a 20?  ${intervalo}`)