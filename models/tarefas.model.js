const db = require("../db/dbConnect");

class Tarefa {
  //Read
    static async readAllTarefas() {
    console.log("tarefas.model.js", "readAllTarefas()");
    const query = "select DATE_FORMAT(data, '%d/%m/%Y') data, hora, descricao from tarefas;";
    //var dados = await db.executarQuery(query);
    return db.executarQuery(query);
  }
}

Tarefa.readAllTarefas();

module.exports = Tarefa;