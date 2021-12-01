import fs from 'fs';
import path from 'path';

const basename = path.basename(__filename);
const functions: any = []

fs
  .readdirSync("./src/schema/gql")
  .filter(file => (
      file.indexOf('.') !== 0) 
      && (file !== basename) 
      && (file.slice(-4) === '.gql')
      )
  .map((file, i) => {
      let obj = require(path.join(__dirname, file))
      functions[i] = obj
    })
export const typeDefs = functions;
