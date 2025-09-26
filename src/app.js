const prompt = require("prompt-sync")();

const biblioteca = require('./biblioteca.js');

const adicionar = biblioteca.adicionarLivro("360", "Alguem", 2025, "Ficcao", "Indisponivel");

const listar = biblioteca.listarLivro();

let buscarTitulo = prompt("Insira o titulo do livro: ");

console.log(biblioteca.buscarLivro(buscarTitulo));