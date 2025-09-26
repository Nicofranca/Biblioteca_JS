let catologo = [];

function adicionarLivro(titulo, autor, ano_publicacao, genero, disponibilidade) {
  let novoLivro = {
    titulo: titulo,
    autor: autor,
    ano_publicacao: ano_publicacao,
    genero: genero,
    disponibilidade: "disponivel"
  }

  catologo.push(novoLivro);

  console.log("Livro Cadastrado!")

  return novoLivro;
}

function listarLivro(){
  catologo.forEach(livro => {
    console.log(`Titulo: ${livro.titulo} - Autor: ${livro.autor} - Ano Publicacao: ${livro.ano_publicacao} - Genero: ${livro.genero} - Disponibilidade: ${livro.disponibilidade}`);
  })
}

function buscarLivro(){
  
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


