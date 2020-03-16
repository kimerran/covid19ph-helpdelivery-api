const Sequelize = require('sequelize')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('config')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sequelite'
});

const Db = require('./db')
const dbModels = (new Db(sequelize)).initializeModels()

const Controllers = require('./ctrl')
const controllers = (new Controllers(dbModels)).initializeControllers()

const Router = require('./router')
const routers = (new Router(controllers)).initializeRouters()

const whitelist = ['http://localhost:3000', 'https://help.covid19ph.net']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies.


app.use('/help', routers['HelpRouter'].getRouter())

const port = config.port || 3000
app.listen(port, () => {
  console.log(`api started. listening at ${port}`)
})


process.on('unhandledRejection', (reason, p) => {
  console.error(reason)
  console.error(p)
})