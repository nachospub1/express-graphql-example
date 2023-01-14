import { ApolloServer } from '@apollo/server';
import typeDefs from './schema/schema.js';
import resolvers from './resolvers/index.js';

const startApollo = async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });
    await server.start();
    console.log('🚀  Apollo Server started and attached to Express');
    return server;
  } catch (error) {
    throw new Error('Error starting Apollo Server: '+error);
  }
};

export { startApollo };

