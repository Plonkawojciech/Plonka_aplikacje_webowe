import express from 'express'
import { PrismaClient } from '@prisma/client'

const userRouter = express.Router()
const prisma = new PrismaClient()

userRouter.get('/', async (req, res) => {
  try {
    const user = await prisma.user.findMany()
    res.json(user)
  } catch (error) {
    throw error
  }
})

userRouter.post('/', async (req, res) => {
  try {
    const { username, email } = req.body
    console.log(username, email)
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
      },
    })
    res.json(newUser)
  } catch (error) {
    throw error
  }
})

userRouter.put('/:id', async (req, res) => {
  const userId = Number(req.params.id)
  const { username, email } = req.body
  try {
    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        email,
      },
    })
    res.json(updateUser)
  } catch (error) {
    throw error
  }
})

userRouter.get('/:id', async (req, res) => {
  const userId = Number(req.params.id)
  try {
    const uniqueUser = await prisma.user.findUnique({
      where: { id: userId },
    })
    res.json(uniqueUser)
  } catch (error) {
    throw error
  }
})

userRouter.delete('/:id', async (req, res) => {
  const userId = Number(req.params.id)
  try {
    const deleteUser = await prisma.user.delete({
      where: { id: userId },
    })
    res.json(deleteUser)
  } catch (error) {
    throw error
  }
})

export default userRouter
