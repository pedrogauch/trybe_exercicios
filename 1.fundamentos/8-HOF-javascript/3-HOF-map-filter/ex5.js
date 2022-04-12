const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  //   5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
  // Código detalhado:

  // /\/\/\/\/\ Código explicado e comentado passo a passo. /\/\/\/\/\
    // Passo 1: Filtrar elementos do objeto pela condição imposta: gênero deve ser ficção científica ou fantasia.
    // Resolução: função nativa filter() seleciona os book (elementos) de books (objeto) que includes (https://www.w3schools.com/jsref/jsref_includes_array.asp) a palavra 'Ficção' ou 'Fantasia' no genre do book analisado.
    // Comentário sobre filter: função nativa que realiza uma iteração em todos os elementos do object e executa a função implementada.

    // Passo 2: Selecionar apenas o nome do autor dos livros filtrados no Passo 1.
    // Resolução: função nativa map() retorna um array contendo o resultado da função => definida; aqui o array de retorno vai ser o nome dos autores.
    // Comentário sobre map: Calls a defined callback function on each element of an array, and returns an array that contains the results.

    // Passo 3: Ordenar o array criado no Passo 2 em ordem alfabética (default da função nativa sort).
  //   // Resolução: função nativa sort() aplicada na array criada no Passo 2.
    
  // function fantasyOrScienceFictionAuthors() {

  //   const selectedBooks = books.filter((book) => book.genre.includes('Ficção') || book.genre.includes('Fantasia'));

  //   const selectedBooksAuthors = selectedBooks.map((book) => book.author.name);   

  //   const selectedBooksAuthorsSorted = selectedBooksAuthors.sort();

  //   return selectedBooksAuthorsSorted;
  // }
  // console.log(fantasyOrScienceFictionAuthors());

  // // /\/\/\/\/\ Código refatorado: /\/\/\/\/\

  // function fantasyOrScienceFictionAuthors() {
  //   return books.filter((book) => book.genre.includes('Ficção') || book.genre.includes('Fantasia')).map((book) => book.author.name).sort();
  // }
  // console.log(fantasyOrScienceFictionAuthors());

  // /\/\/\/\/\ Na minha visão, este é o código mais didático: /\/\/\/\/\
  function fantasyOrScienceFictionAuthors() {
    const selectBooks = books.filter((book) => book.genre.includes('Ficção') || book.genre.includes('Fantasia'));
    const selectBooksAuthors = selectBooks.map((book) => book.author.name);
    const sortSelection = selectBooksAuthors.sort();
    return sortSelection;
  }
  console.log(fantasyOrScienceFictionAuthors());
