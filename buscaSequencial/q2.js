/* 2) Localizar posição para inserir elemento em vetor ordenado */
/* Sem usar a função sort */
numeros = [1, 2, 3, 4, 6, 7, 8, 9, 10]
function inserirElementoNaOrdem (numeros, numeroInserido) {
    for (let i = 0; i < this.numeros.length ; i++) {
        if (numeroInserido > numeros[i] && numeroInserido <= numeros[i + 1]) {
            /* Adiciona o elemento no intervalo correto */
            numeros.splice(i+1, 0, numeroInserido);
            return numeros
        }
    }
}

console.log(inserirElementoNaOrdem(numeros, 5)) 

/* Usando a função sort */
numeros2 = [1, 2, 3, 4, 6, 7, 8, 9, 10]
function inserirElementoUsandoSort (numeros2, numeroInserido) {
    numeros2.push(numeroInserido)
    numeros2.sort(function(a, b) {
        return a - b;
    });
    console.log(numeros2);
} 

inserirElementoUsandoSort(numeros2, 5)