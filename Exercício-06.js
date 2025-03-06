/*06 - Faça um programa que leia três números e exiba o maior entre eles.*/

var num1 = 0;
var num2 = 200;
var num3 = 30;

function verificarMaior(num1,num2,num3)
{
    if(num1 > num2 && num1 > num3)
    {
        console.log("O número" , num1 , "é o maior!")
        return
    }
    if(num2 > num1 && num2 > num3)
    {
        console.log("O número" , num2 , "é o maior!")
        return
    }
    else
    {
        console.log("O número" , num3 , "é o maior!")
    }
}

console.log(verificarMaior(num1,num2,num3));