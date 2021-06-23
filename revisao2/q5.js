function Pessoa(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}


let ana = new Pessoa("ana", 23, 70)
let maria = new Pessoa("maria", 20, 65)
let joao = new Pessoa("joao", 15, 55)
let julia = new Pessoa("julia", 28, 65)
let antonio = new Pessoa("antonio", 22, 72)

let pessoas = [ana, maria, joao, julia, antonio]

console.log(pessoas)

let lista = []
for (pessoa of pessoas) {
    lista.push(pessoa.idade, pessoa.nome) 
}
console.log(lista)
console.log(quickSort(lista))

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