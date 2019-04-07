const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    info: () => `This is the API of kirtland airshows logistics`,
    airshows: (root, args, context, info) => {
      return context.prisma.airshows()
    },
    parking_lots: (root, args, context, info) => {
      return context.prisma.parking_lots()
    },
    zones: (root, args, context, info) => {
      return context.prisma.zones()
    },
    tracking: (root, args, context, info) => {
      return context.prisma.tracking()
    },
  },
  
  Mutation: {
    createAirshow: (root, args, context) => {
      return context.prisma.createAirshow({
        name: args.name,
        date: args.date,
        createdBy: args.createBy,
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))