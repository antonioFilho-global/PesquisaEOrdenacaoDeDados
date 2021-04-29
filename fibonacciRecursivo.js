/* 2) Crie um algoritmo recursivo para calcular 10 números da série fibonacci. */

/* Fibonacci é dado pela lógica abaixo
1 + 2 = 3
3 + 2 = 5
[1, 2, 3, 5, + soma dos dois anteriores da sequência......] */

function fibonacci(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
   return fibonacci(n - 1) + fibonacci(n - 2)
} 


lista = [];

for (let i = 1; i <= 10; i++ ) {
    sequencia = lista.push(fibonacci(i))
} 

console.log(lista)


