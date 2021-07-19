//getElementById seleciona e retorna elementos do DOM

//Seleciona pelo ID
const animais = document.getElementById('animais');
console.log(animais);

//Retorna null caso não exista
const naoExiste = document.getElementById('teste');
console.log(naoExiste);

//getElementByClassName e getElementByTagName

//Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
const contato = document.getElementsByClassName('grid-section contato');
console.log(contato);

//Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');
console.log(ul);

//Retorna o primeiro elemento
console.log(gridSection[0]);

//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
const animais = document.querySelector('.animais');
console.log(animais);
const contato = document.querySelector('#contato');
console.log(contato);
const ultimoItem = document.querySelector('.animais-lista li:last-child');
console.log(ultimoItem);
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);
const primeiroUl = document.querySelector('ul');
console.log(primeiroUl);

//Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');
console.log(navItem);

//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
//e diferente do getElementByClassName, a lista aqui é estática
const gridSection = document.querySelectorAll('.grid-section');
console.log(gridSection);
const listas = document.querySelectorAll('ul');
console.log(listas);
const titulos = document.querySelectorAll('.titulo');
console.log(titulos);
const fotosAnimais = document.querySelectorAll('.animais img');
console.log(fotosAnimais);

//Retorna o segundo elemento
console.log(gridSection[1]);

//A diferença entre HTMLCollection e NodeList está nos métodos e propriedades de ambas. Além
//disso a NodeList retornada com querySelectorAll é estática
const titulo = document.querySelector('.titulo');
console.log(titulo);
const gridSectionHTML = document.getElementsByClassName('grid-section');
console.log(gridSectionHTML);
const gridSectionNode = document.querySelectorAll('.grid-section');
console.log(gridSectionNode);

titulo.classList.add('grid-section');

console.log(gridSectionHTML); //4 itens
console.log(gridSectionNode); //3 itens

//HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array
//forEach() por exemplo, existe apenas em NodeList
const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(item, index, array) {
    item.classList.add('azul');
    console.log(index) //index do item na array
    console.log(array) //a array completa
});
//É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
const arrayGrid = Array.from(gridSectionHTML);
