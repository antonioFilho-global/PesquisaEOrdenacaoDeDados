/* 2) Usando o vetor 72 12 62 69 27 67 41 56 33 74 e um algoritmo de insertion sort informe o
número total de trocas necessárias para que o vetor se torne ordenado. */

vetor = [72, 12, 62, 69, 27, 67, 41, 56, 33, 74]

function insertionSort(vetor) {
    let atual
    let qtdTrocas = 0
    for (let i = 1; i < vetor.length; i++) {
        let j = i - 1
        atual = vetor[i]
        while (j >= 0 && atual < vetor[j]) {
            vetor[j+1] = vetor[j]
            j-- 
        }
        
        qtdTrocas++
        /* Troca */
        vetor[j+1] = atual
    }
   /*  Mostrando a quantidade de trocas necessárias */
    console.log(qtdTrocas)
    return vetor
}

console.log(insertionSort(vetor))