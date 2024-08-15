const express = require("express");

const app = express();

app.use(express.json());

const ckeckLogin = (req, res, next) => {
  const logado = (req.headers.authorization = "Bearer tokenValido");
  console.log("OI MUNDO");

  if (logado) {
    next();
  } else {
    res.status(401).json({ message: "Por favor verifique suas credencias" });
  }
};

let users = [
  { id: 1, name: "William", email: "william@.com", senha: "12345" },
  { id: 2, name: "Androeza", email: "androeza@.com", senha: "12345" },
];

app.get("/usuarios.com.br", ckeckLogin, (req, res) => {
  console.log("Tchau mundo");

  res.status(201).json(users);
});

// app.get("/usuarios.com.br", ckeckLogin, (req, res) => {
//   res.json(users);
// });

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

app.post("/login", (req, res) => {
  const { name, email, senha } = req.body;
  const user = users.find((user) => user.email == email && user.senha == senha);
  if (user) {
    res.json({ message: "Login bem sucedido!", token: "tokenValido" });
  } else {
    res.json({ message: "Credencias Inválidas" });
  }
});

app.get("/", (req, res) => {
  res.send({ message: "Hello Word!" });
});

app.listen(3000);
