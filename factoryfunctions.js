function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return this.nome + " " + this.sobrenome;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      return `${this.nomeCompleto} está ${assunto}`;
    },
    peso,
    altura,
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Rogério", "Alves", 51, 1.66);
const p2 = criaPessoa("Vyctor", "Manoel", 80, 1.75);
console.log(p1.imc);
console.log(p1.fala(`fraco`));
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Rogério Alves da Silva Júnior";
console.log(p1.nomeCompleto);
console.log(p1.fala(`legal`));
