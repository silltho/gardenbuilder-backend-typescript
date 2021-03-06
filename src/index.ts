import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql/dist/utils/buildSchema'
import { HelloWorld } from './resolvers/HelloWorld'
import { UserResolver } from './resolvers/User'

async function main() {
  const connection = await createConnection()
  const schema = await buildSchema({
    resolvers: [HelloWorld, UserResolver],
  })
  const server = new ApolloServer({ schema })
  await server.listen(8000)
  console.log('Server has started!')
}
main()
