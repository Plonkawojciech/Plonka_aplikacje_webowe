import express from 'express'
import { PrismaClient } from '@prisma/client'

const categoryRouter = express.Router()
const prisma = new PrismaClient()

categoryRouter.get('/', async (req, res) => {
  try {
    const user = await prisma.category.findMany()
    res.json(user)
  } catch (error) {
    throw error
  }
})

categoryRouter.post('/', async (req, res) => {
  try {
    const { name, postId, Post } = req.body
    const newUser = await prisma.category.create({
      data: {
        name,
        postId,
        Post,
      },
    })
    res.json(newUser)
  } catch (error) {
    throw error
  }
})

categoryRouter.put('/:id', async (req, res) => {
  const categoryId = Number(req.params.id)
  const { name, postId, Post } = req.body
  try {
    const updateUser = await prisma.category.update({
      where: { id: categoryId },
      data: {
        name,
        postId,
        Post,
      },
    })
    res.json(updateUser)
  } catch (error) {
    throw error
  }
})

categoryRouter.delete('/:id', async (req, res) => {
  const categoryId = Number(req.params.id)
  const { name, postId, Post } = req.body
  try {
    const deleteUser = await prisma.category.delete({
      where: { id: categoryId },
    })
    res.json(deleteUser)
  } catch (error) {
    throw error
  }
})

export default categoryRouter
