const authorService = require('../services/authorService');

/**
 * Handles the author routes.
 *
 * @param {object} fastify - The Fastify instance.
 * @param {object} options - The options object.
 * @returns {void}
 */
async function authorRoutes(fastify, options) {
  fastify.get('/authors', async (request, reply) => {
    const authors = await authorService.getAllAuthors();
    return authors;
  });

  fastify.get('/author/:id', async (request, reply) => {
    const { id } = request.params;
    const author = await authorService.getAuthorById(id);
    return author;
  });

  fastify.post('/author', async (request, reply) => {
    const author = request.body;
    const newAuthor = await authorService.addAuthor(author);
    return newAuthor;
  });

  fastify.delete('/author/:id', async (request, reply) => {
    const { id } = request.params;
    const deletedAuthor = await authorService.deleteAuthor(id);
    return deletedAuthor;
  });

  // Other routes...
}

module.exports = authorRoutes;
