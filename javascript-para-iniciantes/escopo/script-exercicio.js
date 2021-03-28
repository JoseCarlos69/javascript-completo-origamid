//Exercícios

//Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// console.log(var, marca, portas);
//Você deve usar o nome da variável que criou no caso de var, em const e let você não pode pegar o escopo fora do bloco

//Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  //const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));
//Para corrigir você deve declarar o const dois fora do escopo

//O que fazer para total rertornar 500?
/*var*/const numero = 50;

for(/*var*/let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
//Você deve alterar o var dentro do for para o let, assim a variável numero só é usada dentro daquele escopo, alémd de trocar o var do numero = 50 para const