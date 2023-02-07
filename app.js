const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/contato", (req, res) => {
  res.send("Fale Conosco");
});

app.get("/pedidos", (req, res) => {
  res.send("Carrinho Vazio!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
