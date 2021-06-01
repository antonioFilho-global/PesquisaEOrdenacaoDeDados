/*  1) Escreva o algoritmo do bubble sort otimizado para para a iteração caso o vetor já se encontre
       ordenado.
*/

function bubbleSortOtimizado(items) {
    //Usado para evitar comparações desnecessárias 
    let verificador
    let ultimoOrdenado = items.length - 1
    do {
        verificador = false
        for (let i = 0; i < ultimoOrdenado; i++) {
            if (items[i] > items[i + 1]) {
                //Fazendo atroca de valores
                [items[i], items[i + 1]] = [items[i + 1], items[1]]
                verificador = true
            }
        }
        ultimoOrdenado--
    } while (verificador)
    //Se passar pelo vetor/lista e não for realizada nenhuma troca, 
    //é pq o vetor já ta ordenado 
    return items
}

const items = [1, 18, 5, 5, 9, 17, 1]
console.log(bubbleSortOtimizado(items))