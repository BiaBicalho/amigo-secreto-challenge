let listaAmigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo(){
  let amigo = document.querySelector('input').value;

  if (amigo  == ''){
    alert('Por favor, insira um nome');
  }
  else{
    listaAmigos.push(amigo);
  }
  limparCampo();
}


// Função para atualizar a lista na tela
function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ""; // limpa a lista antes de atualizar
  
  for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement('li');
    item.textContent = listaAmigos[i];
    lista.appendChild(item); // atualiza o item na lista do html
  }
}

// Função para sortear um amigo da lista
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Não há amigos para sortear!");
    return;
  }
  
  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Gera índice aleatório
  let amigoSorteado = listaAmigos[indiceAleatorio]; // // Pega o amigo correspondente ao índice
  
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
}

function limparCampo(){
  let amigo = document.querySelector('input');
  amigo.value = '';
}