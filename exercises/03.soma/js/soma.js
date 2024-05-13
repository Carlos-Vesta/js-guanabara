/*

    Crie um script em que leia dois números e mostre o resultado da soma entre eles.
    Ex: O resultado da soma de 3 e 7 é 10.
 
 */

var numero_1 = Number(prompt('Digite o primeiro número: '))
var numero_2 = Number(prompt('Digite o segundo número: '))

var soma = numero_1 + numero_2

window.alert(`O resultado da soma entre ${numero_1} e ${numero_2} é ${soma}`)