import express, { Request, Response } from 'express'
import userRouter from './routes/userRouter'
import profileRouter from './routes/profileRouter'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded())

app.use('/user', userRouter)
// app.use('/tag', tagRouter)
app.use('/profile', profileRouter)
// app.use('/post', postRouter)
// app.use('/category', categoryRouter)

app.listen(PORT, () => {
  console.log('app running')
})
