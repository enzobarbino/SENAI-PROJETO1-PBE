const tarefaModel = require("../models/tarefas.model");

const criarTarefa = (req, res) => {
  res.end("criarTarefas vou implementar");
};

const mostrarTarefas = (req, res) => {
  tarefaModel.readAllTarefas().then((tarefas) => {
  res.render("index", { dados: tarefas, title:"Principal" });
  });
};

const alterarTarefa = (req, res) => {
  res.end("alterarTarefas vou implementar");
};

const deletarTarefa = (req, res) => {
  res.end("deletarTarefas vou implementar");
};

module.exports = {
  criarTarefa,
  mostrarTarefas,
  alterarTarefa,
  deletarTarefa,
};
