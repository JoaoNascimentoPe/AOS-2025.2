import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo ao express de João!");
});

app.listen(3000, () => {
  console.log("Servidor aberto na porta 3000!");
});
