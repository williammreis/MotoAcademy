const aluno = "Linton";
if (aluno == "Euclides") {
  console.log("Linton");
} else {
  console.log("Linton");
}

const numero = 22;
if (numero === "22") {
  console.log("Igual a 22");
} else {
  console.log("nao é igual");
}

numero2 = 40;
if (30 > numero2) {
  console.log("e maior");
} else if (30 != numero2) {
  console.log("30 e diferente");
}

const numero3 = 5;
if (numero3 > 2 && numero3 < 6) {
  console.log("esta no intervalo");
}

if (numero3 > 2 || numero3 > 6) {
  console.log("nao esta no intervalo");
}

const array = ["string", 1234, true];
console.log(array[0]);

const numeros = [1, 2, 3, 4];
numeros.push(5);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.map((item) => {
  console.log(item);
});

const testeNumeros = numeros.filter((item) => item != 2);
console.log(testeNumeros);

const pessoa = {
  nome: "João",
  idade: 25,
  profissão: "Arquiteto",
  saudacao: function () {
    console.log("oi mundo");
  },
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["nome"]);

pessoa.nome = "Adriana";
console.log(pessoa);

delete pessoa.profissão;
console.log(pessoa);

pessoa.saudacao();

for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i == 2) {
    continue;
  }
  console.log(i);
}

//let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

const pessoas = [
  {
    nome: "Euclides",
    idade: 22,
    profissão: "Analista de Sistemas",
  },
  {
    nome: "Linton",
    idade: 35,
    profissão: "Analista de Sistemas",
  },
  {
    nome: "Adriana",
    idade: 20,
    profissão: "Analista de Sistemas",
  },
  {
    nome: "Francisco",
    idade: 28,
    profissão: "Analista de Sistemas",
  },
];

for (let contador = 0; contador < pessoas.length; contador++) {
  if (pessoas[contador].nome != "Euclides") {
    console.log(pessoas[contador]);
  }
}

pessoas.map((pessoa) => {
  if (pessoa.idade > 19) {
    console.log(pessoa);
  }
});

var slice1 = ["a", "b", "c", "d"];
console.log(slice1.slice(0, 5));

var arr = ["aula1", "aula2", "aula3"];
arr.push("aula4");
console.log(arr);

var arr = ["a", "b", "c", "d"];
console.log(arr.pop());
console.log(arr);

var arr = ["a", "b", "c", "d"];
console.log(arr.shift());
console.log(arr);

var arr = ["a", "b", "c", "d"];
arr.sort((arr) => {
  arr < "o";
});
console.log(arr);

var arr = ["a", "b", "c", "d"];
arr.fill("a", 2);
console.log(arr);

const array1 = [1, 2, 3, 4];
const found = array1.find((Element) => Element > 3);
console.log(found);

var arr = ["a", "b", "c", "d"];
arr.fill("a", 2);
console.log(arr);

var arr = ["a", "b", "c", "d"];
arr.fill("a", 2);
console.log(arr);
