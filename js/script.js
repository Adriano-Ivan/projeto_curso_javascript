const tituloH1 = document.querySelector("#titulo-principal");
const pacientes = document.querySelectorAll(".paciente");

tituloH1.textContent = "Aparecida Nutricionista";

//console.log(pacientes.length);
pacientes.forEach((paciente) => {
  const pacientePeso = paciente.querySelector(".info-peso").textContent;
  const pacienteAltura = paciente.querySelector(".info-altura").textContent;
  const pacienteIMC = paciente.querySelector(".info-imc");

  if (pacientePeso < 0 || pacientePeso >= 500) {
    pacienteIMC.textContent = "Peso inválido !";
    if (pacienteAltura < 0 || pacienteAltura > 3.0) {
      pacienteIMC.textContent = "Altura e peso inválidos !";
    }
  } else if (pacienteAltura <= 0 || pacienteAltura >= 3.0) {
    pacienteIMC.textContent = "Altura inválida !";
  } else {
    const imcResultado = pacientePeso / (pacienteAltura * pacienteAltura);

    pacienteIMC.textContent = imcResultado.toFixed(2);
  }
});
