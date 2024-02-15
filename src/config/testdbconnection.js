const db = require('./db');

/**
 * Tests the database connection by executing a query to retrieve all books from the public.books table.
 * If the query is successful, the books are logged to the console.
 *
 * @returns {Promise<void>} A promise that resolves when the test is completed.
 */
async function testDB() {
  try {
    const res = await db.query('SELECT * from public.books;');
    console.log('Database connected successfully. Current table: ', res.rows);
  } catch (err) {
    console.error('Database connection error', err.stack);
  }
}

testDB();
