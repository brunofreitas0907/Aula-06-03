/*02 - Crie um programa que receba um número inicial, um número final e retorne todo o intervalo entre os números, aumentando de 2 em 2.*/

var numeroInicial = 10;
var numeroFinal = 100;

function intervalos(numeroFinal, numeroInicial)
{
    console.log("NÚMEROS DO INTERVALO ENTRE" , numeroInicial , "e" , numeroFinal , "!")

    for (var i = numeroInicial; i <= numeroFinal; i += 2)
    {
        console.log(i)
    }
}

console.log(intervalos(numeroFinal, numeroInicial));

