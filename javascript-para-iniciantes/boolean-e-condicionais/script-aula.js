//Boolean, ele só pode ser false or true
var possuiGraduacao = true;
var possuiDoutorado = false;

//Condicionais If e Else, verifique se a expressão é verdadeira com if, caso contrário o else é ativado
var possuiGraduacao1 = true;

if(possuiGraduacao1) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
//o valor em parênteses sempre será avaliado em false ou true

//Condicionais Else If, se o if não for verdadeiro ele testa o else if
var possuiGraduacao2 = true;
var possuiDoutorado1 = false;

if(possuiDoutorado1) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao2) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação')
}

//Truthy e Faly, existem valores que retornam false e true quando verificados em uma expressão booleana

//Falsy
if(false);
if(0); //ou -0
if(NaN);
if(null);
if(undefined);
if(''); //ou "" ou ``

//Todo o resto é truthy
if(true);
if(1);
if(' ');
if('andre');
if(-5);
if({});

//Operador Lógico de Negação '!', colocar o '!' nega uma operação booleana, assim o !true é igual a false

//Truthy
if(!true); //false
if(!1); //false
if(!''); //false
if(!undefined); //true
if(!!' '); //true
if(!!''); //false

//Pode-se usar o '!!' para verificar se uma expressão é Truthy ou Falsy

//Operadores de comparaçã, sempre retornam um valor booleano
10 > 5; //true
5 > 10; //false
20 < 10; //false
10 <= 10; //true
10 >= 11; //false

//O '==' faz não tão estrita e o '===' faz uma estrita, assim o tipo de dado tem que ser o mesmo ao usar o '==='
10 == '10'; //true
10 == 10; //true
10 === '10'; //false
10 === 10; //true
10 != 15; //true
10 != '10'; //false
10 !== '10'; //true

//O '!=' ou '!==' verifica se é diferente, no qual o '!=' é não muito estrito e o '!==' é estrito

//Operadores Lógicos &&, compara se uma expressão e outra é verdadeira
true && true; //true
true && false; //false
false && true; //false
'Gato' && 'Cão'; //'Cão'
(5 - 5) && (5 + 5); //0
'Gato' && false; //false
(5 >= 5) && (3 < 6); //true

//Caso os dois valores sejam true ele retorna o ultimo que verificou, caso um deles seja falso ele retorna o mesmo e não contiua a verificação

//Operadores Lógicos ||. compara se uma expressão ou outra é verdadeira
true || true; //true
true || false; //true
false || true; //true
'Gato' || 'Cão'; //'Gato'
(5 - 5) || (5 + 5); //10
'Gato' || false; //Gato
(5 >= 5) || (3 < 6); //true

//Retorna o primeiro valor true que encontrar

//Switch, com ele você verifica se uma variável é igual á diferentes valores usando o 'case'. Caso seja, você pode fazer alguma coisa e usar a palavra chave 'break;' para cancelar a continuidade
var corFavorita = 'Azul';

switch(corFavorita) {
  case 'Azul':
    console.log('Olhe para o Céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos.');
}

//O valor default ocorre qundo nenhuma das anteriores é verdadeira