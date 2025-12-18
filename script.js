function comprar(produto, preco, idTamanho) {
  const tamanho = document.getElementById(idTamanho).value;

  if (tamanho === "Selecione o tamanho") {
    alert("Escolha um tamanho!");
    return;
  }

  const mensagem = `Olá! Quero comprar:\nProduto: ${produto}\nTamanho: ${tamanho}\nPreço: R$ ${preco}`;

  const telefone = "55SEUNUMEROAQUI";
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
