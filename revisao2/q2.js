/* 2) Considere um struct aluno com número de matrícula, nome e média. 
Aplique algum algoritmo para ordenar um vetor por média (decrescente).
Caso a média de 2 alunos seja igual, ordena por nome (crescente). */

/* Usando Função construtora  */

function Aluno(matricula, nome, media) {
    this.matricula = matricula;
    this.nome = nome;
    this.media = media;
}


let ana = new Aluno("1", "ana", 6)
let maria = new Aluno("2", "maria", 7)
let pedro = new Aluno("3", "pedro", 4)
let jose = new Aluno("4", "jose", 8)
let julio = new Aluno("5", "julio", 5)

let estudantes = [ana, maria, pedro, jose, julio]

let lista = []
for (estudante of estudantes) {
    lista.push(estudante.media, estudante.nome) 
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
      
    return quickSort(maiores).concat(iguais).concat(quickSort(menores))
}