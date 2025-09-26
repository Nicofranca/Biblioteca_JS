const prompt = require("prompt-sync")();

const biblioteca = require('./biblioteca.js');

biblioteca.adicionarLivro("360", "Alguem", 2025, "Ficcao", "Indisponivel");
biblioteca.adicionarLivro("teste", "Alguem", 2025, "Ficcao", "Indisponivel");

biblioteca.listarLivro();

let buscarTitulo = prompt("\nInsira o titulo do livro: ");

console.log(biblioteca.buscarLivro(buscarTitulo));