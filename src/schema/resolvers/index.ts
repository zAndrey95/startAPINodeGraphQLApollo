import fs from 'fs';
import path from 'path';

import test from './test';

const basename = path.basename(__filename);
const functions: any = [
  test,
]

// fs
//   .readdirSync("./src/schema/resolvers")
//   .filter(file => (
//       file.indexOf('.') !== 0) 
//       && (file !== basename) 
//       && (file.slice(-3) === '.ts')
//       )
//   .map((file, i) => {
//       let obj = require('' + file)
//       functions[i] = obj.default
//     })

export const resolvers = functions;
