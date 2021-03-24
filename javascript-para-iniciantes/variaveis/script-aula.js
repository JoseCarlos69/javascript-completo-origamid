//Três formas de declarar uma variável, var, let ou const
var nome = 'André';
var idade = 28;
var possuiFaculdade = true

console.log(nome, idade, possuiFaculdade, nome);

//Não repita o código
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

//Utilizar a vírgula para usar uma unica variável
var sobrenome = 'Rafael',
    cidade = 'Rio';

console.log(sobrenome, cidade);

//Variáveis sem valor
var semDefinir;

console.log(semDefinir);

/*Exemplos de declarações inválidas
var function;
var 1possuiFaculdade;
*/

//Exemplos de declarações válidas
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

/*Declarar sempre váriaveis existentes
exemplo: console.log(aindaNaoDefini);
*/

//Hosting, as váriaveis são movidas para cima do código mesmo você declarando elas abaixo
console.log(nome);
var nome = 'André';
//Retorno undefined

var profissao = 'Designer';
console.log(profissao);
//Retorno Designer

//Mudar os valores atribuídos, porém só no var e let, o const não, pois é uma constante, portanto não muda
var time = 'Vasco';
time = 'Flamengo'; //podemos usar o var para declarar novamente caso necessário {var time = 'Flamengo'}
console.log(time);

let comida = 'Pizza';
//let comida = 'Batata'; {Não podemos usar o 'let' novamente ao declarar}
comida = 'Batata';
console.log(comida);

/*const animal = 'macaco';
animal = 'leão';

console.log(animal);*/