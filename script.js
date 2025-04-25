// let frutas = ["maçã", "banana","melancia", "laranja","morango"]

// frutas[3] = "melancia"
// console.log(frutas[3])

// frutas.push("maçã")
// console.log(frutas)

// frutas.pop("banana");
// console.log(frutas);  // ["maçã", "banana"]

// frutas.shift("laranja");
// console.log(frutas);  // ["banana", "laranja"]

// frutas.unshift("maçã");
// console.log(frutas);  // ["maçã", "banana", "laranja"]

// for (const frutas in frutas) {
//     console.log(frutas[frutas])
// }

// let pessoas = [
//     {
//         nome: "geyson",
//         idade: 18,
//         profissão: "analista",
//         dataN: "10/10/2010"
//     },
//     {
//         nome: "marfisa",
//         idade: 20,
//         profissão: "psicologa",
//         dataN: "10/10/2015"
//     },
// ]
// console.log(pessoas[1].nome)

let livros = []

const qtdelivros = Number(prompt('quantos livros salvos:'))

for (let i = 1; i <= qtdelivros; i++) {
    let livro = prompt('nome do livro')
    livros.push(livro)
    let index = i - 1
    console.log(livros)

}
console.log(livros)
const nomeLivro = prompt('digite o nome do livro')

const livroRemovido = livros.indexOf(nomeLivro)
// pesquisa o livro
console.log('livroRemovido', livroRemovido)

if (livroRemovido != -1) {
    livros.splice(livroRemovido, 1)
}


console.log(livros)

