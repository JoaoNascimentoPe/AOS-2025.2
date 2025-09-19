import express from "express";
import { tarefaController } from "../controllers/tarefasController";

const router = express.Router();

router.get("/", tarefaController.getTarefas);
router.post("/", tarefaController.criarTarefa);
router.get("/:objectId", tarefaController.buscarTarefaPorId);
router.put("/:objectId", tarefaController.atualizarTarefa);
router.delete("/:objectId", tarefaController.deletarTarefa);

export default router;
