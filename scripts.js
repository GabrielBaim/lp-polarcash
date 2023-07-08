const acodion = document.getElementsByClassName("content-box");

for (i = 0; i < acodion.length; i++) {
  acodion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// Função para gerar um número aleatório entre 800 e 900
function gerarNumeroAleatorio() {
  var numeroAleatorio = Math.floor(Math.random() * 101) + 800; // Gera um número entre 0 e 100 e adiciona 800
  return numeroAleatorio;
}

// Obtém o elemento do span pelo seu id
var spanElement = document.getElementById("active-user");

// Define o número aleatório como alvo
var numeroAleatorio = gerarNumeroAleatorio();

// Variáveis para a animação
var contador = 0;
var intervalo = 10; // Intervalo entre os incrementos em milissegundos
var passo = Math.ceil(numeroAleatorio / (1000 / intervalo)); // Determina o incremento necessário para atingir o número aleatório em 1 segundo

// Função para animar o número
function animarNumero() {
  if (contador <= numeroAleatorio) {
    spanElement.textContent = contador;
    contador += passo;
  } else {
    spanElement.textContent = numeroAleatorio;
    clearInterval(intervalId); // Limpa o intervalo após a animação ser concluída
  }
}

// Inicia a animação
var intervalId = setInterval(animarNumero, intervalo);

function gerarNumeroAleatorio2() {
  var numeroAleatorio2 = Math.floor(Math.random() * 101) + 800; // Gera um número entre 0 e 100 e adiciona 800
  return numeroAleatorio2;
}

// Obtém o elemento do span pelo seu id
var spanElement2 = document.getElementById("done-orders");

// Define o número aleatório como alvo
var numeroAleatorio2 = gerarNumeroAleatorio2();

// Variáveis para a animação
var contador = 0;
var intervalo2 = 10; // Intervalo entre os incrementos em milissegundos
var passo = Math.ceil(numeroAleatorio2 / (1000 / intervalo2)); // Determina o incremento necessário para atingir o número aleatório em 1 segundo

// Função para animar o número
function animarNumero2() {
  if (contador <= numeroAleatorio2) {
    spanElement2.textContent = contador;
    contador += passo;
  } else {
    spanElement2.textContent = numeroAleatorio2;
    clearInterval(intervalId2); // Limpa o intervalo após a animação ser concluída
  }
}

// Inicia a animação
var intervalId2 = setInterval(animarNumero2, intervalo2);

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

window.addEventListener("scroll", function () {
  animeScroll();
});
