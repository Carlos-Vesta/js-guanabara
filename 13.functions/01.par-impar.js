

function parImpar(numero) { //Recebe um parâmetro "numero"

    if (numero % 2 == 0) { // Verifica se o valor atribuído ao parâmetro "numero" é par ou impar
        return `O número ${numero} é PAR!`; // Retorno de número PAR
    } else {
        return `O número ${numero} é ÍMPAR!`; // // Retorno de número ÍMPAR
    };
    
};

console.log(parImpar(13)); // Visualiza a resposta