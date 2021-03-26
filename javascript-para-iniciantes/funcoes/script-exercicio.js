//Exercícios

//Crie uma função para verificar se um valor é Truthy
function verificar(valor) {
  return !!valor;
}
console.log(verificar(23));
console.log(verificar(-23));
console.log(verificar('palavra'));
console.log(verificar(''));
console.log(verificar(undefined));

//Crie uma função matemática que retorne o perímetro de um quadrado
//Lembrando: perimetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4; 
}
console.log(perimetroQuadrado(10));

//Crie uma função que retorne o seu nome completo
//ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('José', 'Carlos'));

//Crie uma função que verifica se um número é par
function isEven(numero) {
  var modulo = numero % 2;
  if(modulo === 0) {
    return 'É par';
  } else {
    return 'É impar';
  }
}
console.log(isEven(10));
console.log(isEven(9));

//Crie uma função que retorne o tipo de dado do argumento nela (typeof)
function tipoDeArgumento(dado) {
  return typeof(dado);
}
console.log(tipoDeArgumento('9'));
console.log(tipoDeArgumento(9));

//addEventListener é uma função nativa do Javascrip, o primeiro parâmetro é o evento que ocorre e o segundo o Callback, utilize essa função para mostrar no console o seu nome completo quando o evento 'click' ocorrer
addEventListener('click', function(){
  console.log('José Carlos');
})

//Corrija o erro abaixo
var totalPaises1 = 193;
function precisoVisitar1(paisesVisitados1) {
  return `Ainda faltam ${totalPaises1 - paisesVisitados1} países para visitar`;
}
function jaVisitei(paisesVisitados1) {
  return `Já visitei ${paisesVisitados1} do total de ${totalPaises1} países`;
}
console.log(precisoVisitar1(20));
console.log(jaVisitei(20));