const categoryService = require('../services/categoryService');

/**
 * Handles the category routes.
 *
 * @param {object} fastify - The Fastify instance.
 * @param {object} options - The options object.
 * @returns {void}
 */
async function categoryRoutes(fastify, options) {
  fastify.get('/categories', async (request, reply) => {
    const categories = await categoryService.getAllCategories();
    return categories;
  });

  fastify.get('/category/:id', async (request, reply) => {
    const { id } = request.params;
    const category = await categoryService.getCategoryById(id);
    return category;
  });

  fastify.post('/category', async (request, reply) => {
    const category = request.body;
    const newCategory = await categoryService.addCategory(category);
    return newCategory;
  });

  fastify.put('/category/:id', async (request, reply) => {
    const { id } = request.params;
    const category = request.body;
    const updatedCategory = await categoryService.updateCategory(id, category);
    return updatedCategory;
  });

  fastify.delete('/category/:id', async (request, reply) => {
    const { id } = request.params;
    const deletedCategory = await categoryService.deleteCategory(id);
    return deletedCategory;
  });

  // Other routes...
}

module.exports = categoryRoutes;
