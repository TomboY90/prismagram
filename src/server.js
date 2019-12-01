require("dotenv").config()
import { GraphQLServer } from "graphql-yoga"
import schema from "./schema"
const logger = require("morgan")
const PORT = process.env.PORT || 4000

const server = new GraphQLServer({ schema })

server.express.use(logger("dev"))

server.start({ PORT }, () => console.log(`Server Running on Port ${PORT}`))
