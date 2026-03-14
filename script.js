// console.log("Hello World")

// let nome = "Ana";
// console.log(nome);

// const pi = 3.14;
// console.log(pi);

// let n1 = 1;
// let n2 = 2;
// console.log(n1+n2);

// function saudacao(){
// console.log("Olá meu nome é "+nome);
// };

// function somar(n3,n4) {
//     console.log(n3 + n4)
// };
// saudacao();
// somar(2,3);

function somarNumeros(){

    let soma = 0; 
    let continuar = true;

    while (continuar){
        // não aceitar outra resposta além da que eu pedi
        let numero = parseFloat (prompt("Digite um número (ou digite '0' para encerrar): "));

        // soma = soma + numero;
        // recebe ela mesmo mais o numero
        // soma += numero;

            if (isNaN (numero)){
                alert ("Por favor, digite um número válido!");
            }else{
               soma += numero; 
            }

            continuar = confirm ("Deseja adicionar mais um número.");
            }

    alert("A soma dos números é: " + soma);
    console.log ("A soma dos números é: " + soma);
    }

// somarNumeros();

function exercicio2(){
 for (let i = 10; i >= 0; i--) {
    console.log(i);}

    {
    console.log("Lançamento realizado!");
}
}
// exercicio2();

function exercicio3(){

let ganhoAnual = 0;
let gastoAnual = 0;

for (let i = 1; i <=12; i++){

  let ganho = parseFloat(prompt("Digite o ganho do mês" + i));
  let gasto = parseFloat(prompt("Digite o gasto do mês" + i)); 

ganhoAnual += ganho;
gastoAnual += gasto;
}
let saldo = ganhoAnual - gastoAnual;

console.log ("Ganho anual: ", ganhoAnual);
console.log ("Gasto anual: ", gastoAnual);
console.log ("Saldo anual: ", saldo);

if (saldo > 0){
console.log ("A empresa teve lucro");
} else {
console.log ("A empresa teve prejuízo");
}
}
// exercicio3();

function exercicio4(){

    let n1 = parseInt(prompt("Digite um número inteiro"));
    let n2 = parseInt(prompt("Digite um número inteiro"));
    let n3 = parseInt(prompt("Digite um número inteiro"));
    let n4 = parseInt(prompt("Digite um número inteiro"));

    let numeros = [n1, n2 , n3, n4];

    numeros.sort((a,b) => b - a);

    console.log ("Ordem decrescente: " +numeros);

}
// exercicio4();

function exercicio5(){

let numero = parseInt(prompt ("Digite um número inteiro:"));

if(numero % 2 == 0){
        numero += 1;
    }else{
        numero -= 1;
    }
console.log ("Valor final: " + numero); 

}
exercicio5();
