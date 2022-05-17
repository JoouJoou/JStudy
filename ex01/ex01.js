function MeuEscopo() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");
  const pessoas = [];

  /* form.onsubmit = function (event) {
    event.preventDefault();
    alert(1);
    console.log("Beleza");
  }; */
  function recebeEvento(event) {
    event.preventDefault();
    const nome = form.querySelector(".nome").value;
    const sobrenome = form.querySelector(".sobrenome").value;
    const idade = form.querySelector(".idade").value;
    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;
    pessoas.push(CriaPessoa(nome, sobrenome, idade, peso, altura));
    console.log(pessoas);
    result.innerHTML += `<p>${nome} ${sobrenome} ${idade} ${peso} ${altura}</p>`;
  }

  function CriaPessoa(nome, sobrenome, idade, peso, altura) {
    return {
      nome,
      sobrenome,
      idade,
      peso,
      altura,
    };
  }
  form.addEventListener("submit", recebeEvento);
}
MeuEscopo();
