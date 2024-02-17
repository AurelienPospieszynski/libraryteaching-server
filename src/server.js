// Import Fastify
const fastify = require('fastify')({ logger: true });

// Register routes
fastify.register(require('./routes/route'));
fastify.register(require('./routes/book'));
fastify.register(require('./routes/category'));
fastify.register(require('./routes/author'));
fastify.register(require('./routes/user'));
fastify.register(require('./routes/borrowRecord'));

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
