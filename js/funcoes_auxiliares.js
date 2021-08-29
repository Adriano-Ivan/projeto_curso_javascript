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
  return peso <= 0 || peso >= 500;
};
const exibeMensagensDeErroNoSpan = function (mensagem) {
  spanErro.textContent = mensagem;
};
const validaPaciente = function (paciente) {
  const pacientePeso = paciente.querySelector(".info-peso").textContent;
  const pacienteAltura = paciente.querySelector(".info-altura").textContent;
  const pacienteIMC = paciente.querySelector(".info-imc");
  const pacienteNome = paciente.querySelector(".info-nome").textContent;
  const pacienteGordura = paciente.querySelector(".info-gordura").textContent;

  if (validaPeso(pacientePeso)) {
    coloreBackground(paciente);
    pacienteIMC.textContent = "Peso inválido !";
    exibeMensagensDeErroNoSpan("Verifique o peso !");
    if (validaAltura(pacienteAltura)) {
      pacienteIMC.textContent = "Altura e peso inválidos !";
      exibeMensagensDeErroNoSpan("Verifique o peso e a altura!");
      if (!pacienteNome) {
        exibeMensagensDeErroNoSpan("Verifique o nome, o peso e a altura !");
        if (!pacienteGordura)
          exibeMensagensDeErroNoSpan(
            "Verifique os campos de peso, altura, nome e gordura !"
          );
        return false;
      }
      if (!pacienteGordura)
        exibeMensagensDeErroNoSpan(
          "Verifique os campos de peso, altura e gordura !"
        );
      return false;
    }
    if (!pacienteNome) {
      exibeMensagensDeErroNoSpan("Verifique o nome e o peso !");
      if (!pacienteGordura)
        exibeMensagensDeErroNoSpan(
          "Verifique os campos de peso, nome e gordura !"
        );
    }

    return false;
  } else if (validaAltura(pacienteAltura)) {
    coloreBackground(paciente);
    pacienteIMC.textContent = "Altura inválida !";
    exibeMensagensDeErroNoSpan("Verifique a altura !");

    if (!pacienteNome) {
      exibeMensagensDeErroNoSpan("Verifique o nome e a altura !");
      if (!pacienteGordura)
        exibeMensagensDeErroNoSpan(
          "Verifique os campos de gordura, altura e nome !"
        );
      return false;
    }
    if (!pacienteGordura)
      exibeMensagensDeErroNoSpan("Verifique os campos de gordura e altura !");
    return false;
  } else if (!pacienteNome) {
    exibeMensagensDeErroNoSpan("Verifique o nome");
    if (!pacienteGordura) {
      exibeMensagensDeErroNoSpan("Verifique os campos de gordura e nome!");
    }
    return false;
  } else if (!pacienteGordura) {
    exibeMensagensDeErroNoSpan("Verifique o campo de gordura !");
    return false;
  } else {
    pacienteIMC.textContent = calculaIMC(pacientePeso, pacienteAltura);
    spanErro.textContent = "";
  }
  return true;
};
