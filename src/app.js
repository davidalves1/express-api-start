const express = require('express')
const helmet = require('helmet')

class AppController {
  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(helmet())
  }

  routes() {
    this.express.use(require('./routes'))
  }
}

module.exports = new AppController().express
