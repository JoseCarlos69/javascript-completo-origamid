//Números
var idade = 28;
var gols = 1000;
var pi = 3.14; //ponto para decimal
var exp = 2e10; //20000000000 (Precisão de até 15 digitos)

console.log(idade, gols, pi, exp);

//Operadores Aritméticos
var soma = 100 + 50; //150
var subtracao =  100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);
//A soma '+' em string serve para concatenar

//Operadores Aritméticos (Strings)
var soma1 = '100' + 50; //10050
var subtracao1 = '100' - 50; //50
var multiplicacao1 = '100' * '2'; //200
var divisao1 = 'Comprei 10' / 2; //NaN (Noa a Number)

console.log(soma1, subtracao1, multiplicacao1, divisao1);
//Caso queira verificar se uma variável é NaN ou não, use isNaN()
console.log(isNaN(soma)); //false, é um número
console.log(isNaN(divisao1)); //true, não é um número

//A ordem importa, multiplicação e divisão, depois por soma e subtração, porém parênteses são prioridades
var total = 20 + 5 * 2; //30
var total1 = (20 + 5) * 2; //50
var total2 = 20 / 2 * 5; //50
var total3 = 10 + 10 * 2 + 20 / 2; //40

console.log(total, total1, total2, total3);

//Operadores Aritméticos Unários
var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6

var incremento1 = 5;
console.log(++incremento1); //6
console.log(incremento1); //6

var decremento = 5;
console.log(decremento--); //5
console.log(decremento); //4

var decremento1 = 5;
console.log(--decremento1); //4
console.log(decremento1); //4

//O '+' e '-' tenta transformar o valor em número
var frase = 'Isso é uma frase';
+frase; //NaN
-frase; //NaN]
console.log(frase);
console.log(isNaN(frase));

var idade1 = '28';
+idade1; //28 (número)
-idade1; //-28 (número)
console.log(+idade1 + 5); //33 (O '+' na frente do idade1 transformou em número para somar com 5, caso não tivesse seria 285)

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1