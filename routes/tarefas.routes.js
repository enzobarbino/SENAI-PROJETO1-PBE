const express = require("express");
const tarefasController = require("../controller/tarefas.controller");
const router = express.Router();

router.get("/", tarefasController.mostrarTarefas);
//O método 'GET' (pode ser trocado por Post, Put, Patch ou Delete para mudar a função do código),
//do método HTTP, vem após a variável 'APP'.
router.post("/Cadastrar", tarefasController.criarTarefa);

module.exports = router; //Necessário para o uso das rotas fora deste módulo.