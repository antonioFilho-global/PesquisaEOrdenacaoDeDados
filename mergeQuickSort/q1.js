/* 1) Dada a sequência de números: 3 4 9 2 5 1 8, ordene em ordem crescente utilizando os
algoritmos QuickSort, apresentando a sequência dos números a cada passo (Teste de Mesa).
 */

function quickSort(array) {
    if (array.length <= 1) return array

    const pivo = array[0];

    /*filtrando todos elementos menores que o pivo*/
    const menores = array.filter( n => n < pivo)
    console.log("Menores do que o pivo")
    console.log(menores) 

    /* filtrando todos elementos iguais ao pivo*/
    const iguais = array.filter( n => n === pivo)
    console.log("Iguais ao pico")
    console.log(iguais)

    /* filtrando todos elementos maiores que o pivo  */
    const maiores = array.filter( n => n > pivo)
    console.log("Maiores do que o pivo")
    console.log(maiores)
    
    return quickSort(menores).concat(iguais).concat(quickSort(maiores))
}

console.log(quickSort([3, 4, 9, 2, 5, 1, 8]))