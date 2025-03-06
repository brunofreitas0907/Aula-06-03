/*01 - Crie um programa que receba a idade de uma pessoa e retorne se ela pode ou não votar. Considere o voto a partir dos 16 anos.*/

var idadePessoa = 16;
let nomePessoa = "Maria";


function votacao(idadePessoa)
{
    if (idadePessoa < 16)
    {
        console.log(nomePessoa , "ainda não pode votar")
        return
    }
    else 
    {
        console.log(nomePessoa , "pode votar")
        return
    }
}

console.log(votacao(idadePessoa));
