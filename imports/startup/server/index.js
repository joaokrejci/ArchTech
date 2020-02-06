import { ApolloServer } from 'apollo-server'
import typeDefs from '../../api/schema.graphql'
import resolvers from '../../api/resolvers'

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});