function logar() {
  let login = document.getElementById("email").value;
  let senha = document.getElementById("password").value;
  const formError = document.querySelector(".validate-error");

  if (login == "2f@escola.pr.gov.br" && senha == "exatas123") {
    location.href = "./src/turma.html";
  } else {
    window.alert("Usuario ou senha, Incorretos. Tente novamente.");
  }
}

/* background squares */
const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;

  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  ulSquares.appendChild(li);
}

/* Clicar no botão com a tecla enter*/
$(document).keypress(function (e) {
  if (e.which == 13) $("#meuBotao").click();
});

$("button").click(function (e) {
  alert(this.innerHTML);
});
