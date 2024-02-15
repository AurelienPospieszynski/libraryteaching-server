// services/bookService.js
const db = require('../config/db');
const errorHandler = require('../config/errorHandler');

/**
 * Retrieves all books from the database.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of book objects.
 */
async function getAllBooks() {
  const res = await db.query('SELECT * FROM Books');
  return res.rows;
}

/**
 * Retrieves a book from the database by its ID.
 *
 * @param {number} id - The ID of the book to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the book object.
 */
async function getBookById(id) {
  const res = await db.query('SELECT * FROM Books WHERE id = $1', [id]);
  return res.rows[0];
}

/**
 * Adds a book to the database.
 *
 * @param {Object} book - The book object to be added.
 * @param {string} book.title - The title of the book.
 * @param {number} book.authorID - The ID of the author of the book.
 * @param {number} book.categoryID - The ID of the category of the book.
 * @param {string} book.isbn - The ISBN of the book.
 * @param {number} book.publicationYear - The publication year of the book.
 * @returns {Object} - The inserted book object.
 */
async function addBook(book) {
  const res = await db.query(
    'INSERT INTO Books (Title, AuthorID, CategoryID, ISBN, PublicationYear) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [
      book.title,
      book.authorID,
      book.categoryID,
      book.isbn,
      book.publicationYear,
    ]
  );
  return res.rows[0];
}

/**
 * Deletes a book from the database.
 *
 * @param {number} id - The ID of the book to be deleted.
 * @returns {Object} - The deleted book object.
 */
async function deleteBook(id) {
  const res = await db.query('DELETE FROM Books WHERE id = $1', [id]);
  return res.rows[0];
}

module.exports = {
  getAllBooks: errorHandler(getAllBooks),
  getBookById: errorHandler(getBookById),
  addBook: errorHandler(addBook),
  deleteBook: errorHandler(deleteBook),
};
