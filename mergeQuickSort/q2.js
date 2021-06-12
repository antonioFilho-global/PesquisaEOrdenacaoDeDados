/* 2) Dada a sequência de números: 3 4 9 2 5 8 2 1 7 4 6 2 9 8 5 1, ordene-a em ordem não decrescente segundo os seguintes algoritmos, apresentando a sequência obtida após cada passo do algoritmo: 
(a) MergeSort 
(b) QuickSort  */

/* A) */
vetor = [3, 4, 9, 2, 5, 8, 2, 1, 7, 4, 6, 2, 9, 8, 5, 1];

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
    let ordenado = [],
        i = 0,
        j = 0
  
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