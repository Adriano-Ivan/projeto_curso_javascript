"use strict";

backgroundPage.classList.add("background-page");
tituloH1.textContent = "Aparecida Nutricionista";

//console.log(pacientes.length);
pacientes.forEach((paciente) => {
  validaPaciente(paciente);
});

botaoAdicionar.addEventListener("click", adicionarPaciente);
