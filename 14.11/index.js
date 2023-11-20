import express from 'express'
import bodyParser from 'body-parser'
import kontaktRouter from './routes/kontakt.js'
import apiRouter from './routes/api.js'
import { MongoClient } from 'mongodb'
import env from 'dotenv'

env.config()
const app = express()
const PORT = 8000
const url = process.env.DATABASE_URL

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/kontakt', kontaktRouter)
app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`)
})
