// O parâmetro "elemento" se refere ao elemento HTML que disparou o evento de clique.
// "imgDeslikeId" e "imgLikeId" são os IDs das imagens.
function trocarImagem(elemento, imgDeslikeId, imgLikeId) {
  
  // Variável que armazena o elemento da imagem com o ID "imgDeslikeId".
  var imgDeslike = document.getElementById(imgDeslikeId);
  // Variável que armazena o elemento da imagem com o ID "imgLikeId".
  var imgLike = document.getElementById(imgLikeId);
  
  // Se o ID do elemento for estritamente igual ao ID da imagem "imgDeslikeId".
  if (elemento.id === imgDeslikeId) {
    imgDeslike.style.display = "none";
    imgLike.style.display = "inline";
  } 
  // Caso contrário, ou seja, se o ID do elemento for igual ao ID da imagem "imgLikeId".
  else {
    imgDeslike.style.display = "inline";
    imgLike.style.display = "none";
  }
}