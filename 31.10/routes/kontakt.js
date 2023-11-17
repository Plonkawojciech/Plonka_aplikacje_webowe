import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

router.get('/', (req, res) => {
  res.render('kontakt')
})

router.post('/', async (req, res) => {
  const { name, email, radio, message } = req.body
  console.log(name, email, radio, message)

  try {
    await prisma.kontakt.create({
      data: {
        content: message,
        name: name,
        email: email,
        topic: radio,
      },
    })

    res.status(201).redirect('/')
  } catch (error) {
    res.status(500).json({ error: 'Internal Sexwrver Error' })
  }
})

export default router
