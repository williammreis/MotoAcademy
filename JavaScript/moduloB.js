//const { nome, idade, soma, PI } = require("./moduloA");
//console.log(nome);
// console.log(idade);

//console.log(soma(2, 2));

//const { nome, idade, soma, PI } = require("./moduloA");
//console.log(areaCirculo(2));
//console.log(PI);

//const objeto = {
//  name: "William",
//};

//let { name } = objeto;

//name = "Filipe";
//console.log(objeto);
//console, log("Meu Nome é  : ");

//const moduloA = require("./moduloA");
//console.log(moduloA);
//console.log(moduloA.nome);const { nome, idade, soma, PI } = require("./moduloA");
//console.log(moduloA.idade);
//console.log(moduloA.cidade);

const moduloA = require("./moduloA.js");

moduloA.map((item) => {
  console.log(item.time);
});
