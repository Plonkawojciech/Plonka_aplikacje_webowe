import express from 'express'
import { db } from '../db.js'

const router = express.Router()

router.get('/', (req, res) => {})

router.get('/messages', async (req, res) => {
  try {
    const contactData = await db.displayData('contact')
    res.json(contactData)
  } catch (e) {
    res.status(500).json({ error: 'cant find data' })
  }
})

export default router
