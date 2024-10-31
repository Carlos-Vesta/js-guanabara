// 1 - Chamar a função condigurada no HTML


// Vamos criar uma variável que poderá ser chamada por qualquer função
var area = document.getElementById('div-area')

function clicar() {
    // var area = document.getElementById('div-area')
    area.innerText = "Clicou!"
    area.style.background = "red"
}

function entrar() {
    area.innerText = "Entrou na DIV"
}

function sair() {
    area.innerText = "Saiu da DIV"
    area.style.background = "green"
}


// 2 - Chamar a função directo do JAVASCRIPT com EventListener

var areaDiv2 = document.getElementById("div2-area")

areaDiv2.addEventListener("click", clicarDiv2)
areaDiv2.addEventListener("mouseenter", entrarDiv2)
areaDiv2.addEventListener("mouseout", sairDiv2)


function clicarDiv2() {
    areaDiv2.innerText = "Clicou na Div!"
    areaDiv2.style.background = "blue"
    areaDiv2.style.color = "#FFFFFF"
}


function entrarDiv2() {
    areaDiv2.innerText = "Entrou na Div."
}

function sairDiv2() {
    areaDiv2.innerText = "Saiu da Div."
    areaDiv2.style.background = "orange"
    areaDiv2.style.color = "#000"
}