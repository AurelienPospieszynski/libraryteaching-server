const db = require('../config/db');
const errorHandler = require('../config/errorHandler');

/**
 * Retrieves all categories from the database.
 *
 * @returns {Promise<Array>} An array of category objects.
 */
async function getAllCategories() {
  const res = await db.query('SELECT * FROM Categories');
  return res.rows;
}

/**
 * Adds a new category to the database.
 *
 * @param {string} categoryName - The name of the category.
 * @param {string} categoryDescription - The description of the category.
 * @returns {Object} - The newly added category object.
 */
async function addCategory(categoryName, categoryDescription) {
  const res = await db.query(
    'INSERT INTO Categories (name, description) VALUES ($1, $2) RETURNING *',
    [categoryName, categoryDescription]
  );
  return res.rows[0];
}

/**
 * Retrieves a category by its ID.
 *
 * @param {number} categoryId - The ID of the category to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the category object.
 */
async function getCategoryById(categoryId) {
  const res = await db.query('SELECT * FROM Categories WHERE categoryid = $1', [
    categoryId,
  ]);
  return res.rows[0];
}

/**
 * Updates a category in the database.
 *
 * @param {number} categoryId - The ID of the category to update.
 * @param {string} categoryName - The new name of the category.
 * @param {string} categoryDescription - The new description of the category.
 * @returns {Promise<Object>} - The updated category object.
 */
async function updateCategory(categoryId, categoryName, categoryDescription) {
  const res = await db.query(
    'UPDATE Categories SET name = $2, description = $3 WHERE categoryid = $1 RETURNING *',
    [categoryId, categoryName, categoryDescription]
  );
  return res.rows[0];
}

/**
 * Deletes a category from the database.
 *
 * @param {number} categoryId - The ID of the category to be deleted.
 * @returns {Promise<boolean>} - A promise that resolves to true if a category was deleted, otherwise false.
 */
async function deleteCategory(categoryId) {
  const res = await db.query('DELETE FROM Categories WHERE categoryid = $1', [
    categoryId,
  ]);
  return res.rowCount > 0; // Returns true if a category was deleted
}

module.exports = {
  getAllCategories: errorHandler(getAllCategories),
  addCategory: errorHandler(addCategory),
  getCategoryById: errorHandler(getCategoryById),
  updateCategory: errorHandler(updateCategory),
  deleteCategory: errorHandler(deleteCategory),
};
