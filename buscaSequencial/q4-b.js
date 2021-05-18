/* – Sequência ordenada */
const numeros = [5, 1, 1, 9, 10, 10, 1, 2,  6, 7, 8, 3, 4, 5,]

/* Como no funcionamento do quikSort,É gerado 3 sub array's 
sendo os numeros menos que o pivo, numeros iguais(que deve ser eliminado)
que o pivo e numeros maiores que o pivo. */
function quickSort(array) {
    if (array.length <= 1) return array

    const pivo = array[0];

    /*filtrando todos elementos menores que o pivo*/
    const menores = array.filter( n => n < pivo)

    /* filtrando todos elementos iguais ao pivo*/
    const iguais = array.filter( n => n === pivo)
    
    /* filtrando todos elementos maiores que o pivo  */
    const maiores = array.filter( n => n > pivo)

    return quickSort(menores).concat(iguais).concat(quickSort(maiores))
}
numerosOrdenados = quickSort(numeros)
/* console.log(numerosOrdenados) */
function eliminarRepet(array) {
    const numerosSemRepeticao = new Set();
    array.forEach((array) => {
        numerosSemRepeticao.add(array)
    })

    return elementosUnicos = [...numerosSemRepeticao.values()] 
}
console.log(eliminarRepet(numerosOrdenados))