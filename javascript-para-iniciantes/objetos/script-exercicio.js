//Exercícios

//Crie um objeto com os seus dados pessoais e depois crie um método que mostre seu nome completo
var dadosPessoais = {
  nome: 'José',
  sobrenome: 'Carlos',
  idade: 18,
  telefone: '55555-5555',
  nomeCompleto: function() {
    return this.nome + ' ' + this.sobrenome;
  }
}

console.log(dadosPessoais.nomeCompleto());

//Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

console.log(carro.preco);
carro.preco = 3000;
console.log(carro.preco);

//Crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao ver um homem
var homem = 'homem';
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}

console.log(cachorro.latir());
console.log(cachorro.latir('homem'));