const db = require('../config/db');
const errorHandler = require('../config/errorHandler');

/**
 * Retrieves all users from the database.
 *
 * @returns {Promise<Array>} An array of user objects.
 */
async function getAllUsers() {
  const res = await db.query('SELECT * FROM Users');
  return res.rows;
}

/**
 * Adds a new user to the database.
 *
 * @param {string} name - The name of the user.
 * @param {string} email - The email of the user.
 * @param {Date} membershipDate - The membership date of the user.
 * @returns {Object} - The newly added user object.
 */
async function addUser(name, email, membershipDate) {
  const res = await db.query(
    'INSERT INTO Users (name, email, membershipdate) VALUES ($1, $2, $3) RETURNING *',
    [name, email, membershipDate]
  );
  return res.rows[0];
}

/**
 * Retrieves a user by its ID.
 *
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the user object.
 */
async function getUserById(userId) {
  const res = await db.query('SELECT * FROM Users WHERE userid = $1', [userId]);
  return res.rows[0];
}

/**
 * Deletes a user from the database.
 *
 * @param {number} userId - The ID of the user to delete.
 * @returns {Promise<Object>} - The deleted user object.
 */
async function deleteUser(userId) {
  const res = await db.query('DELETE FROM Users WHERE userid = $1', [userId]);
  return res.rows[0];
}

module.exports = {
  getAllUsers: errorHandler(getAllUsers),
  addUser: errorHandler(addUser),
  getUserById: errorHandler(getUserById),
  deleteUser: errorHandler(deleteUser),
};
