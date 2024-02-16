const db = require('../config/db');
const errorHandler = require('../config/errorHandler');

/**
 * Retrieves all authors from the database.
 *
 * @returns {Promise<Array>} An array of author objects.
 */
async function getAllAuthors() {
  const res = await db.query('SELECT * FROM Authors');
  return res.rows;
}

/**
 * Adds a new author to the database.
 *
 * @param {string} authorName - The name of the author.
 * @param {string} authorBio - The bio of the author.
 * @returns {Object} - The newly added author object.
 */
async function addAuthor(authorName, authorBio) {
  const res = await db.query(
    'INSERT INTO Authors (name, bio) VALUES ($1, $2 ) RETURNING *',
    [authorName, authorBio]
  );
  return res.rows[0];
}

/**
 * Retrieves an author by its ID.
 *
 * @param {number} authorId - The ID of the author to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the author object.
 */
async function getAuthorById(authorId) {
  const res = await db.query('SELECT * FROM Authors WHERE authorid = $1', [
    authorId,
  ]);
  return res.rows[0];
}

/**
 * Deletes an author from the database.
 *
 * @param {number} authorId - The ID of the author to delete.
 * @returns {Promise<Object>} - The deleted author object.
 */
async function deleteAuthor(authorId) {
  const res = await db.query('DELETE FROM Authors WHERE AuthorID = $1', [
    authorId,
  ]);
  return res.rows[0];
}

module.exports = {
  getAllAuthors: errorHandler(getAllAuthors),
  addAuthor: errorHandler(addAuthor),
  getAuthorById: errorHandler(getAuthorById),
  deleteAuthor: errorHandler(deleteAuthor),
};
