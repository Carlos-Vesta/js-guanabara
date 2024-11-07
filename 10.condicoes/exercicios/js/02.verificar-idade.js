

var buttonVerificar = document.querySelector(".input-button")
buttonVerificar.addEventListener("click", verificar)


function verificar() {
    
    
    var data_actual = new Date() // Vai pegar a data actual
    var ano_actual = data_actual.getFullYear() // Vai pegar o ano actual

    var valorDoInput = Number(document.querySelector(".input-ano").value) // Vai pegar o valor digitado no input
    var idade = ano_actual - valorDoInput // Calcula a idade
    var sexo = document.getElementsByName("masculino-feminino") // Vai pegar o valor do radio button selecionado
    var genero = "" // Recebe valor vazio
    
    var areaResultado = document.querySelector(".div-imagem") // Vai pegar a area onde será visualizado o resultado
    var alertParagrafo = document.querySelector(".erro-alert") // Vai pegar o paragrafo para mostrar a mensagem do alert

    var criarImagem = document.createElement("img") // Cria um elemento do tipo img
    criarImagem.setAttribute("id", "foto") // Cria um atributo id para o elemento img
    
    
    // alert(valorDoInput)
    // Validação do input para não receber dados vazios ou igual a zero (0)
    if (valorDoInput == 0 || valorDoInput > ano_actual) {
        // alert("[ERRO] Verifique os dados e tente novamente!") 

        alertParagrafo.innerHTML = `<p>[ERRO] Verifique os dados e tente novamente!</p>`
        alertParagrafo.style.backgroundColor = "#c62f4f"
        alertParagrafo.style.padding = "0.1em"
        alertParagrafo.style.color = "#FFFFFF"

    // Configurações para Homens 
    } else if (sexo[0].checked) {
        genero = "Homem"
        // areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

        if (idade >= 0 && idade < 6) {
             // Criança
            genero = "criança"
            criarImagem.setAttribute("src", "img/idade-9.png")
            areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

        } else if (idade < 12) {
            // Adolescente
            genero = "adolescente"
            criarImagem.setAttribute("src", "img/idade-7.png")
            areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

        } else if (idade < 18) {
            // Jovem
            genero = "jovem"
            criarImagem.setAttribute("src", "img/idade-5.png")
            areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

        } else if (idade < 50) {
            // Adulto
            genero = "adulto"
            criarImagem.setAttribute("src", "img/idade-3.png")
            areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

        } else {
            // Idoso
            genero = "idoso"
            criarImagem.setAttribute("src", "img/idade-1.png")
            areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        }


        // Configurações para Mulhers 
    } else if (sexo[1].checked) {
        genero = "Mulher"
        // areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

        if (idade >= 0 && idade < 6) {
            // Criança
           genero = "criança"
           criarImagem.setAttribute("src", "img/idade-10.png")
           areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

       } else if (idade < 12) {
           // Adolescente
           genero = "uma adolescente"
           criarImagem.setAttribute("src", "img/idade-8.png")
           areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

       } else if (idade < 18) {
           // Jovem
           genero = "uma jovem"
           criarImagem.setAttribute("src", "img/idade-6.png")
           areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

       } else if (idade < 50) {
           // Adulto
           genero = "uma mulher adulta"
           criarImagem.setAttribute("src", "img/idade-4.png")
           areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

       } else {
           // Idoso
           genero = "uma mulher idosa"
           criarImagem.setAttribute("src", "img/idade-2.png")
           areaResultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
       }

        
    }

    areaResultado.appendChild(criarImagem)

}

