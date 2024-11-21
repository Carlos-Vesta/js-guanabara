
// Ordenação Padrão (Alfabética)
let nomes = ["Carlos", "Ana Rodrigues", "Sualé", "Ana Maria"];

// Ordenação Numérica
let numeros = [5, 7, 4, 12, 6, 8];

// Ordenação de Objectos
let dadosPessoais = [

    {nome: "Carlos", idade: 35, sexo: "Masculino"},
    {nome: "Maura", idade: 20, sexo: "Feminino"},
    {nome: "Henriques", idade: 19, sexo: "Masculino"},
    {nome: "Débora Langa", idade: 40, sexo: "Feminino"},
    {nome: "Osvaldo", idade: 15, sexo: "Masculino"},
];



// Ordenação Padrão (Alfabética)
console.log(`Os nomes em ordem alfabética: ${nomes.sort()}`);

// Ordenação Numérica Crescente
numeros.sort((a, b) => a - b);
console.log(`Os números em ordem numérica crescente: ${numeros}`);

// Ordenação Numérica Decrescente
let numerosDecrescentes = numeros.sort((a, b) => b - a);
console.log(`Os números em ordem numérica decrescente: ${numerosDecrescentes}`);


// Ordenação de Objectos
dadosPessoais.sort((a, b) => a.idade - b.idade);
console.log(dadosPessoais);

