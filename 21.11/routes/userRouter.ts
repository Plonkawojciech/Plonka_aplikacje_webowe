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
    const { username, email, posts, profile } = req.body
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        posts,
        profile,
      },
    })
    res.json(newUser)
  } catch (error) {
    throw error
  }
})

userRouter.put('/:id', async (req, res) => {
  const userId = Number(req.params.id)
  const { username, email, posts, profile } = req.body
  try {
    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        email,
        posts,
        profile,
      },
    })
    res.json(updateUser)
  } catch (error) {
    throw error
  }
})

userRouter.delete('/:id', async (req, res) => {
  const userId = Number(req.params.id)
  const { username, email, posts, profile } = req.body
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
