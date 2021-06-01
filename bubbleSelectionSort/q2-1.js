function bubbleSort(items) {
    for(let j = 0; j < items.length - 1; j++){
       for (let i = 0; i<items.length -1; i++){
            if (items[i] > items[i+1]){
                //Fazendo atroca de valores
                [items[i], items[i+1]] = [items[i+1], items[i]]
            }  
        }
        /* console.log(items) */
    }
    return items;     
}
   
console.log(bubbleSort([9, 5, 7, 3,12]))