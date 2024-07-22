document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form");
  const resultado = document.getElementById("result");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    resultado.innerHTML = `
        <h2>Dados Enviados</h2>
        <p><strong>Nome: </strong> ${nome.value} </p>
        <p><strong>Email: </strong> ${email.value} </p>
        <p><strong>Mensagem: </strong> ${mensagem.value} </p>
        
      `;

    formulario.reset();
  });
});
