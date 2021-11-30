import fs from 'fs';
import path from 'path';

const basename = path.basename(__filename);
const functions: any = []

fs
  .readdirSync("./src/schema/resolvers")
  .filter(file => (
      file.indexOf('.') !== 0) 
      && (file !== basename) 
      && (file.slice(-3) === '.ts')
      )
  .map((file, i) => {
      let obj = require(path.join(__dirname, file))
      functions[i] = obj.default
    })

export const resolvers = functions;
