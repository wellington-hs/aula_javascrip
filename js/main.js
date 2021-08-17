//alert("Meu primeiro JS - Primeiro alerta");

//VARIAVEIS E CONCATENAÇÃO
/*
var ano= 2021;
var mes= "agosto"
var frase= "Japão é o melhor país do mundo"
var n1= 5;
var n2= 6;

console.log("Hoje é dia 13 de " + mes+ " de " + ano ); //concatenação de variáveis diferentes

console.log(frase.replace("Japão" , "Brasil")); //substituição de strings pelo .replace
console.log(frase.toUpperCase()); //coloca tudo em maiúsculo
console.log(frase.toLocaleLowerCase()); //coloca tudo em minusculo
console.log(n1+n2);
*/

//ARRAY
/*
var lista = ["Maçã", "Pêra", "Laranja"];    //_____ARRAY SE USA COM COLCHETES ___
console.log("Resultado do array com tres itens: " + lista);
console.log("Adicionando item 'Uva' ao array: ")
lista.push("Uva");  //adiciona um valor ao array
console.log(lista);
console.log("Retirando item 'Pêra' do array: ");
lista.pop("Pêra");  //retira um valor do array
console.log(lista);
console.log("Posição 3 do array: " + lista[2]); //mostra apenas o elemento da posição 3 do array

console.log(lista.length); //mostra a quantidade de elementos do array
console.log(lista.reverse()); //mostra a lista ao contrário
console.log(lista.toString()); //Mostra uma string com os elementos do array
console.log(lista.join(" - ")); // coloca qualquer coisa entre as strings para separá-las pois por padrão elas sao separadas por virgula
*/

/*
//DICIONÁRIO
console.log("DICIONÁRIO:"); //Dicionario guarda mais de uma informação de um elemento

var fruta = {nome:"Maçã", cor:"vermelha"}  //____DICIONARIO SE USA CHAVES!!____
console.log(fruta);
console.log("Nome da fruta: " + fruta.nome);
console.log("Cor: " + fruta.cor);
//alert("Resultado de um dicionario: 'fruta.nome' " + fruta.nome);


console.log("LISTA DE DICIONARIO: ") // Dicionario Lista

var frutas = [{nome:"Pera", cor:"Verde"},{nome:"Morango", cor:"Vervelho"},{nome:"Abacaxi", cor:"Amarelo"}]
console.log(frutas);
console.log(frutas[1].nome + " " + frutas[1].cor)
*/

//CONDICIONAIS LAÇOS DE REPETIÇÃO E DATE:
/*
var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("Autorizado, voce é maior de idade!")
}else{
    alert("Entrada proibida. Você é menor de idade!") 
} */

// ESTRUTURA DE REPETIÇÕES:

/*
var cont = 0 
while(cont <=5 ){               //while
    console.log(cont);
    cont ++;
}   */
/*
var cont;
for(cont=0; cont <=5; cont++){
    console.log(cont);
} */

//TRABALHANDO COM DATAS:

/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes()); */

//<------------------FUÇÕES-------------------------->
/* 

 - Função é um trecho de codigo que executa alguma coisa e retorna um valor.
 - Return significa, pare a função, volta daqui e devolva isso "aqui" para a aplicação
 - Função pode ser usada para realizar cálculos, conversão e validação.
 - Existem tres tipos de funções:
              1 - A função comum que pode ser chamada quantas vezes quiser.
              2 - A função anônima, que é uma função sem nome.
              3 - A função ARROW FUNCTION, que é uma função mais curta mas com recursos diferentes.
    
     Ex de uma função:                                      // função denominada "soma"
                                                            // o que esta dentro dos parentesis são chamados de argumentos ou parâmetros
            function soma (n1, n2){                         //o que esta dentro das chaves são chamado de bloco de função
                return n1 + n2;
            }
            ------------------------------------------------------------------------------------------------------------------------
           | soma()                               //chamando ou invocando a função. O valor de return vai para frente da função em  |
           --------------------------------------- uma variavel que ainda nao existe. -----------------------------------------------
            
            let resultado = soma(1, 2)            //agora sim soma passa os valores para a função, a função retorna e grava em resultado
            console.log(resultado)               //exibe resultado
*/

//Função soma dois numeros
/*function soma (n1,n2){
    return n1 + n2;
}

alert("A soma da função é: " + soma(5, 2));  //Dá a saida para o alert.*/


//Função calculadora:

function calc(x1, x2, operator){
  
   return eval(`${x1} ${operator} ${x2}`); //a função nativa "eval" interpreta uma string e calcula ela
}

let resultado = calc(4, 5,"*");      /*invoca a função passando os valores dos argumentos, o valor do resultado retorna para a "invocação"
                                        e grava na variável 'resultado'.*/

console.log("Resultado da operação com strings: " + resultado);              






//___________________ BOTÕES_______________

function clique(){                                                               //Manipulando elemento pelo DOM
    //alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!!</b>";  /*pelo 'geElementById' ele traz o elemento definido
                                                                                            pelo ID 'agradeciemnto' e injeta um html no caso
                                                                                             um texto pelo 'document' com o 'innerHTML' */
    console.log(document.getElementById("agradecimento"));
}
function apagar(){
    document.getElementById("agradecimento").innerHTML = " ";

}
function redirecionar(){
    //window.open("https://css-tricks.com/snippets/css/a-guide-to-flexbox/"); //abre um site em uma nova janela
    window.location.href = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/";// abre na mesma janela
}


function passamouse(elemento){
    //alert("Texto trocado");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
}
function voltamouse(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){  
    console.log(elemento.value); // elemento.value pega o valor do elemento na saida do console

}


/*VISTO NA AULA

alert
variaveis
array e dicionario
condiional (if, else)
push, pop e length
reverse to Array
toString para Array
join para array
replace
lowCase, UpperCase
date
function
variavel global / local
dom
getElement
innerHTML
onclic
redirecionar para outra pagina
onmouseover
onmouseout

*/
































