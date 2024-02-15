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

  // Other routes...
}

module.exports = bookRoutes;
