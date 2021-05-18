/*3)Atualizador de valores
    Percorra um vetor e troque o valor pesquisado por outro fornecido
    troca (int *v, int n, int elem, int novo_elem) {
    int indice = pesquisa (v, n, elem)
    //Realizar a troca de valores
    } */

numeros = [1, 2, 3, 4, 10]
function inserirTrocandoElemento (numeros, elemento, novoElemento) {
    for (let i = 0; i < this.numeros.length ; i++) {
        if (elemento == numeros[i]) {
            /*Substituir elemento*/
            numeros.splice(i, i, novoElemento);
            return numeros
        }
    }
}

/*Substituir elemento 10 pelo o novo elemnto 5*/
console.log(inserirTrocandoElemento(numeros, 10, 5))