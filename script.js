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
// exercicio5();

function exercicio6(){

    let letra = prompt("Digite uma letra do alfabeto: ");

    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        console.log ("Sua letra escolhida é uma vogal!");
    } else{
        console.log ("Sua letra é uma consoante!");
    }
}
// exercicio6();

function exercicio7(){


    let sabor = prompt("Digite o código do picolé... a)Chocolate - $1.50\nb)Morango - $2.50\nc)Creme - $2.50\nd)Manga\ne)Melancia - $3.40\nf)Vanilla ice - $3.00\ng)Céu azul - $3.60\nh)Brownie - $4.00\ni)Hawaiano - $5.00\n");

    switch (sabor) {

        case "a":
            console.log("Chocolate - $1.50");
            break;
        case "b":
            console.log("Morango - $2.50");
            break;
        case "c":
            console.log("Creme - $2.50");
            break;
        case "d":
            console.log("Manga - $3.20");
            break;
        case "e":
            console.log("Melancia - $3.40");
            break;
        case "f":
            console.log("Vanilla ice - $3.00");
            break;
        case "g":
            console.log("Céu azul - $3.60");
            break;
        case "h":
            console.log("Brownie - $4.00");
            break;
        case "i":
            console.log("Hawaiano - $5.00");
            break;
       
        default:
            console.log("código inválido");
    }
}
// exercicio7();

function exercicio8(){

    let a = 4; 
    let b = 6; 

let diferenca = a - b;
console.log("A diferença entre as duas variáveis é de: " + diferenca);

let soma = (a * 2) + (b * 3);
console.log("O dobro da primeira variável somado ao triplo da segunda é: " +soma);

let multiplicacao = a * b;
console.log("A multiplicação das duas variáveis é de: " + multiplicacao);
}
// exercicio8();

function exercicio9(){

    let a = 18;
    let b = 11;

    if(a > b){
    console.log(b + "," + a);
}
}
// exercicio9();

function exercicio10(){

let nome = prompt("Digite o seu nome: ");
let salario = prompt ("Digite o seu salário bruto: ");

let desconto = salario * 0.08;
let diferenca = salario - desconto;

console.log("Nome: " +nome);
console.log("Valor do salário bruto é de: " +salario);
console.log("O valor do desconto do INSS é de: " +desconto);
console.log("O valor do salário líquido é de: " +diferenca); 
}
// exercicio10();

function exercicio11(){

    let salario = prompt("Digite o seu salário bruto:");
    let taxa = 0;
    let desconto = 0;
    let diferenca = 0;

    if (salario<=1000){
    taxa = 8;
    desconto = salario * 0.08;
    diferenca = salario - desconto;

    } else if (salario > 1000 && salario <= 1500){
    taxa = 8.5;
    desconto = salario * 0.085;
    diferenca = salario - desconto;

    } else if (salario > 1500){
    taxa = 9;
    desconto = salario* 0.09;
    diferenca = salario - desconto; 
    }

    console.log("O valor do salário bruto: " +salario);
    console.log("A Taxa de desconto é: " + taxa + "%");
    console.log("O valor do desconto: " +desconto);
    console.log("O valor do salário líquido: " +diferenca);
    }
// exercicio11()

