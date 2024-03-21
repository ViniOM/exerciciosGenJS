const input = require("readline-sync")

const n1 = input.questionFloat("Qual a primeira nota? ")
const n2 = input.questionFloat("Qual a segunda nota? ")
const n3 = input.questionFloat("Qual a terceira nota? ")
const n4 = input.questionFloat("Qual a quarta nota? ")

const dif = (n1 * n2) - (n3 * n4)

console.log(dif.toFixed(1))