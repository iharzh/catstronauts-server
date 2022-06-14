const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackApi = require('./datasources/track-api');

const server = new ApolloServer({typeDefs, resolvers, dataSources: () => ({
    trackApi: new TrackApi()
  })});

const run = async () => {
  await server.listen({port: process.env.PORT || 4000});
}

run();

