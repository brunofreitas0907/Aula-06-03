/*08 - Faça um programa que receba 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.*/


var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;
var num5 = 5;
var num6 = 6;
var num7 = 7;
var num8 = 8;
var num9 = 9;
var num10 = 10;
var numerosPares = 0;
var numerosImpares = 0;

function paresImpares(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {
    var numeros = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
    
    for(var i = 0; i < 10; i++)
    {
        if(numeros[i] % 2 == 0) {
            numerosPares += 1;
        }
        else
        {
            numerosImpares += 1;
        }
    }   

    return
}

console.log(paresImpares(1,2,3,4,5,6,7,8,9,10));
console.log("Há" , numerosPares , "números pares")
console.log("Há" , numerosImpares , "números ímpares!")