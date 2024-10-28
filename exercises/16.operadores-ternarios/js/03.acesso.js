/**
 * 3 - Mensagem de Acesso
Crie um programa que exiba uma mensagem de boas-vindas ("Bem-vindo!") se o usuário for membro, 
ou uma mensagem de acesso restrito ("Acesso restrito.") caso não seja mebro. 
 */

var user = prompt("Responda com 'Sim' se é membro, ou 'Não' caso não seja: ")

var membro = user === "Sim" ? "Bem Vindo!" : "Acesso Restrito"

alert(`${membro}`)