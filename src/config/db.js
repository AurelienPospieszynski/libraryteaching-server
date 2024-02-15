// Centralized configuration management
const { Pool } = require('pg');
const errorHandler = require('./errorHandler');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'library',
  password: 'postgres',
  port: 5432,
});

/**
 * Executes a database query using the provided text and parameters.
 * Centralize the database query handling, to make the code cleaner and more manageable
 *
 * @param {string} text - The SQL query text.
 * @param {Array} params - The parameters to be used in the query (optional).
 * @returns {Promise} - A promise that resolves to the query result.
 * @throws {Error} - If the database query fails.
 */
const queryWrapper = async (text, params = []) => {
  try {
    return await pool.query(text, params);
  } catch (error) {
    errorHandler.error(`Database query failed: ${error.message}`);
    throw error;
  }
};

module.exports = {
  query: queryWrapper,
};
