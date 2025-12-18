const params = new URLSearchParams(window.location.search);

const produto = params.get("produto");
const preco = params.get("preco");
const img = params.get("img");

if (produto) {
  document.getElementById("nomeProduto").innerText = produto;
  document.getElementById("precoProduto").innerText = `R$ ${preco}`;
  document.getElementById("imgProduto").src = `imagens/${img}`;
}

function comprar() {
  const tamanho = document.getElementById("tamanho").value;

  if (tamanho === "Selecione o tamanho") {
    alert("Escolha um tamanho!");
    return;
  }

  const mensagem = `Olá! Quero comprar:\n${produto}\nTamanho: ${tamanho}\nPreço: R$ ${preco}`;

  const telefone = "55SEUNUMEROAQUI";
  window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`);

  window.location.href = "sucesso.html";
}
