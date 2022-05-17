/* function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const olaMundo = fala("Mundo!");
console.log(olaMundo);
 */

/* function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(4));
 */

/* function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
function f1(callback) {
  setTimeout(function () {
    console.log("Edu");
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function () {
    console.log("Dudu");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log("Du");
    if (callback) callback();
  }, rand());
}

f1(() => {
  f2(f3);
}); */

/* f1(function () {
  f2(function () {
    f3(function () {
      console.log("Oi!");
    });
  });
}); */

/* IIFE
(function (idade, peso, altura) {
  const sobrenome = "Alves";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }
  function falaNome() {
    console.log(criaNome("Rogério"));
  }
  falaNome();
  console.log(idade, peso, altura);
})(30, 77, 1.66);
 */
