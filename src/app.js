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

import allowCors from '../src/cors.js'

async function routes (fastify, options) {
//   await fastify.register(cors, {
//   // put your options here
//   //origin:[cors_Orgin]
//   // origin:'http://localhost:8050/'
//   origin: ['http://127.0.0.1:5500','http://localhost:8050/'],
//   methods: ["GET"],
// });
  fastify.get('/api',allowCors, async (request, reply) => {
    return { hello: 'world' }
  });
  fastify.get('/api/test',allowCors, async (request, reply) => {
    return { vercel: 'Vercel test' }
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
