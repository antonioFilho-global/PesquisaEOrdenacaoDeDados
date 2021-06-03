/* 3) Faça um algoritmos para cadastrar o nome e número de matrícula de 10 alunos. 
Liste os dados cadastrados:
a) ordenados em ordem crescente pelo número de matrícula; → bubble sort
b) ordenados em ordem decrescente pelo número de matrícula; → selection sort */

class Aluno {
    constructor(matricula, nome) {
        this.matricula = matricula
        this.nome = nome
    }
}

const ana = new Aluno(1, "ana")
const maria = new Aluno(2, "maria")
const pedro = new Aluno(3, "pedro")

const ana1 = new Aluno(4, "ana1")
const maria1 = new Aluno(5, "maria1")
const pedro1 = new Aluno(6, "pedro1")

const ana2 = new Aluno(7, "ana2")
const maria2 = new Aluno(8, "maria2")
const pedro2 = new Aluno(9, "pedro2")

const ana3 = new Aluno(10, "ana3")

/* console.log(Alunos()) */

const items = []

items.push(ana1.matricula, maria1.matricula, pedro1.matricula, ana.matricula, maria.matricula, pedro.matricula
            ,ana2.matricula, maria2.matricula, pedro2.matricula, ana3.matricula)
/* console.log(items) */ 

function bubbleSort(items) {
    for(let j = 0; j < items.length - 1; j++) {
       for (let i = 0; i < items.length -1; i++) {
            if (items[i] > items[i+1]){
                //Fazendo atroca de valores
                [items[i], items[i+1]] = [items[i+1], items[i]]
            }  
        }
    }
    return items     
}

console.log(bubbleSort(items))