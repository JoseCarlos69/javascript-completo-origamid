//Document Object Model (DOM), é uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos
console.log(window);
//window é o objeto global do browser
//possui diferentes métodos e propriedades

window.innerHeight; //retorna a altura do bowser
//Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM

//Window e Document, são os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades
window.alert('Isso é um alerta');
alert('Isso é um alerta'); //Funciona

//const h1Selecionado = document.querySelector('h1'); //Seleciona o primeiro h1
document.body; //Retorna o body
//window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades

//Node, toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node
const titulo = document.querySelector('h1');

titulo.innerHTML; //retorna o texto;
titulo.classList; //retorna as classes;
titulo.id; //retorna o id;
titulo.offsetHeight; //retorna a altura do elemento;


function callbackh1() {
  console.log('Clicou em', titulo.innerText);
}

titulo.addEventListener('click', callbackh1);
//ativa a função callback ao click no titulo

