//Funções, é um bloco de código que pode ser executado e reutilizado, valores podem ser passados pela função e a mesma retorna o valor
function areQuadrado(lado) { //Chamada de function declaration
  return lado * lado;
} 

areQuadrado(4) //16
areQuadrado(5) //25
areQuadrado(6) //36
console.log(areQuadrado(4));
console.log(areQuadrado(5));
console.log(areQuadrado(6));

function pi() {
  return 3.14;
}

var total = 5 * pi(); //15.7
console.log(total);
//Parênteses () executam uma função

//Parâmetros e Argumentos, ao criar uma função você passa os parâmetros, ao executar ela você passa os argumentos
function imc(peso, altura) { //peso e altura são os parâmetros
  //Separar por vírgula cada parâmetro, pode-se definir mais de um ou nenhum também
  var imc = peso / (altura * altura);
  return imc;
}

imc(80, 1.80) //80 e 1.80 são argumentos
imc(60, 1.70) //60 e 1.70 são argumentos
console.log(imc(80, 1.80));
console.log(imc(60, 1.70));

//Parênteses executa a função
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
corFavorita(); //Retorna 'Você não gosta de nada'
console.log(corFavorita());
//Se apenas definirmos a função e não executarmos, nada que está dentro dela acontece

//Argumentos podem ser funções, chamamos de Callback, geralmente são funções que ocorrem após algum evento
addEventListener('click', function(){
  console.log('Clicou');
});
//A função possui dois argumentos
//Primeiro é a string 'click'
//Segundo é uma função anônima

//Funções anônimas são aquelas em que o nome da função não é definitivo, escritos como function() {} ou () => {}

//A função pode ou não retornar um valor
//Se não definirmos um valor ela retorna 'undefined'. O código internoi da função é executado mesmo não tendo um valor de return
function imc1(peso, altura) {
  var imc1 = peso / (altura * altura);
  console.log(imc1);
}

imc1(80, 1.80); //retorna o imc
console.log(imc1(80, 1.80)); //retorna o imc e undefined

//Valores retornados, uma função pode retornar qualquer tipo de dado e até outras funções
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true
  } else {
    return false;
  }
}
console.log(terceiraIdade(18));
//CUIDADO, retornr diferentes tipos de dados na mesma função não é uma boa ideia

//Escopo, variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países`;
}
// console.log(totalPaises); //erro, totalPaises não definido

//Escopo Léxico, funções conseguem acessar variáveis que foram criadas no contexto 'pai'
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); //Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); //retorna um erro

//Hosting, antes de executar a função, o JS 'move' todas as funções declaradas para a memória
imc2(80, 1.80); //imc aparece no console

function imc2(peso, altura) {
  var imc2 = peso / (altura * altura);
  console.log(imc2);
}