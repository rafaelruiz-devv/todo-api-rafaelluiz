// ROTA: recebe a requisicao HTTP e chama o controller.

const express = require("express");
const tarefaController = require("../controllers/tarefaController");
const validarId = require("../middlewares/validarId");

const router = express.Router();

router.get("/:id", validarId, tarefaController.buscarPorId);o:
router.get("/", tarefaController.listar);

module.exports = router;
