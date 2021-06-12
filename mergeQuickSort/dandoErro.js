/* 2) Dada a sequência de números: 3 4 9 2 5 8 2 1 7 4 6 2 9 8 5 1, ordene-a em ordem não decrescente segundo os seguintes algoritmos, apresentando a sequência obtida após cada passo do algoritmo: 
(a) MergeSort 
(b) QuickSort  */

/* A) */
vetor = [1, 7, 4, 6, 2, 9];
function mergeSort(vetor, inicio, fim) {
    if (inicio < fim) {
        /* Pegando o valor do meio, arrendodando para baixo caso valor não inteiro */
        let meio = Math.floor((inicio + fim) / 2);
        /* Chamdas recursivas, fazendo a divisão do vetor  */
        mergeSort(vetor, inicio, meio);
        mergeSort(vetor, meio + 1, fim);
        intercalar(vetor, inicio, meio, fim);
    }

    function intercalar(vetor, inicio, meio, fim) {
        let tamanho = fim - inicio + 1;
        esquerdo = inicio;
        direito = meio + 1;
        let fim_esquerdo = false, fim_direito = false;
        let ordenado = [];
    
        for (let i = 0; i < tamanho; i++) {
            if (!fim_esquerdo && !fim_direito) {
                if (vetor[esquerdo] < vetor[direito]) {
                    ordenado[i] = vetor[esquerdo++];
                } else {
                    ordenado[i] = vetor[direito++];
                }
                if (esquerdo > meio) fim_esquerdo = true;
                if (direito > fim) fim_direito = true;
            } else {
                if (!fim_esquerdo) {
                    ordenado[i] = vetor[esquerdo++];
                } else {
                    ordenado[i] = vetor[direito++];
                }
            }
        }
        console.log(ordenado);
    }
}



mergeSort(vetor, 0, 5);



/* B) */
function quickSort(array) {
    if (array.length <= 1) return array

    const pivo = array[0];

    /*filtrando todos elementos menores que o pivo*/
    const menores = array.filter( n => n < pivo)

    /* filtrando todos elementos iguais ao pivo*/
    const iguais = array.filter( n => n === pivo)

    /* filtrando todos elementos maiores que o pivo  */
    const maiores = array.filter( n => n > pivo)

    return quickSort(menores).concat(iguais).concat(quickSort(maiores))
}

console.log(quickSort([3, 4, 9, 2, 5, 8, 2, 1, 7, 4, 6, 2, 9, 8, 5, 1]))