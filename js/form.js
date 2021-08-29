const obterPacienteDoFormulario = function (form) {
  const paciente = {
    peso: form.peso.value,
    altura: form.altura.value,
    nome: form.nome.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value),
  };
  return paciente;
};
const criarTr = function () {
  const tr = document.createElement("tr");
  tr.classList.add("paciente");
  return tr;
};
const adicionarClasses = function (elementos) {
  // Adiciona classes às tds
  elementos.peso.classList.add("info-peso");
  elementos.altura.classList.add("info-altura");
  elementos.nome.classList.add("info-nome");
  elementos.gordura.classList.add("info-gordura");
  elementos.imc.classList.add("info-imc");
};
const criarTds = function () {
  const elementos = {
    peso: document.createElement("td"),
    altura: document.createElement("td"),
    nome: document.createElement("td"),
    gordura: document.createElement("td"),
    imc: document.createElement("td"),
  };
  adicionarClasses(elementos);
  return elementos;
};
const adicionarConteudo = function (pacienteTds, paciente) {
  pacienteTds.nome.textContent = paciente.nome;
  pacienteTds.peso.textContent = paciente.peso;
  pacienteTds.altura.textContent = paciente.altura;
  pacienteTds.gordura.textContent = paciente.gordura;
  pacienteTds.imc.textContent = paciente.imc;
};
const adicionarTdsAtr = function (pacienteTr, pacienteTds) {
  pacienteTr.appendChild(pacienteTds.nome);
  pacienteTr.appendChild(pacienteTds.peso);
  pacienteTr.appendChild(pacienteTds.altura);
  pacienteTr.appendChild(pacienteTds.gordura);
  pacienteTr.appendChild(pacienteTds.imc);
};
const limparFormulario = function (form) {
  form.reset();
  /*
  form.peso.value = "";
  form.altura.value = "";
  form.nome.value = "";
  form.gordura.value = "";*/
};
const adicionarPaciente = function (e) {
  e.preventDefault();
  // Extrai informações
  const paciente = obterPacienteDoFormulario(form);

  // Cria TR e TD
  const pacienteTr = criarTr();

  const pacienteTds = criarTds();

  // Conteúdo das tds
  adicionarConteudo(pacienteTds, paciente);

  // Adiciona tds à tr
  adicionarTdsAtr(pacienteTr, pacienteTds);

  // Adiciona tr à tabela
  tabela.appendChild(pacienteTr);
  validaPaciente(pacienteTr);
  limparFormulario(form);
};
