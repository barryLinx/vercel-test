// Import the framework and instantiate it
// import Fastify from 'fastify'
// const fastify = Fastify({
//   logger: true
// })

// Declare a route
import cors from "@fastify/cors";
async function routes (fastify, options) {
  await app.register(cors, {
  // put your options here
  //origin:[cors_Orgin]
  // origin:'http://localhost:8050/'
  origin: "http://127.0.0.1:5500",
});
  fastify.get('/api', async (request, reply) => {
    return { hello: 'world' }
  });
  fastify.get('/api/test', async (request, reply) => {
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