import "dotenv/config";
import express from "express";

const app = express();

const frases = [
  "Acredite no seu potencial. Você é mais forte do que pensa.",
  "O sucesso nasce do esforço e da perseverança.",
  "Cada dia é uma nova oportunidade para ser melhor.",
  "Seja a mudança que você deseja ver no mundo.",
  "O caminho para a felicidade é a gratidão.",
  "Não tenha medo de falhar. Tenha medo de não tentar.",
  "Pequenos passos podem levar a grandes conquistas.",
  "Sua atitude determina sua direção.",
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "Acredite que a vida vale a pena e sua crença ajudará a criar o fato.",
  "A persistência é o caminho do êxito.",
  "Grandes mentes têm objetivos; outras têm desejos.",
  "Sua única limitação é a que você impõe a si mesmo.",
  "Ouse sonhar. Ouse fazer.",
  "Não espere por uma oportunidade. Crie-a."
];

app.get("/random", (req, res) => {

  const data = {
    number: Math.floor(Math.random() * 99999) + 1
  }

  res.json(data);
});

app.get("/inspiration", (req, res) => {
 const number = Math.floor(Math.random() * 15) + 1

 const data = {
  quote: frases[number]
 }

 res.json(data);
})

app.listen(3000, () => {
  console.log("Servidor aberto na porta 3000!");
});
