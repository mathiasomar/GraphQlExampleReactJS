const express = require('express')
const { graphqlHTTP } = require('express-graphql')
require('dotenv').config()
const port = 5005
const schema = require('./schema/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`server running on port ${port}`))