const express = require("express");

const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "William" },
  { id: 2, name: "Androeza" },
];

app.get("/usuarios.com.br", (req, res) => {
  res.json(users);
});

app.post("/usuarios.com.br", (req, res) => {
  const name = req.body.name;
  const id = users.length + 1;
  const newUser = { id, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/usuarios.com.br/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex != -1) {
    users[userIndex].name = name;
    res.json(users[userIndex]);
  } else {
    res.status(400).json({ message: "Usuário não encontrado" });
  }
});

app.delete("/usuarios.com.br/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.sendStatus(204);
});

app.get("/", (req, res) => {
  res.send({ message: "Hello Word!" });
});

app.listen(3000);
