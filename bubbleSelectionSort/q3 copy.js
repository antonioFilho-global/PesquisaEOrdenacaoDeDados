/* 3) Faça um algoritmos para cadastrar o nome e número de matrícula de 10 alunos. 
Liste os dados cadastrados:
a) ordenados em ordem crescente pelo número de matrícula; → bubble sort
b) ordenados em ordem decrescente pelo número de matrícula; → selection sort */



/* console.log(Alunos()) */
const items = [5,'aluno5', 6, 'aluno6', 7, 'aluno7', 9, 'aluno9',4, 'aluno4', 2, 'aluno2', 3, 'aluno3', 1, 'aluno1']


function bubbleSort(items) {
    for(let j = 0; j < items.length - 1; j++) {
       for (let i = 0; i < items.length -1; i++) {
            if (items[i] > items[i+2]){
                //Fazendo atroca de valores
                [items[i], items[i+2]] = [items[i+2], items[i]]
            }  
        }
    }
    return items     
}

console.log(bubbleSort(items))