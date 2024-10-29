/**
 * 8 - Cálculo de Frete
Desenvolva um código que classifique o custo do frete como alto ("Frete alto") ou baixo ("Frete baixo") com base no peso do produto.
Considere 20kg como valor mínimo para frete alto.
 */


var pesoDoProduto = Number(prompt("Digite o peso do produto: "))

var frete = pesoDoProduto >= 20 ? `O produto tem como peso ${pesoDoProduto}kg. \nFRETE ALTO!` :
pesoDoProduto < 20 & pesoDoProduto >= 1 ? `O produto tem como peso ${pesoDoProduto}kg. \nFRETE BAIXO!` :
`O produto tem como peso ${pesoDoProduto}kg. \nNÃO É POSSÍVEL CALCULAR O FRETE!`

alert(frete)