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
    reply.code(200)
    headers({"Access-Control-Allow-Origin":"*"})
   .headers({"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"})
   .headers({"Content-Type":"application/json; charset=utf-8"})
   .send({ vercel: "Vercel test" })
  });
  fastify.get('/api/test', async (request, reply) => {
    reply.code(200)
    header("Access-Control-Allow-Origin", "*")
   .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
   .header("Content-Type", "application/json; charset=utf-8")
   .send({test:'good test'})
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
