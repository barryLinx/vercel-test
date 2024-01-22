// Import the framework and instantiate it
// import Fastify from 'fastify'
// const fastify = Fastify({
//   logger: true
// })


// export default async function routes(fastify,options){


// }
// Require the framework
import Fastify from "fastify";

// Instantiate Fastify with some config
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get('/test', async function handler (request, reply) {
  return { hello: 'world' }
})


// Run the server!
// try {
//   await fastify.listen({ port: 3000 })
// } catch (err) {
//   fastify.log.error(err)
//   process.exit(1)
// }