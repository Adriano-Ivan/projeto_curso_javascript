campoFiltro.addEventListener("input", function () {
  const pacientesInseridos = document.querySelectorAll(".paciente");
  pacientesInseridos.forEach((paciente) => {
    const nome = paciente.querySelector(".info-nome").textContent;
  });
});
