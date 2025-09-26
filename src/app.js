const prompt = require("prompt-sync")();

const biblioteca = require('./biblioteca.js');

biblioteca.adicionarLivro("360", "Alguem", 2025, "Ficcao", "Indisponivel");
biblioteca.adicionarLivro("teste", "Alguem", 2025, "Ficcao", "Indisponivel");


let laco = true;

    while(laco){
        let escolha = parseFloat(prompt(`
            =========================================
                  BIBLIOTECA - MENU PRINCIPAL
            =========================================
            --- Funções Básicas ---
            1. Listar Todos os Livros
            2. Buscar Livro por Título
            3. Editar Informações de um Livro
            4. Alterar Disponibilidade (Emprestado/Disponível)
            5. Remover Livro do Catálogo
            
            --- Funções de Consulta ---
            6. Listar Apenas Livros Disponíveis
            7. Buscar Livros por Autor
            8. Filtrar Livros por Gênero
            9. Ordenar Livros por Ano de Publicação
            
            --- Gestão de Empréstimos ---
            10. Registrar Empréstimo de Livro
            11. Gerar Relatório de Empréstimos
            
            --- Outras Opções ---
            0. Sair do Sistema
            -----------------------------------------
            `));

        switch(escolha){
            case 1:
                biblioteca.listarLivro();
                break;
            case 2:
                let buscarTitulo = prompt("\nInsira o titulo do livro: ");
                biblioteca.buscarLivro(buscarTitulo);
                break;
            
            case 3:
                let buscarID = prompt("Insira o ID: ");
                let novoTitulo = prompt("Insira o titulo: ");
                let novoAutor = prompt("Insira o autor: ");
                let novoAnoPublicacao = prompt("Insira o ano publicacao: ");
                let novoGenero = prompt("Insira o genero: ");
                let novoDisponibilidade = prompt("Insira o disponibilidade: ");
    
                biblioteca.editarLivro(buscarID, novoTitulo, novoAutor, novoAnoPublicacao, novoGenero, novoDisponibilidade);
                break;
            
            case 0:
                return laco = false;
        }
    }











