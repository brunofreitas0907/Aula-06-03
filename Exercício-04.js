/*4 - Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.*/

var num1 = 32;
var num2 = 69;

function somar(num1, num2)
{
    somar = num1 + num2

    if (somar > 100)
    {
        console.log("A soma dos númeoros digitados é" , somar)
    }
    return
}

console.log(somar(num1,num2));

