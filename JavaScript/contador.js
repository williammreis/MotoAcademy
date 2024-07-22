alert("Hello Word!");
document.addEventListener("DOMContentLoaded", () => {
  const contadorElemento = document.getElementById("counter");
  const clickBotao = document.getElementById("clickBotao");

  let contador = 0;
  clickBotao.addEventListener("click", () => {
    contador++;
    contadorElemento.textContent = contador;
  });
});
