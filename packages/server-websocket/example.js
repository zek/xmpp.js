'use strict'

const {Server} = require('./index')
const middleware = require('../middleware')

const s = new Server()

s.on('connection', connection => {
  connection.on('element', element => {
    console.log(element.toString())
  })
})

s.start()

const app = middleware(s)

app.use(ctx => {
  console.log(ctx)
})
