import express, { Request, Response } from 'express'
import userRouter from './routes/userRouter'
import profileRouter from './routes/profileRouter'
import tagRouter from './routes/tagRouter'
import postRouter from './routes/postRouter'
import categoryRouter from './routes/categoryRouter'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded())
// app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/tag', tagRouter)
app.use('/profile', profileRouter)
app.use('/post', postRouter)
app.use('/category', categoryRouter)

app.listen(PORT, () => {
  console.log('app running')
})
