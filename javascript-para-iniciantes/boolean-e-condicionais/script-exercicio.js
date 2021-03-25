//Exercicios

//Verifique se a sua idade é maior do que a de algum parente e escreva dependendo do valor no console se é maior, menor ou igual
var minhaIdade = 18;
var idadeMeuPai = 39;

if(minhaIdade > idadeMeuPai) {
  console.log('É maior');
} else if(minhaIdade < idadeMeuPai ) {
  console.log('É menor');
} else {
  console.log('É igual');
}

//Qual o valor é retornado na seguinte expressão? //3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

//Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'André'; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('Brasil tem menos habitantes');
}

//O que irá aparecer no console? //Falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//O que irá aparecer no console? // Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}