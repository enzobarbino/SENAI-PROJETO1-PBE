const criarTarefa = (req, res) => {
  res.end("criarTarefas vou implementar");
};

const mostrarTarefas = (req, res) => {
  tarefas = 
  [
    { dia: "24/02/2026", horas: "13:00", descricao: "Estudar Excel" },
    { dia: "27/02/2026", horas: "17:00", descricao: "Estudar Matemática" }
  ];

  //res.send("blablabla"); -> Para se usar o método 'send' é obrigatório escrever por inteiro a String.
  //res.render("index", {mensagem: "mamãe eu te amo"}); -> O método 'render' pega as informações de uma view,
  //caso tenha a variável '<%= mensagem %>' no .ejs ele vai grudar a função '{mensagem: blabla}' no html,
  //e puxar para a rota.
  res.render("index", { title: "Tasklist", dados:tarefas }); // {title: "", mensagem: ""} -> Objeto Literal
  //O objeto literal permite com que os dados sejam informados de uma vez, sem precisar ficar usando funções para
  //adicionar esses dados, concatenando as informações na 'tag de expressão/tag de saída'(<%= %>).
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
