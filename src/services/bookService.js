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
  const res = await db.query('SELECT * FROM Books WHERE bookid = $1', [id]);
  return res.rows[0];
}

/**
 * Adds a book to the database.
 *
 * @param {Object} book - The book object to be added.
 * @param {string} book.title - The title of the book.
 * @param {number} book.authorid - The ID of the author of the book.
 * @param {number} book.categoryid - The ID of the category of the book.
 * @param {string} book.isbn - The ISBN of the book.
 * @param {number} book.publicationyear - The publication year of the book.
 * @returns {Object} - The inserted book object.
 */
async function addBook(book) {
  const res = await db.query(
    'INSERT INTO Books (Title, authorid, categoryid, isbn, publicationyear) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [
      book.title,
      book.authorid,
      book.categoryid,
      book.isbn,
      book.publicationyear,
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

/**
 * Retrieves books by author ID.
 *
 * @param {number} authorID - The ID of the author.
 * @returns {Promise<Array>} - A promise that resolves to an array of books.
 */
async function getBooksByAuthor(authorID) {
  const res = await db.query('SELECT * FROM Books WHERE authorid = $1', [
    authorID,
  ]);
  return res.rows;
}

/**
 * Retrieves books by category ID.
 *
 * @param {number} categoryID - The ID of the category.
 * @returns {Promise<Array>} - A promise that resolves to an array of books.
 */
async function getBooksByCategory(categoryID) {
  const res = await db.query('SELECT * FROM Books WHERE categoryid = $1', [
    categoryID,
  ]);
  return res.rows;
}

/**
 * Retrieves books from the database based on the provided title.
 *
 * @param {string} title - The title of the books to retrieve.
 * @returns {Promise<Array>} - A promise that resolves to an array of book objects.
 */
async function getBooksByTitle(title) {
  const res = await db.query('SELECT * FROM Books WHERE title = $1', [title]);
  return res.rows;
}

module.exports = {
  getAllBooks: errorHandler(getAllBooks),
  getBookById: errorHandler(getBookById),
  addBook: errorHandler(addBook),
  deleteBook: errorHandler(deleteBook),
  getBooksByAuthor: errorHandler(getBooksByAuthor),
  getBooksByCategory: errorHandler(getBooksByCategory),
  getBooksByTitle: errorHandler(getBooksByTitle),
};
