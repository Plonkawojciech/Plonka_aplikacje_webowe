import express from 'express'
import { PrismaClient } from '@prisma/client'

const tagRouter = express.Router()
const prisma = new PrismaClient()

tagRouter.get('/', async (req, res) => {
  try {
    const user = await prisma.tag.findMany()
    res.json(user)
  } catch (error) {
    throw error
  }
})

tagRouter.post('/', async (req, res) => {
  try {
    const { name, Post, postId, PostToTag } = req.body
    const newUser = await prisma.tag.create({
      data: {
        name,
        Post,
        postId,
        PostToTag,
      },
    })
    res.json(newUser)
  } catch (error) {
    throw error
  }
})

tagRouter.put('/:id', async (req, res) => {
  const tagId = Number(req.params.id)
  const { name, Post, postId, PostToTag } = req.body
  try {
    const updateUser = await prisma.tag.update({
      where: { id: tagId },
      data: {
        name,
        Post,
        postId,
        PostToTag,
      },
    })
    res.json(updateUser)
  } catch (error) {
    throw error
  }
})

tagRouter.delete('/:id', async (req, res) => {
  const tagId = Number(req.params.id)
  const { name, Post, postId, PostToTag } = req.body
  try {
    const deleteUser = await prisma.tag.delete({
      where: { id: tagId },
    })
    res.json(deleteUser)
  } catch (error) {
    throw error
  }
})

export default tagRouter
