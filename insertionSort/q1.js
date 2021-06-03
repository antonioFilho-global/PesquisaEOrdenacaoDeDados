/* 1) Faça com que o algoritmo insertionSort ordene um vetor de inteiros em ordem decrescente. */
vetor = [2, 15, 20, 1, 3, 9, 8, 5]

function insertionSort(vetor) {
    let atual
    for (let i = 1; i < vetor.length; i++) {
        let j = i - 1
        atual = vetor[i]
        while (j >= 0 && atual > vetor[j]) {
            vetor[j+1] = vetor[j]
            j-- 
        }
        vetor[j+1] = atual
    }
    return vetor
}

console.log(insertionSort(vetor))