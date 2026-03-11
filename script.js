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
               console.log(soma);
            }

            continuar = confirm ("Deseja adicionar mais um número.");
            }

    alert("A soma dos números é: " + soma);
    console.log ("A soma dos números é: " + soma);
    }

somarNumeros();