/**
 * Defines the '/' route for server.
 *
 * @param {object} fastify - The Fastify instance.
 * @param {object} options - The options object.
 */
async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
}
module.exports = routes;
