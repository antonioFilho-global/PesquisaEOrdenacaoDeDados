/* 1) Procurar um número inteiro em um vetor com valores duplicados:
a) Imprimir todos os índices do número procurado
b) Imprimir somente o primeiro índice (interrompa a busca) */

numeros = [1, 1, 2, 2, 3, 3, 3]
/* A) */
function imprimirIndicesDeOcorrencia (numeros, numeroProcurado) {
    indicesDeOcorrencia = [];
    for (let i = 0; i < this.numeros.length ; i++) {
        if (numeroProcurado == numeros[i]) {
            indicesDeOcorrencia.push(i)
        }
    }
    return indicesDeOcorrencia
}

console.log(imprimirIndicesDeOcorrencia(numeros, 3))

/* B) */
function imprimirPrimeiroIndiceDeOcorrencia (numeros, numeroProcurado) {
    indicesDeOcorrencia = [];
    for (let i = 0; i < this.numeros.length ; i++) {
        if (numeroProcurado == numeros[i]) {
            indicesDeOcorrencia.push(i)
            break
        }
    }
    return indicesDeOcorrencia
}

console.log(imprimirPrimeiroIndiceDeOcorrencia (numeros, 3))