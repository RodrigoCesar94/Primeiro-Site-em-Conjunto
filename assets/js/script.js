
/* 
Case Sensitive = JS reconhece letras minusculas e maiusculas, portanto deve ser escrito com as palavras reservadas de forma correta senão não funciona. Não esquecer do argumento destas funções()

/ referencie o caminho do input no qual esse nome entra, lembrando da questão da árvore DOM.
// declarando as variáveis colocando seu imput de referencia, para validação das entradas.
// no query selector, se for classe referencie .nomedaclasse , se for um id #id, senão não funciona. 

por tag: getElementByTagName()
por id: getElementById()
por Nome: getElementByName()
por classe: getElementByClassName()
por seletor: querySelector()
*/ 

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let ODS4 = document.querySelector('#ODS4')

// variaveis para verificar preenchimento de todos os campos
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width ='100%'
email.style.width ='100%'

function validaNome() {
 let txtNome = document.querySelector('#txtNome')

if(nome.value.length < 3){
 txtNome.innerHTML='Tamanho de Nome Insuficiente'
 txtNome.style.color='red'
 }
 else{
 txtNome.innerHTML='Tamanho de Nome OK'
 txtNome.style.color='green'
 nomeOk = true // condição else, quer dizer que está correto, então boolean nome = true.
 }
}   

txt.style.color='black'
function validaEmail(){
let txtEmail = document.querySelector('#txtEmail')
// o indexOf verifica se o @ está ou não dentro do input e nos retorna -1 para NÃO/ 1 para SIM
// Desta forma, chamando o email.value(Meu input), e solicitando ao indexOf se tem @ e . //
// Ou seja, se for -1, não tem @ OU-->(indicado com ||) .//
if(email.value.indexOf('@')==-1 || email.value.indexOf('.')== -1){
    txtEmail.innerHTML='E-mail inválido'
    txtEmail.style.color='red'
}
else{
    txtEmail.innerHTML='E-mail válido'
    txtEmail.style.color='green' 
    emailOk = true
}
}

function validaAssunto(){
// o id da querySelector AQUI é o id da sua div, que vai dar a mensgem pro usuário obedecendo a condiçõ do if;
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >  100){
     txtAssunto.innerHTML = 'Texto Muito Grande, máximo 100 caracteres'
     txtAssunto.style.color = 'red';
    }
    else{
     txtAssunto.style.display= 'none' 
     assuntoOk=true
    }

}

function enviar(){

    if(nomeOk==true && emailOk==true && assuntoOk==true){
    alert('Formulário enviado')
    }
    else{
    alert('Prencha os campos corretamente')    
    }
}

function mapaZoom(){
    ODS4.style.width='800px'
    ODS4.style.height='600px'


}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.height='250px'
}