const logger = require('./logger');

function errorHandling(fn) {
  return async function (...args) {
    try {
      return await fn(...args);
    } catch (error) {
      logger.error(`Error in service function: ${error.message}`);
      throw error; // Re-throw the error for further handling if necessary
    }
  };
}

module.exports = errorHandling;
