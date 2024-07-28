import 'dotenv/config'; 
import { createServer } from 'graphql-yoga';
import resolvers from './resolvers';
import typeDefs from './schema';
import bot from './telegramBot'; 


const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});

// Start the GraphQL server
server.start();

// Initialize the Telegram bot
bot;
