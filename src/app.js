const adicionarLivro = require('./adicionarLivro');
const { listarLivro } = require('./biblioteca.js');

const adicionar = adicionarLivro("360", "Alguem", 2025, "Ficcao", "Indisponivel");

const listar = listarLivro();