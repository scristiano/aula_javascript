/* Trabalhando com variáveis e strings

var nome = "Cristiano Schaarschmidt"
var idade = 36
var idade2 = 10
frase = "Japão é o melhor time do mundo!"
alert(nome + " tem " + idade + " anos!");
console.log(nome);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.replace("Japão", "Brasil").toUpperCase());
console.log(frase.replace("Japão", "Brasil").toLowerCase());

*/

/*
var lista = ["maça", "pêra", "laranja"];
console.log(lista);
console.log(lista.push("Uva"));
console.log(lista);
console.log(lista.pop("Uva"));
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(lista[1]);
*/

/*
var fruta = [{nome:"Maça", cor:"Vermelha"},{nome:"Uva", cor:"Roxa"},];
console.log(fruta);
console.log(fruta[1].nome);
*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade!");
}else{
    alert("menor de idade!");
}
*/

/*
var count = 0;
while (count < 5) {
    console.log(count);
    //count = count + 1;
    count++;
};
*/

/*
var count;
for (count = 0; count <= 5; count++) {
    console.log(count);
}
*/

/*
var d = new Date;
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getMinutes());
*/

/*
trajeto = ["mãe", "floresta", "avó"]
console.log(trajeto[1]);
console.log(trajeto.join(">"));
*/

/* var lista = [“Alemanha”, “Inglaterra”, “Escócia”]
lista.push(“Polônia”);
lista.pop(“Inglaterra”);
*/

/*
function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome);
}
alert(setReplace("Vai Japão!", "Japão", "Brasil"));
*/

/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*
function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar() {
    window.open("https://www.terra.com.br/");
    //window.location.href = "https://www.terra.com.br/";

}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";    
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";    
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}