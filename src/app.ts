import express from 'express';
import { expressMiddleware } from '@apollo/server/express4'; 
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import env from './config/env.js';
import connectDB from './config/db-connection.js';
import {startApollo} from './apollo.js';

// Create Express server
const app = express();
const apolloServer = await startApollo();

// Express configuration
app.set('port', env.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors);
app.use(helmet());
app.use(morgan('tiny'));
app.use('/graphql',expressMiddleware(apolloServer));

await connectDB();

export default app;
