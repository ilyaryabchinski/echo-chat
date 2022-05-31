const fastify = require('fastify')({ logger: true });
const messageController = require("./messages/controller");
const messageSchema = require("./messages/schema");

fastify.register(require('@fastify/cors'), {});

fastify.post('/message', { schema : messageSchema }, messageController);

const start = async () => {
  try {
    await fastify.listen(8080);
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
};

start();