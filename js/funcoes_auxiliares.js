const coloreBackground = function (elemento) {
  elemento.querySelectorAll("td").forEach((linha) => {
    linha.classList.add("paciente-invalido");
  });
};
const calculaIMC = function (peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
};
const validaAltura = function (altura) {
  return altura <= 0 || altura >= 3.0;
};
const validaPeso = function (peso) {
  return peso < 0 || peso >= 500;
};
const validaPaciente = function (paciente) {
  const pacientePeso = paciente.querySelector(".info-peso").textContent;
  const pacienteAltura = paciente.querySelector(".info-altura").textContent;
  const pacienteIMC = paciente.querySelector(".info-imc");

  if (validaPeso(pacientePeso)) {
    coloreBackground(paciente);
    pacienteIMC.textContent = "Peso inválido !";
    if (validaAltura(pacienteAltura)) {
      pacienteIMC.textContent = "Altura e peso inválidos !";
    }
  } else if (validaAltura(pacienteAltura)) {
    coloreBackground(paciente);
    pacienteIMC.textContent = "Altura inválida !";
  } else {
    pacienteIMC.textContent = calculaIMC(pacientePeso, pacienteAltura);
  }
};
