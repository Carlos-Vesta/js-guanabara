/*

Faça um algoritmo que leia o preço de um produto e mostre seu novo preço, 
com 5% de desconto.

*/

var precoProduto = Number(prompt('Digite o preço do produto que deseja comprar: '))

var desconto = (precoProduto * 5) / 100
var precoDesconto = precoProduto - desconto

alert(`O produto custa ${precoProduto}, e tem direito a 5% de desconto: \n
5% de ${precoProduto} corresponde à ${desconto}\n 
O seu novo preço do producto ${precoDesconto}`)
