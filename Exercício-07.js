/*07 - Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer.*/

numeroTabuada = 5;

function calculoTabuada(numeroTabuada)
{
    console.log("TABUADA DO" , numeroTabuada , " COMPLETA:\n")

    for(var i = 0; i <=10; i++)
    {
        result = numeroTabuada * i
        console.log(numeroTabuada , "x" , i , "=" , result)
    }
}

console.log(calculoTabuada(numeroTabuada));