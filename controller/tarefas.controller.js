const criarTarefa = (req,res) => {
    res.end("criarTarefas vou implementar")
};

const mostrarTarefas = (req, res) => {
  //res.send("blablabla"); -> Para se usar o método 'send' é obrigatório escrever por inteiro a String.
  //res.render("index", {mensagem: "mamãe eu te amo"}); -> O método 'render' pega as informações de uma view,
  //caso tenha a variável '<%= mensagem %>' no .ejs ele vai grudar a função '{mensagem: blabla}' no html,
  //e puxar para a rota.
  res.render("index", {title: "", mensagem: "mamãe eu te amo :D"});
};

const alterarTarefa = (req, res) => {
    res.end("alterarTarefas vou implementar")
};

const deletarTarefa = (req, res) => {
    res.end("deletarTarefas vou implementar")
};

module.exports = {
    criarTarefa,
    mostrarTarefas,
    alterarTarefa,
    deletarTarefa
};
