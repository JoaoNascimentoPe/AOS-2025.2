import "dotenv/config";
import express from "express";
import tarefasRoutes from "./routes/tarefasRoutes";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bem-vindo ao express de João!");
});

app.use("/tarefas", tarefasRoutes);

app.listen(PORT, () => {
  console.log("Servidor aberto na porta 3000!");
});

export default app;
