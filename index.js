const botaoGerar = document.querySelector("#botaoGerar");

const lista = document.querySelector("#lista");

botaoGerar.addEventListener("click", function gerarNumero() {
  let numeroAleatorio = Math.floor(Math.random() * 100);

  let itemLista = document.createElement("li");
  itemLista.classList.add("item-lista");

  itemLista.textContent = numeroAleatorio;

  lista.prepend(itemLista);
});
