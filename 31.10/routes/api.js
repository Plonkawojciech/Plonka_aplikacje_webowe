import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

router.get('/', (req, res) => {})

router.get('/students', async (req, res) => {
  try {
    const students = await prisma.Students.findMany()
    res.json(students)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/students/:id', async (req, res) => {
  const studentId = Number(req.params.id)

  try {
    const student = await prisma.Students.findUnique({
      where: {
        id: studentId,
      },
    })
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
    const subject = await prisma.Subjects.findMany()
    res.json(subject)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/subjects/:id', async (req, res) => {
  const subjectId = Number(req.params.id)

  try {
    const subject = await prisma.Subjects.findUnique({
      where: {
        id: subjectId,
      },
    })
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
