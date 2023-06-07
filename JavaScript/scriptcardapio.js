function trocarImagem(elemento, imgDeslikeId, imgLikeId) {
  var imgDeslike = document.getElementById(imgDeslikeId);
  var imgLike = document.getElementById(imgLikeId);
  
  if (elemento.id === imgDeslikeId) {
    imgDeslike.style.display = "none";
    imgLike.style.display = "inline";
  } else if (elemento.id === imgLikeId) {
    imgDeslike.style.display = "inline";
    imgLike.style.display = "none";
  }
}