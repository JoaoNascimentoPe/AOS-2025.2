import { Tarefa } from "../models/Tarefa";

let tarefas = [];

export const tarefaController = {
  getTarefas(req, res) {
    res.status(200).json(tarefas);
  },

  criarTarefa(req, res) {
    const { descricao, concluida } = req.body;

    if (!descricao) {
      return res
        .status(400)
        .json({ message: "A descrição da tarefa é obrigatória." });
    }

    const novaTarefa = new Tarefa({ descricao, concluida });
    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
  },

  buscarTarefaPorId(req, res) {
    const { objectId } = req.params;
    const tarefa = tarefas.find((t) => t.objectId === objectId);

    if (!tarefa) {
      return res.status(404).json({ message: "Tarefa não encontrada." });
    }

    res.status(200).json(tarefa);
  },

  atualizarTarefa(req, res) {
    const { objectId } = req.params;
    const { descricao, concluida } = req.body;

    const tarefaIndex = tarefas.findIndex((t) => t.objectId === objectId);

    // Validação: Verifica se a tarefa existe.
    if (tarefaIndex === -1) {
      return res.status(404).json({ message: "Tarefa não encontrada." });
    }

    // Atualiza os campos se eles forem fornecidos no corpo da requisição.
    if (descricao) {
      tarefas[tarefaIndex].descricao = descricao;
    }
    if (typeof concluida === "boolean") {
      tarefas[tarefaIndex].concluida = concluida;
    }

    tarefas[tarefaIndex].updatedAt = new Date().toISOString();

    res.status(200).json(tarefas[tarefaIndex]);
  },

  deletarTarefa(req, res) {
    const { objectId } = req.params;
    const tarefaIndex = tarefas.findIndex((t) => t.objectId === objectId);

    if (tarefaIndex === -1) {
      return res.status(404).json({ message: "Tarefa não encontrada." });
    }

    // Remove a tarefa do array.
    tarefas.splice(tarefaIndex, 1);

    // Retorna uma resposta de sucesso sem conteúdo.
    res.status(204).send();
  },
};
