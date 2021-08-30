campoFiltro.addEventListener("input", function () {
  const pacientesInseridos = document.querySelectorAll(".paciente");
  pacientesInseridos.forEach((paciente) => {
    const nome = paciente.querySelector(".info-nome").textContent;
    if (this.value !== nome) {
      paciente.classList.add("element-none");
    } else {
      paciente.classList.toggle("element-none");
    }
  });
  if (this.value === "") {
    pacientesInseridos.forEach((paciente) =>
      paciente.classList.remove("element-none")
    );
  }
});
