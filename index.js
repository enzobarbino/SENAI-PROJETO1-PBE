// importações de bibliotecas e configurações básicas
const http = require("http");
const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const app = express();
require('dotenv').config();

//importando o "tarefas.routers.js"
const tarefasRoutes = require("./routes/tarefas.routes");

app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

const porta = Number(process.env.PORTA);

app.use("/tarefa", tarefasRoutes);

app.use("/", tarefasRoutes);

//O método 'Use' é considerado a rota padrão caso a rota desejada, exemplo "/Cadastro", não seja encontrada.
app.use((req, res) => {
  res.status(404).render("erro404", {title: "Erro404"});
});

// Coloca o servidor no ar
app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});
