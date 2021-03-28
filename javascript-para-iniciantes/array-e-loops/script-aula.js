//Arra, é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] //Switch
videoGames[2] //XBox
//Acesse um elemneto da array utilizando [n]

//Métodos e Propriedades de uma Array
var videoGames1 = ['Switch', 'PS4', 'XBox'];

videoGames1.pop(); //Remove o último item e retorna ele
videoGames1.push('3DS'); //Adiciona ao final da array
videoGames1.length; //3
//Existem diversos outros métodos, como map, reduce, forEach e mais

//For Loop, fazem algo repetidamente até que uma condição seja atingida
for (var numero = 0; numero < 10; numero++) {
  console.log(numero)
}
//Retorna de 0 a 9 no console
//O for loop possui 3 partes, início, condição e incremento

//While Loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//Arrays e Loops
var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames2.length; i++) {
  console.log(videoGames2[i]);
}
//O for loop é o mais comum

//Break, o loop irá parar caso encontre a palavra break
var videoGames3 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames3.length; i++) {
  console.log(videoGames3[i]);
  if(videoGames3[i] === 'PS4') {
    break;
  }
}

//forEach, é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)
var videoGames4 = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames4.forEach(function(item) {
  console.log(item);
})
//O argumento i será atribuido automaticamente
//Podemos passar os seguintes parâmetros item, index e array

//Não se confunda com a sintaxe
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}