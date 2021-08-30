tabela.addEventListener("dblclick", function (event) {
  if (event.target.tagName === "TD") {
    event.target.parentNode.classList.add("fade-out");
    console.log(event.target.tagName);
  }
  const remove = function () {
    event.target.closest(".paciente").remove();
    // const alvoDoEvento = event.target;
    // const paiDoAlvo = alvoDoEvento.parentNode;
    // paiDoAlvo.remove();
  };
  if (event.target.tagName != "TH") setTimeout(remove, 500);
  //   event.target.closest(".paciente").remove();
  //   console.log(event.target);
});

// pacientes.forEach((paciente) => {
//   paciente.addEventListener("dblclick", function (e) {
//     e.target.closest(".paciente").remove();
//     // this.remove()
//   });
// });
