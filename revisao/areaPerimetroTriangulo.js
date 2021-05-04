/*3) Crie um programa para calcular a área e o perímetro de um retângulo.
Preencha os parâmetros correspondentes à área e perimetro dentro da função. */

function retanguloPerimetro (base, altura) {
    const perimetro = (base + altura) * 2
    return perimetro
}

function retanguloArea (base, altura) { 
    const areaRetangulo = base * altura
    return areaRetangulo
}

console.log(retanguloPerimetro(7, 3))
console.log(retanguloArea(7, 3))