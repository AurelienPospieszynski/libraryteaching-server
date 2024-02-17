const db = require('../config/db');
const errorHandler = require('../config/errorHandler');

/**
 * Inserts a new borrow record into the database.
 *
 * @param {number} userId - The ID of the user borrowing the book.
 * @param {number} bookId - The ID of the book being borrowed.
 * @param {Date} borrowDate - The date when the book is borrowed.
 * @returns {Object} - The inserted borrow record.
 */
async function borrowBook(userId, bookId, borrowDate) {
  const res = await db.query(
    'INSERT INTO BorrowRecords (UserID, BookID, BorrowDate) VALUES ($1, $2, $3) RETURNING *',
    [userId, bookId, borrowDate]
  );
  return res.rows[0];
}

/**
 * Updates the return date of a borrow record in the database.
 *
 * @param {number} recordId - The ID of the borrow record.
 * @param {Date} returnDate - The return date of the book.
 * @returns {Object} - The updated borrow record.
 */
async function returnBook(recordId, returnDate) {
  const res = await db.query(
    'UPDATE BorrowRecords SET ReturnDate = $2 WHERE recordid = $1 RETURNING *',
    [recordId, returnDate]
  );
  return res.rows[0];
}

/**
 * Retrieves borrow records for a given user.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of borrow records.
 */
async function getBorrowRecordsByUser(userId) {
  const res = await db.query('SELECT * FROM BorrowRecords WHERE userid = $1', [
    userId,
  ]);
  return res.rows;
}

/**
 * Retrieves borrow records for a given book.
 *
 * @param {number} bookId - The ID of the book.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of borrow records.
 */
async function getBorrowRecordsByBook(bookId) {
  const res = await db.query('SELECT * FROM BorrowRecords WHERE bookid = $1', [
    bookId,
  ]);
  return res.rows;
}

/**
 * Retrieves a list of overdue books based on the current date.
 *
 * @param {Date} currentDate - The current date.
 * @returns {Promise<Array>} - A promise that resolves to an array of overdue books.
 */
async function getOverdueBooks(currentDate) {
  const res = await db.query(
    'SELECT * FROM BorrowRecords WHERE returndate IS NULL AND borrowdate < $1',
    [currentDate]
  );
  return res.rows;
}

/**
 * Retrieves a list of currently borrowed books.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of borrowed book records.
 */
async function getCurrentlyBorrowedBooks() {
  const res = await db.query(
    'SELECT * FROM BorrowRecords WHERE returndate IS NULL'
  );
  return res.rows;
}

module.exports = {
  borrowBook: errorHandler(borrowBook),
  returnBook: errorHandler(returnBook),
  getBorrowRecordsByUser: errorHandler(getBorrowRecordsByUser),
  getBorrowRecordsByBook: errorHandler(getBorrowRecordsByBook),
  getOverdueBooks: errorHandler(getOverdueBooks),
  getCurrentlyBorrowedBooks: errorHandler(getCurrentlyBorrowedBooks),
};
