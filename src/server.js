// Import Fastify
const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

// Register routes
fastify.register(require('./routes/route'));
fastify.register(require('./routes/book'));
fastify.register(require('./routes/category'));
fastify.register(require('./routes/author'));
fastify.register(require('./routes/user'));
fastify.register(require('./routes/borrowRecord'));
fastify.register(cors);

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
