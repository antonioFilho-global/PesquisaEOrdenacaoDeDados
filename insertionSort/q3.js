/* 3) Considerando um array com os elementos a[5]= {5,4,3,2,1}, qual a situação do array em
cada iteração usando o insertion sort? */

vetor = [5, 4, 3, 2, 1]

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
        console.log(vetor)
    }
    return vetor
}

console.log(insertionSort(vetor))