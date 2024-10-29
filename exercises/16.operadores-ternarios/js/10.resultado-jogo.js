/**
 * 10 - Resultado de Jogo
Escreva um código que determine se o jogador ganhou ("Ganhou!") ou perdeu ("Perdeu!") com base na quantidade de pontos obtidos no jogo.
Considere 50 pontos como valor mínimo para ganhar.
 */

var pontos = Number(prompt("Digita os pontos obtidos no jogo: "))

var resultado = 
pontos >= 50 ? ` Teve ${pontos} pontos no jogo. GANHOU!` : 
pontos >= 1 ? ` Teve ${pontos} pontos no jogo. PERDEU!` : 
`NÃO TEVE NENHUM PONTO!`

alert(resultado)