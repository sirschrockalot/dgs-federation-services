const { ApolloServer, gql } = require('apollo-server');
const {ApolloGateway, IntrospectAndCompose} = require('@apollo/gateway')

const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
            { name: 'shows', url: 'http://localhost:8080/graphql' },
            { name: 'reviews', url: 'http://localhost:8081/graphql' },
        ]
    })
});

const server = new ApolloServer({ gateway, subscriptions:false, tracing:true });
server.listen();