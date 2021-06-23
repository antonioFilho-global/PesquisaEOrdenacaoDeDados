/* 4) Contabilize o número de trocas realizadas pelos algoritmos de ordenação merge sort e quick sort. */

vetor = [4, 3, 9, 2, 7, 1, 5, 8];

/* MergeSort */
/* É feito 9 trocas */
function MergeSort(vetor) {
    let tamanho = vetor.length           
    let meio                     
    let inicio                       
    let fim   

    if (tamanho < 2) {
      return vetor
    }
  
    meio = Math.floor(tamanho/2)
    inicio = vetor.slice(0, meio)    
    fim = vetor.slice(meio)

    return merge(MergeSort(inicio), MergeSort(fim))
}
  
function merge(inicio, fim) {
    let ordenado = [], i = 0, j = 0;

    while(i < inicio.length && j < fim.length) {      
        if(inicio[i] < fim[j]) {
        ordenado.push(inicio[i++])       
      } else {                     
        ordenado.push(fim[j++])
      }
    }

    return ordenado.concat(inicio.slice(i)).concat(fim.slice(j))
}

console.log(MergeSort(vetor))

/*QuickSort */
/* É feito 5 trocas */
let trocas = 0
function quickSort(array) {
    if (array.length <= 1) return array

    const pivo = array[0];

    /*filtrando todos elementos menores que o pivo*/
    const menores = array.filter( n => n < pivo)

    /* filtrando todos elementos iguais ao pivo*/
    const iguais = array.filter( n => n === pivo)

    /* filtrando todos elementos maiores que o pivo  */
    const maiores = array.filter( n => n > pivo)
    trocas = trocas + 1
    console.log(trocas)
    return quickSort(menores).concat(iguais).concat(quickSort(maiores))
}

console.log(quickSort([4, 3, 9, 2, 7, 1, 5, 8]))