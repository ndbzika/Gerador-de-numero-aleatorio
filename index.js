//Selecionando botão  e lista não ordenada
const botaoGerar = document.querySelector("#botaoGerar");

const lista = document.querySelector("#lista");

//Função será executada apenas quando o botão for clickado
botaoGerar.addEventListener("click", gerarNumero);

//Função para gerar números aleatórios
function gerarNumero() {
  //Atribuindo a variável um numero inteiro e real
  let numeroAleatorio = Math.floor(Math.random() * 100);

  //Criando elemento li e dando uma classe para ele
  let itemLista = document.createElement("li");
  itemLista.classList.add("item-lista");
  //Atribuindo o numero gerado ao conteudo do elemento li
  itemLista.textContent = numeroAleatorio;

  //Elemento adicionado antes do último (na frente, como uma iserção em pilha)
  lista.prepend(itemLista);
}