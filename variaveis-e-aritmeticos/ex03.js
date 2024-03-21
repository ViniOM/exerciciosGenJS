const input = require("readline-sync");

const salarioBruto = input.questionFloat("Qual o seu salario? ");
const adicionalNoturno = input.questionFloat("Qual o valor de adicional noturno? ");
const horasExtras = input.questionFloat("Quantas horas extras trabalhou? ");
const descontos = input.questionFloat("Qual o valor a ser descontado? ");
const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos; 

console.log(`Seu salario liquido é R$ ${salarioLiquido.toFixed(2)}`)