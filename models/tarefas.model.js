const db = require("../db/dbConnect");

class Tarefa {
    //Read
    static async readAllTarefas() {
    console.log("tarefas.model.js", "readAllTarefas()");
    const query = "select * from tarefas;";
    //var dados = await db.executarQuery(query);
    return db.executarQuery(query);
  }
    
    static async cadastrarTarefa(tarefa) {
      console.log("tarefas.model.js", "cadastrarTarefa()");
      console.log("tarefa", tarefa);
      const query = "INSERT INTO tarefas(data, hora, descricao) VALUES (?, ?, ?)";
      return db.executarQuery(query, [tarefa.dataTarefa, tarefa.horaTarefa, tarefa.descricaoTarefa]);
    }
}

Tarefa.readAllTarefas();

module.exports = Tarefa;