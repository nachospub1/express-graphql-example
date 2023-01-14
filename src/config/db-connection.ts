import { Sequelize } from 'sequelize-typescript';
import models from '../db/models/index.js';
import dbConfig from './db-config.json' assert{ type: 'json' };
import env from './env.js';

const connectDB = async () => {
  try {
    const config = dbConfig[env.ENVIRONMENT];
    const connection: Sequelize = new Sequelize({ ...config, models });
    await connection.sync();
    console.log(`Connected to DB on ${env.ENVIRONMENT} mode`);
  } catch (error) {
    throw new Error(`Error connecting to DB: ${error}`);  
  }
};

export default connectDB;
