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

router.get('/students', async (req, res) => {
  try {
    const students = await db.displayData('students')
    res.json(students)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/students/:id', async (req, res) => {
  const id = Number(req.params.id)

  try {
    const subject = await db.displayData('subject', id)
    if (student) {
      res.json(student)
    } else {
      res.status(404).json({ error: 'Student not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/subjects', async (req, res) => {
  try {
    const subject = await db.displayData('subject')
    res.json(subject)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/subjects/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const subject = await db.displayData('subject', id)

    if (subject) {
      res.json(subject)
    } else {
      res.status(404).json({ error: 'Subject not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
