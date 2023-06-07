
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const celularInput = document.querySelector("#celular");
const mensagemTextarea = document.querySelector("#mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  if (nameInput.value === "") {
    alert("Por favor, preencha o campo nome!");
    return;
  }

  if (celularInput.value === "") {
    alert("Por favor, preencha o campo celular!");
    return;
  }

  if (mensagemTextarea.value === "") {
    alert("Por favor, preencha o Mensagem!");
    return;
  }


  form.submit(alert("Dados enviados com sucesso!"));

})