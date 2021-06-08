/* 4) Considerando o array A[]= {6,4,8,1,3} e o algoritmo insertion sort. Quantas iterações são
necessárias para colocar o '1' na posição correta? */

vetor = [6, 4, 8, 1, 3]

function insertionSort(vetor) {
    let atual
    for (let i = 1; i < vetor.length; i++) {
        let j = i - 1
        atual = vetor[i]
        while (j >= 0 && atual < vetor[j]) {
            vetor[j+1] = vetor[j]
            j-- 
        }
        vetor[j+1] = atual
        /* Em cada interação mostrá as alterações feitas até ficar com o vetor ordenado */
        /* São necessárias 3 interações para o 1 ficar na posição correta */
        console.log(vetor)
    }
    return vetor
}

console.log(insertionSort(vetor))