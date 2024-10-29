/**
 * 6 - Escolha de Fruta
Crie um programa que determina a cor de uma fruta com base no nome da fruta fornecido. 
Considere ("Amarelo" para banana, "Vermelho" para maçã, e "Desconhecido" para outras frutas).
 */

var fruta = String(prompt("Digite o nome da fruta e veja que cor ela tem. Escolha entre banana, pera, uva e laranja: "))

var corDaFruta = fruta === "banana" ? `A ${fruta.toUpperCase()} tem cor AMARELA.` : 
fruta === "pera" ? `A ${fruta.toUpperCase()} tem cor VERDE.`: 
fruta === "uva" ? `A ${fruta.toUpperCase()} tem cor de VINHO.` :
fruta === "laranja" ? `A ${fruta.toUpperCase()} tem cor LARANJA.` : 
`${fruta.toUpperCase()}. Essa fruta não foi sugerida pelo nosso sistema. FRUTA DESCONHECIDA.`

alert(corDaFruta)