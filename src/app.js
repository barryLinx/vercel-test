// Import the framework and instantiate it
// import Fastify from 'fastify'
// const fastify = Fastify({
//   logger: true
// })

// Declare a route
async function routes (fastify, options) {
  // fastify.get('/', async (request, reply) => {
  //   return { hello: 'world' }
  // });
  fastify.get('/test', async (request, reply) => {
    return { vercel: 'Vercel test' }
  });

}

export default routes;



// Run the server!
// try {
//   await fastify.listen({ port: 3000 })
// } catch (err) {
//   fastify.log.error(err)
//   process.exit(1)
// }