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
    const { name, postId } = req.body
    const newUser = await prisma.category.create({
      data: {
        name,
        postId,
      },
    })
    res.json(newUser)
  } catch (error) {
    throw error
  }
})

categoryRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const uniqueCategory = await prisma.user.findUnique({
      where: {  id },
    })
    res.json(uniqueCategory)
  } catch (error) {
    throw error
  }
})

categoryRouter.put('/:id', async (req, res) => {
  const categoryId = Number(req.params.id)
  const { name, postId } = req.body
  try {
    const updateUser = await prisma.category.update({
      where: { id: categoryId },
      data: {
        name,
        postId,
      },
    })
    res.json(updateUser)
  } catch (error) {
    throw error
  }
})

categoryRouter.delete('/:id', async (req, res) => {
  const categoryId = Number(req.params.id)
  const { name, postId } = req.body
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
