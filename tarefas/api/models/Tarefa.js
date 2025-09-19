import crypto from "crypto";

export class Tarefa {
  constructor({ descricao, concluida }) {
    this.objectId = crypto.randomUUID();
    this.descricao = descricao;
    this.concluida = typeof concluida === "boolean" ? concluida : false;
    this.createdAt = new Date().toISOString();
    this.updatedAt = this.createdAt;
  }
}
