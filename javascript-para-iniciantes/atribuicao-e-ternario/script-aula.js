//Comentários, servem para explicar o código
//Comentário de uma linha

/*
Comentário
com diversas
linhas
*/

//var nome = 'André';
//Comentar uma linda de código desativa a mesma. Não deixe linhas de código comentadas no arquivo final

//Operadores de Atribuição
var x = 5;
var y = 10;
x += y; //x = x + y (15)
x -= y; //x = x - y (-5)
x *= y; //x = x * y (50)
x /= y; //x = x / y (0.5)
x %= y; //x = x % y (0)
x **= y; //x = x ** y (97655625)

//Operador Ternário, abreviação de condicionais if e else
var idade = 19
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); //Pode beber
//condição ? true : false
//Geralmente utilizado qunado precisamos atribuir um valor para uma variável, dependendo de uma condição

//if Abreviado, não é necessário abrir e fechar as chaves {} qunado retornamos apenas uma linmha de código
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');
//ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');