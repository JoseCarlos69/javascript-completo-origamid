//Objetos, conjunto de variáveis e funções, que são chamadas de propriedades e métodos
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

console.log(pessoa.nome); //André
console.log(pessoa.possuiFaculdade); //true
//Propriedade e métodos consistem em nome (chave) e valor

//Métodos é uma propriedade que possui uma função no local do seu valor
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.lados); //4
console.log(quadrado.area(5)); //25
console.log(quadrado.perimetro(5)); //20

//Abreviação de area: function() {} para area() {}, no ES6+
var quadrado1 = {
  lados1: 4,
  area1(lado1) {
    return lado1 * lado1;
  },
  perimetro1(lado1) {
    return this.lados1 * lado1;
  },
}

console.log(quadrado1.lados1);
console.log(quadrado1.area1(5));
console.log(quadrado1.perimetro1(5));

//Objetos servem para organizar o seu código em pequenas partes reutilizáveis
Math.PI; //3.14
Math.random(); //número aleatório

var pi = Math.PI;
console.log(pi); //3.14

//Math é um objeto nativo de JavaScript, assim como o console é um objeto e o log() um método

//Um objeto é criado utilizando as chaves {}
var carro = {}
var pessoa = {}

console.log(typeof carro); //'object'

//Dot Notation Get. acsse propriedades de um objeto usando o ponto '.'
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; //'#84E'

//Dot Notation Set, substitua o valor de uma propriedade utilizando '.' e o '=' após o nome da mesma
var menu1 = {
  width: 800,
  height: 50,
  backgroundColor: '#000',
}

menu1.backgroundColor = '#84E';
console.log(menu1.backgroundColor); //'#84E'

//Adicionar propriedades e métodos. basta colocar um novo nome e definir o valor
var menu2 = {
  width: 800,
}

menu2.height = 50;
menu2.position = 'fixed';

//Palavra-chave this, this irá fazer uma referência ao próprio objeto
var height = 120;
var menu3 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2; //this retorna o próprio objeto
  }
}

menu3.metadeHeight(); //25
//sem o this seria 60

//Protótipo e Herança, o objeto herda as propriedades e métodos do objeto que foi utilizado para criar o mesmo
var menu4 = {
  width: 800,
}

menu4.hasOwnProperty('width') //true
menu4.hasOwnProperty('height') //false
//hasOwnProperty é um método de Object