import fs from 'fs';
import path from 'path';

import test from './test.gql';
import schema from './schema.gql';

const basename = path.basename(__filename);
const functions: any = [
  test,
  schema
]

// fs
//   .readdirSync("./src/schema/gql")
//   .filter(file => (
//       file.indexOf('.') !== 0) 
//       && (file !== basename) 
//       && (file.slice(-4) === '.gql')
//       )
//   .map((file, i) => {
//       let obj = require('' + file)
//       functions[i] = obj
//     })

export const typeDefs = functions;
