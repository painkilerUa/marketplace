import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

import config from './config'
import api from './api'

const app = express()
const server = http.createServer(app)
const { port } = config

mongoose.Promise = Promise

mongoose
  .connect(config.mongo.connectionStr)
  .then(() => console.log('connected to DB'))
  .catch(err => console.error('mongo error: ', err))

if (!/test/.test(process.env.NODE_ENV)) {
  app.use(morgan('dev'))
}

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api', api)

  // error handling
  .use((error, req, res, next) => {
    let err = {
      message: error.toString()
    }

    if (error.name === 'ValidationError') {
      err = {
        message: error.name,
        errors: error.errors
      }
      console.log(err)
    } else {
      console.error('Error: ', error)
    }

    res.status(500).json(err)
  })

export default server.listen(config.port, () => console.log('server started on port', port))