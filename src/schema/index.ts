import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema'

import { resolvers } from './resolvers';
import { typeDefs } from './gql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
