const prompt = require("prompt-sync")();

const catologo = [];
let i = 1;

function adicionarLivro(titulo, autor, ano_publicacao, genero, disponibilidade) {
  let novoLivro = {
    titulo: titulo,
    autor: autor,
    ano_publicacao: ano_publicacao,
    genero: genero,
    disponibilidade: "disponivel",
    id: id + i
  }

  catologo.push(novoLivro);

  console.log("Livro Cadastrado!")

  return novoLivro;
}

function listarLivro(){
  catologo.forEach(livro => {
    console.log(`ID: ${livro.id} Titulo: ${livro.titulo} - Autor: ${livro.autor} - Ano Publicacao: ${livro.ano_publicacao} - Genero: ${livro.genero} - Disponibilidade: ${livro.disponibilidade}`);
  })
}

function buscarLivro(titulo){
  const tituloPequeno = titulo.toLowerCase();
  let livroEncontrado = catologo.find(livro => {
    if(livro.titulo.toLowerCase() === tituloPequeno){
      return console.log(`ID: ${livro.id} Titulo: ${livro.titulo} - Autor: ${livro.autor} - Ano Publicacao: ${livro.ano_publicacao} - Genero: ${livro.genero} - Disponibilidade: ${livro.disponibilidade}`);
    }
  })

  return livroEncontrado
}

function editarLivro(){

}

function removerLivro(){

}

function disponibilidade(){

}

module.exports = {
  adicionarLivro,
  listarLivro,
  buscarLivro,
  editarLivro,
  removerLivro,
  disponibilidade
}


