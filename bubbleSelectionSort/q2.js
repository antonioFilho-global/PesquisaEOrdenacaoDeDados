/*  2) Escreva um algoritmo para ordenar um vetor com 10 números inteiros. Faça a ordenação
    através do bubble sort e do selection sort e compare o número de trocas necessárias para a
    realização das operações. */

/* bubble sort */
/* No melhor caso e O(n) (Quando ta otimizado para indentificar que o vetor já está ordenado) 
no pior caso é O(n^2)*/
/* As comparações são realizadas até não haver mais elementos desordenados */
/* Não recomendado para vetores grandes */
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
   
console.log(bubbleSort([9, 5, 7, 3,12]))

/* selection sort O(n^2) no melhor caso e no pior caso*/
/* As comparações são realizadas até não haver mais elementos desordenados */
/* Não recomendado para vetores grandes  */

function selectionSort(items) {
    /* menor atual de cada interação */
    let menor
    for (let i = 0; i < items.length - 1; i++) {
        menor = i
        for (let j = i + 1; j < items.length; j++) {
            if (items[j] < items[menor]) {
                menor = j
            }
        }  
        if (i != menor) {
            [items[i], items[menor]] = [items[menor], items[i]]
        }
    }    
    return items
}

console.log(selectionSort([9, 5, 7, 3,12]))