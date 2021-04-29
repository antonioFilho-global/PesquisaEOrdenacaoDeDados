/* 1) Crie um algoritmo recursivo para calcular o fatorial de um número*/


/* fatorial sem recursividade*/
function fatorial(n) {
    let resultado = 1;
    for(let i = n; i > 1; i--) {
        resultado = resultado * i;
    }
    return resultado;
}

console.log(fatorial(3));

/* fatorial com recursividade*/
function fatorialRecursivo(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    /* fazendo a chamada recursiva */
    return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(3));