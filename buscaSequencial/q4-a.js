/* 4)Escreva um programa que leia uma sequência com N
    números inteiros e imprime a sequência eliminando
    os elementos repetidos.
    – Sequência não-ordenada
    – Sequência ordenada */
    
numeros = [2, 2, 8, 6, 10, 5, 7, 5, 19]
/* console.log(numeros) */

/* – Sequência não-ordenada */

function sequenciaNaoOrdenada(array) {
    /* Set é uma estrutura de dados que 
    só permite armazenar elementos únicos  */
    const numerosSemRepeticao = new Set();

    array.forEach((array) => {
        numerosSemRepeticao.add(array)
    })

    elementosUnicos = [...numerosSemRepeticao.values()]
    return elementosUnicos
}
console.log(sequenciaNaoOrdenada(numeros))