const tituloH1 = document.querySelector("#titulo-principal");
const pacientes = document.querySelectorAll(".paciente");
const backgroundPage = document.querySelector("body");
const botaoAdicionar = document.querySelector("#adicionar-paciente");
const form = document.querySelector("#adicao-form");
const tabela = document.querySelector("#tabela-pacientes");

const coloreBackground = function (elemento) {
  elemento.querySelectorAll("td").forEach((linha) => {
    linha.classList.add("paciente-invalido");
  });
};
const calculaIMC = function (peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
};
const validaPaciente = function (paciente) {
  const pacientePeso = paciente.querySelector(".info-peso").textContent;
  const pacienteAltura = paciente.querySelector(".info-altura").textContent;
  const pacienteIMC = paciente.querySelector(".info-imc");

  if (pacientePeso < 0 || pacientePeso >= 500) {
    coloreBackground(paciente);
    pacienteIMC.textContent = "Peso inválido !";
    if (pacienteAltura < 0 || pacienteAltura > 3.0) {
      pacienteIMC.textContent = "Altura e peso inválidos !";
    }
  } else if (pacienteAltura <= 0 || pacienteAltura >= 3.0) {
    coloreBackground(paciente);
    pacienteIMC.textContent = "Altura inválida !";
  } else {
    pacienteIMC.textContent = calculaIMC(pacientePeso, pacienteAltura);
  }
};
backgroundPage.classList.add("background-page");
tituloH1.textContent = "Aparecida Nutricionista";

//console.log(pacientes.length);
pacientes.forEach((paciente) => {
  validaPaciente(paciente);
});

botaoAdicionar.addEventListener("click", function (e) {
  e.preventDefault();

  const peso = form.peso.value;
  const altura = form.altura.value;
  const nome = form.nome.value;
  const gordura = form.gordura.value;

  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  const pesoTd = document.createElement("td");
  const alturaTd = document.createElement("td");
  const nomeTd = document.createElement("td");
  const gorduraTd = document.createElement("td");
  const imcTd = document.createElement("td");

  pesoTd.classList.add("info-peso");
  alturaTd.classList.add("info-altura");
  nomeTd.classList.add(".info-nome");
  gorduraTd.classList.add("info-gordura");
  imcTd.classList.add("info-imc");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaIMC(peso, altura);

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  tabela.appendChild(pacienteTr);
  validaPaciente(pacienteTr);

  console.log(pacienteTr);

  //console.log(peso, altura, nome, gordura);
});
