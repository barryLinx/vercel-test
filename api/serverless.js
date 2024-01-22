"use strict";

// Read the .env file.
import * as dotenv from "dotenv";
dotenv.config();

// Require the framework
import Fastify from "fastify";
//import cors from "@fastify/cors";


// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});



// await app.register(cors, {
//   // put your options here
//   //origin:[cors_Orgin]
//   // origin:'http://localhost:8050/'
//   origin: ["http://127.0.0.1:5500/","http://localhost:8050/"]
// });

// /* rate-limit 流量限制*/
// await app.register(import("@fastify/rate-limit"), {
//   //global : false,          // default true
//   max: 3, // default 1000
//   timeWindow: "1 minute", // default 1000 * 60
//   allowList:['http://127.0.0.1:5500'],
//   errorResponseBuilder: function (request, context) {
//     return {
//       code: 429,
//       error: "Too Many Requests",
//       message: `I only allow ${context.max} requests per ${context.after} to this Website. Try again soon.`,
//       date: Date.now(),
//       expiresIn: context.ttl, // milliseconds
//     };
//   },
// });

// app.setErrorHandler(function (error, request, reply) {
//   if (error.statusCode === 429) {
//     reply.code(429);
//     error.message = "You hit the rate limit! Slow down please!";
//   }
//   reply.send(error);
// });

// Register your application as a normal plugin.
app.register(import("../src/app.js"));

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
