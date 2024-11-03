
function carregar() {

    
    var mensagem = document.querySelector(".p-mensagem") // Cria um objecto para a mensagem
    var imagem = document.querySelector(".img-imagem") // Cria um objecto para a imagem

    var data = new Date() // Cria um novo objeto de data
    var hora = data.getHours() // É uma função do objeto Date que retorna a hora do objecto data

    // var hora = 12 // Força a hora para questões de testes


    mensagem.innerHTML = `Agora são ${hora} horas.` // Mostra a mensagem com a hora actual



    // Criando as condições para alteração de hora de forma dinâmica 
    if (hora >= 0 && hora < 12) {
        
        // Bom dia
        
        imagem.src = "img/js-manha.png"
        document.body.style.background = "#F6F3EE"

    } else if (hora >= 12 && hora < 18) {

        // Boa tarde

        imagem.src = "img/js-tarde.png"
        document.body.style.background = "#BEAE98"

    } else {

        // Boa noite

        imagem.src = "img/js-noite.png"
        document.body.style.background = "#303A49"
    }
}