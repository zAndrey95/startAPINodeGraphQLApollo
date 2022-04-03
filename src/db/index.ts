// @ts-nocheck
import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';

import Test from './models/Test';

const basename = path.basename(__filename);
const models: any = [
    Test,
]

// const models: any = [];

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    port: 5432,
    dialect: 'postgres',
    define: {
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

// fs
//   .readdirSync("./src/db/models")
//   .filter(file => (
//       file.indexOf('.') !== 0) 
//       && (file !== basename) 
//       && (file.slice(-3) === '.ts')
//       )
//   .map((file, i) => {
//       let obj = require('./models/' + file)
//       models[i] = obj.default
//     })

let db: any = {};

// Initialize models
models.forEach((model: any) => {
    const seqModel = model(sequelize)
    db[seqModel.name] = seqModel
});

// Apply associations
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
});

sequelize.sync({alter: true});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
