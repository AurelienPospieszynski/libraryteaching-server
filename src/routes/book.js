// routes/books.js
const bookService = require('../services/bookService');

/**
 * Handles the book routes.
 *
 * @param {object} fastify - The Fastify instance.
 * @param {object} options - The options object.
 * @returns {void}
 */
async function bookRoutes(fastify, options) {
  fastify.get('/books', async (request, reply) => {
    const books = await bookService.getAllBooks();
    return books;
  });

  fastify.get('/book/:id', async (request, reply) => {
    const { id } = request.params;
    const book = await bookService.getBookById(id);
    return book;
  });

  fastify.get('/book/author/:authorID', async (request, reply) => {
    const { authorID } = request.params;
    const books = await bookService.getBooksByAuthor(authorID);
    return books;
  });

  fastify.get('/book/category/:categoryID', async (request, reply) => {
    const { categoryID } = request.params;
    const books = await bookService.getBooksByCategory(categoryID);
    return books;
  });

  fastify.get('/book/title/:title', async (request, reply) => {
    const { title } = request.params;
    const books = await bookService.getBooksByTitle(title);
    return books;
  });

  fastify.post('/book', async (request, reply) => {
    const book = request.body;
    const newBook = await bookService.addBook(book);
    return newBook;
  });

  fastify.delete('/book/:id', async (request, reply) => {
    const { id } = request.params;
    const deletedBook = await bookService.deleteBook(id);
    return deletedBook;
  });

  // Other routes...
}

module.exports = bookRoutes;
