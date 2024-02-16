const userServices = require('../services/userService');

/**
 * Handles the user routes.
 *
 * @param {object} fastify - The Fastify instance.
 * @param {object} options - The options object.
 * @returns {void}
 */
async function userRoutes(fastify, options) {
  fastify.get('/users', async (request, reply) => {
    const users = await userServices.getAllUsers();
    return users;
  });

  fastify.get('/user/:id', async (request, reply) => {
    const { id } = request.params;
    const user = await userServices.getUserById(id);
    return user;
  });

  fastify.post('/user', async (request, reply) => {
    const user = request.body;
    const newUser = await userServices.addUser(user);
    return newUser;
  });

  fastify.delete('/user/:id', async (request, reply) => {
    const { id } = request.params;
    const deletedUser = await userServices.deleteUser(id);
    return deletedUser;
  });

  // Other routes...
}

module.exports = userRoutes;
