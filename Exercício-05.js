/*05 - Faça um programa que leia um número e verifique se ele é par ou ímpar. Exiba uma mensagem indicando o resultado.*/

var numero = 5;

function verificacao (numero)
{
    if(numero % 2 == 0)
    {
        console.log("O número" , numero , "é par!")
        return
    }
    else
    {
        console.log("O número" , numero , "é ímpar!")
        return
    }
}

console.log(verificacao(numero));