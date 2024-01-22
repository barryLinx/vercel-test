// Import the framework and instantiate it
// import Fastify from 'fastify'
// const fastify = Fastify({
//   logger: true
// })
"use strict";
// Declare a route
import cors from "@fastify/cors";
import * as dotenv from "dotenv";
dotenv.config();

// Require the framework
import Fastify from "fastify";
//import cors from "@fastify/cors";

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});
await app.register(cors, {
  // put your options here
  //origin:[cors_Orgin]
  // origin:'http://localhost:8050/'
  origin: ["http://127.0.0.1:5500", "http://localhost:8050/"],
  methods: ["GET"],
});

app.get("/api", async (request, reply) => {
  return { hello: "world" };
});
app.get("/api/test", async (request, reply) => {
  return { vercel: "Vercel test" };
});

// async function routes (fastify, options) {
//   await fastify.register(cors, {
//   // put your options here
//   //origin:[cors_Orgin]
//   // origin:'http://localhost:8050/'
//   origin: ['http://127.0.0.1:5500','http://localhost:8050/'],
//   methods: ["GET"],
// });
//   fastify.get('/api', async (request, reply) => {
//     return { hello: 'world' }
//   });
//   fastify.get('/api/test', async (request, reply) => {
//     return { vercel: 'Vercel test' }
//   });

// }

// export default routes;

// Run the server!
try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
