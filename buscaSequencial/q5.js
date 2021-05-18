/* Usando Função construtora  */
function Aluno(matricula, nome, notas) {
    this.matricula = matricula
    this.nome = nome
    this.notas = notas
}

const ana = new Aluno(01, "ana", [8, 8, 8])
const maria = new Aluno(02, "maria", [9, 9, 9])
const pedro = new Aluno(03, "pedro", [10, 10, 10])


let estudantes = [ana, maria, pedro]
/* console.log(estudantes)  */

function buscaSequencialMatricula(estudantes, matricula) {
    for (estudante of estudantes) {
        if (estudante.matricula == matricula) {
            return estudante
        }
    }
}

function buscaSequencialNome(estudantes, nome) {
    for (estudante of estudantes) {
        if (estudante.nome == nome) {
            return estudante
        }
    }
}

console.log(buscaSequencialMatricula(estudantes, 01))
console.log(buscaSequencialNome(estudantes, "maria"))