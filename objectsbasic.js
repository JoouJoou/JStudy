/* function criapessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa1 = criapessoa("Rogerio", "Alves", 21);
console.log(pessoa1.nome); */

function criapessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,

    fala() {
      console.log(`Tenho ${this.idade} anos!`);
    },
    envelhece() {
      this.idade++;
    },
  };
}

const pessoa1 = criapessoa("Rogerio", "Alves", 21);
pessoa1.fala();
pessoa1.envelhece();
pessoa1.fala();
