import express from 'express'
import { db } from '../db.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('kontakt')
})

router.post('/', async (req, res) => {
  const { name, email, radio, message } = req.body
  console.log(name, email, radio, message)

  try {
    db.insertOneData('contact', { name, email, radio, message })
    res.status(201).redirect('/')
  } catch (error) {
    res.status(500).json({ error: 'Internal Sexwrver Error' })
  }
})

export default router
