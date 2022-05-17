/* let nome = "Edson";
let sobrenome = "Rodrigues";
let idade = 20;
const pessoa = [sobrenome, idade, nome];
[nome, sobrenome, idade] = pessoa;

console.log(nome, sobrenome, idade); */

/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [primeiroNumero, segundoNumero, , quatro, , , sete] = array; */
/*console.log(primeiroNumero, segundoNumero, resto); rest operator */

/* const pessoa = {
  nome: "Rogerio",
  sobrenome: "Alves",
  idade: 21,
  endereco: {
    rua: "rosa e silva",
    numero: 364,
    bairro: "Parque capibaribe",
  },
};

const {
  endereco: { rua = 40, numero, bairro },
  ...resto
} = pessoa;

console.log(rua, numero, bairro, resto);
 */

/* const array1 = [1, 2, 3, 4, 5];
const arrayspread = [...array1];

array1.shift();

console.log(array1);
console.log(arrayspread); */

/* function calculadora(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    switch (operador) {
      case "+":
        acumulador += numero;
        break;
      case "-":
        acumulador -= numero;
        break;
      case "*":
        acumulador *= numero;
        break;
      case "/":
        acumulador /= numero;
        break;
    }
  }
  return acumulador;
} */

function calculadora(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  return acumulador;
}

const soma = calculadora("+", 0, 4, 5, 1);
console.log(soma);
const sub = calculadora("-", 10, 2, 4);
console.log(sub);
const mult = calculadora("*", 2, 4, 2);
console.log(mult);
const div = calculadora("/", 20, 2, 2);
console.log(div);
