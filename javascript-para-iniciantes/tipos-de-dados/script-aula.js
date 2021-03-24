//Tipos de dados, todos são primitivos(dados imutáveis) exceto os objetos
var nome = 'André'; //Sring
var idade = 28; //Number
var possuiFaculdade = true; //Boolean - possui valor de true or false
var time; //Undefined
var comida = null; //Null
var simbolo = Symbol() //Symbol
var novoObjeto = {} //Object

//Verificar o tipo de Dado
var nome = 'André';
console.log(typeof nome);
// retorna string

//Strings - somando strings
var nome = 'Andre';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

//Somando números e strings
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

console.log(frase);

var ano = '2018'; //* * * * STRING * * * *
var mes = 8;
console.log(ano + mes);

//Aspas Duplas. Simples e Template String
//var frase1 = 'Esse é o 'melhor' jogo' NÃO COLOCAR O MESMO TIPO DE ASPAS DENTRO DE OUTRA
var frase1 = 'Esse é o "melhor" jogo'; //Certo
var frase1 = 'Esse é o \'melhor\' jogo'; //Outro jeito
console.log(frase1);

//Template String
var gol = 1000;
var frase1 = 'Romário fez ' + gols + ' gols'; //Sem template string
var frase2 = `Rómario fez ${gols} gols`; //Com template string

console.log(frase2);
