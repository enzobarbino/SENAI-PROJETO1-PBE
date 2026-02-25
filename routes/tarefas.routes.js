const express = require("express");
const tarefasController = require("../controller/tarefas.controller");
const router = express.Router();

//As rotas de aplicação vão aqui

//Rotas raiz
router.get("/", tarefasController.mostrarTarefas);
//O método 'GET'(pode ser trocado por Post, Put, Patch ou Delete para mudar a função do código),
//do método HTTP, vem após a variável 'APP'.

module.exports = router; //Necessário para o uso das rotas fora deste módulo.