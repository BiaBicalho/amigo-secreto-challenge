let listaAmigos = [];

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

function limparCampo(){
  let amigo = document.querySelector('input');
  amigo.value = '';
}
