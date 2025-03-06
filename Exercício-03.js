/*03 - Crie um programa que receba o nome do aluno, o nome da UC, a nota do aluno e retorne seu desempenho. Considere que: 
0 a 6 = Baixo desempenho
6 a 8 = Bom desempenho
8 a 10 = Excelente desempenho
*/

var nomeAluno = "Bruno";
var nomeUC = "java script";
var notaAluno = 10.999;
let notas = parseInt(notaAluno);

function desempenhoAlunos (nomeAluno, nomeUC, notas)
{
    if(notas < 6)
    {
        console.log("O aluno teve um Baixo Desempenho.")
        return
    }
    if(notas < 8)
    {
        console.log("O aluno teve um Bom Desempenho.")
        return
    }
    else
    {
        console.log("O aluno teve um Excelente Desempenho.")
        return
    }
}

console.log(desempenhoAlunos(nomeAluno, nomeUC, notas));