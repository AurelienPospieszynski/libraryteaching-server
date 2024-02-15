// services/bookService.js
const pool = require('../config/db');

/**
 * Retrieves all books from the database.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of book objects.
 */
async function getAllBooks() {
  const res = await pool.query('SELECT * FROM Books');
  return res.rows;
}

module.exports = {
  getAllBooks,
  // Other book-related functions...
};
