// Import the framework and instantiate it
// import Fastify from 'fastify'
// const fastify = Fastify({
//   logger: true
// })

// Declare a route
export default async function routes(fastify,options){
  fastify.get('/test', async function handler (request, reply) {
    return { hello: 'world' }
  })

}



// Run the server!
// try {
//   await fastify.listen({ port: 3000 })
// } catch (err) {
//   fastify.log.error(err)
//   process.exit(1)
// }