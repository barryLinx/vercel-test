// Import the framework and instantiate it
// import Fastify from 'fastify'
// const fastify = Fastify({
//   logger: true
// })
"use strict";
// Declare a route
// import cors from "@fastify/cors";


// fastify.get("/api", async (request, reply) => {
//   return { hello: "world" };
// });
// fastify.get("/api/test", async (request, reply) => {
//   return { vercel: "Vercel test" };
// });



async function routes (fastify, options) {

  fastify.get('/api', async (request, reply) => {
    reply.header("Access-Control-Allow-Origin",'*').
    reply.header('Content-Type', 'text/html');
    reply.header('Cache-Control', 's-max-age=1, stale-while-revalidate');
    reply.send({ hello: 'world' });
  });
  fastify.get('/api/test', async (request, reply) => {
    reply.send({ vercel: 'Vercel test' }); 
  });

}

export default routes;

// Run the server!
// try {
//   await app.listen({ port: 3000 });
// } catch (err) {
//   app.log.error(err);
//   process.exit(1);
// }
