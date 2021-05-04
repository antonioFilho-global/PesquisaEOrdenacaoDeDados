/* 3)a)Crie uma estrutura (struct) para guardar 
as informações de um aluno. O aluno deve ter um código (int),
nome (até 30 caracteres) */

//Objetos são grupos aninhados de pares nome/valor


/* Usando Função construtora  */
function Aluno(codigo, nome, disciplinas) {
    this.codigo = codigo;
    this.nome = nome;
    this.disciplinas = disciplinas;
}

disciplinas = [
    disciplina1 = {
    codigo: 01,
    nome: 'História',
    notas: [10, 10, 10],
    situacao: 'Aprovado'
},

disciplina2 = {
    codigo: 02,
    nome: 'Português',
    notas: [10, 8, 10],
    situacao: 'Aprovado'
},

disciplina3 = {
    codigo: 03,
    nome: 'Matemática',
    notas: [8, 10, 9],
    situacao: 'Aprovado'
}]

const ana = new Aluno("03", "Ana", disciplinas);



function mediaDoAluno(ana) {
    total = 0;
    for (disciplina of disciplinas) {
        let linha = disciplina.notas 
            
        function media(total, number) {
           return total + number / linha.length
        }
        /* console.log(linha.reduce(media, 0)) */
        var medias = linha.reduce(media, 0)
        console.log(medias)
    }
}


function classificaAluno(ana) {
    total = 0;
    for (disciplina of disciplinas) {
        let = disciplina.notas 
            
        function media(total, number) {
           return total + number / linha.length
        }
        /* console.log(linha.reduce(media, 0)) */
        var medias = linha.reduce(media, 0)
        console.log(medias)
    }
}

console.log(ana) 
mediaDoAluno(ana)
classificaAluno(ana)