const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql')
const { projects, clients } = require('../sampleData')

const ClientType = new GraphQLObjectType({
    name: 'Clients',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return clients
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return clients.find(client => client.id === args.is)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})