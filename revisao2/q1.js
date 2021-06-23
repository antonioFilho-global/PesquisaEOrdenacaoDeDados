/* 1)  Implemente o bubble sort para ordenar uma string colocando as letras em ordem crescente. */

function bubbleSortString(items) {
    for(let j = 0; j < items.length - 1; j++){
       for (let i = 0; i<items.length -1; i++){
           //A propriedade .localCompare, compara se o elemento testado
            //vem antes na ordem de classificação.
            if (items[i].localeCompare(items[i+1]) > 0){
                //Fazendo atroca de valores
                [items[i], items[i+1]] = [items[i+1], items[i]]
            }  
        }
    }
    return items;     
}

console.log(bubbleSortString(['ze','ana', 'maria', 'antonio', 'camila', 'francisca maria']))