const borrowRecordService = require('../services/borrowRecordService');

async function borrowRecordRoutes(fastify, options) {
  fastify.post('/borrows', async (request, reply) => {
    const { userId, bookId, borrowDate } = request.body;
    return await borrowRecordService.borrowBook(userId, bookId, borrowDate);
  });

  fastify.put('/return/:recordId', async (request, reply) => {
    const { recordId } = request.params;
    const { returnDate } = request.body;
    return await borrowRecordService.returnBook(recordId, returnDate);
  });

  fastify.get('/users/:userId/borrow', async (request, reply) => {
    const { userId } = request.params;
    return await borrowRecordService.getBorrowRecordsByUser(userId);
  });

  fastify.get('/books/:bookId/borrow', async (request, reply) => {
    const { bookId } = request.params;
    return await borrowRecordService.getBorrowRecordsByBook(bookId);
  });

  fastify.get('/borrowrecords/overdue', async (request, reply) => {
    const currentDate =
      request.query.currentDate || new Date().toISOString().split('T')[0]; // Use today's date as default
    const overdueBooks = await borrowRecordService.getOverdueBooks(currentDate);
    return overdueBooks;
  });

  fastify.get('/borrowrecords/currentlyborrowed', async (request, reply) => {
    const currentlyBorrowedBooks =
      await borrowRecordService.getCurrentlyBorrowedBooks();
    return currentlyBorrowedBooks;
  });

  // ...other routes for borrow records
}

module.exports = borrowRecordRoutes;
