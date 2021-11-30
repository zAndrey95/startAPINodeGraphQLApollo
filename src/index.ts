import http from 'http';
import express, { Application } from 'express';
import { ApolloServer, gql, Config } from 'apollo-server-express';
import cors from 'cors';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

import schema from './schema';
import models from './db';

const app: Application = express();

app.use((req, res, next) => { next(); }, cors({ maxAge: 84600 }));

const config: Config = {
  schema: schema,
  context: ({ req }) => ({ req, models }),
  introspection: true,
  playground: true,
};

const server: ApolloServer = new ApolloServer(config);

server.applyMiddleware({
  app,
  path: '/graphql',
});

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});