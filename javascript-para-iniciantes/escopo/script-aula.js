//Escopo de Função, variáveis declaradas dentro de funções não são acessadas fora das mesmas
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); //Fusca no console
// console.log(carro); //Erro, carro is not defined
//Escopo evita o conflito entre nomes

//Variável Global (Erro), declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser aceassada em qualquer escopo(global). ISSO È UM ERRO
function mostrarCarro1() {
  carro2 = 'Fusca';
  console.log(carro2);
}

mostrarCarro1(); //Fusca
console.log(carro2); //Fusca
//'use strict' impede isso

//Escopo de Função (Pai), variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções
var carro3 = 'Fusca';
function mostrarCarro2() {
  var frase = `Meu carro é um ${carro3}`;
  console.log(frase);
}

mostrarCarro2(); //Meu carro é um Fusca
console.log(carro3); //Fusca

//Escopo de Bloco, variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variáve é utilizando const e let, pois este respeitam o escopo do bloco
if(true) {
  var carro4 = 'Fusca';
  console.log(carro4);
}
console.log(carro4); //Fusca

//'var' vaza o bloco, mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined
if(false) {
  var carro5 = 'Fusca'
  console.log(carro5);
}
console.log(carro5); //undefined

//Const e LEt no lugar de Var, a partir de agora vamos utilizar apenas const e let para declararmos variáveis
if(true) {
  const carro6 = 'Fusca';
  console.log(carro6);
}
//console.log(carro6); //erro, carro is not defined

//{} cria um bloco, as chaves criam um escopo de bloco, não confundir com a criação de objetos '= {}'
{
  var carro7 = 'Fusca';
  const ano = 2018;
}
console.log(carro7); //Fusca
// console.log(ano); //erro ano is not defined

//For Loop, ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop
for(var i= 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); //10

//For Loop com Let, com o let evitamos que o número vaze
for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); //i is not defined

//Const, mantém o escopo no bloco, imepde a redeclaração e impede a modificação do valor da variável, evitando bugs no código
const mes = 'Dezembro';
//mes = 'Janeiro'; //erro, tentou modificar o valor
//const semana; //erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; //Funciona
//data = 'Janeiro'; //erro

//Let, mantém o escopo no bloco, imepede a redeclaração, mas permite a modificação do valor da variável
let ano;
ano = 2018;
ano++;
console.log(ano); //2019

//let ano = 2020; //erro, redeclarou a variável
//Geralmente vamos utilizar o const