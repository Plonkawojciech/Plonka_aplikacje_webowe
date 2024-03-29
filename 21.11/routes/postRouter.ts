import express from 'express'
import { PrismaClient } from '@prisma/client'

const postRouter = express.Router()
const prisma = new PrismaClient()

postRouter.get('/', async (req, res) => {
  try {
    const user = await prisma.post.findMany()
    res.json(user)
  } catch (error) {
    throw error
  }
})

postRouter.post('/', async (req, res) => {
  try {
    const {tiitle, constent, authorId, author, userId, tagId, PostToTag, category,} = req.body
    const newUser = await prisma.post.create({
      data: {
        tiitle,
        constent,
        authorId,
        author,
        userId,
        tagId,
        PostToTag,
        category,
      },
    })
    res.json(newUser)
  } catch (error) {
    throw error
  }
})

postRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const uniquePost = await prisma.user.findUnique({
      where: { id },
    })
    res.json(uniquePost)
  } catch (error) {
    throw error
  }
})

postRouter.put('/:id', async (req, res) => {
  const postId = Number(req.params.id)
  const {
    tiitle,
    constent,
    authorId,
    author,
    userId,
    tagId,
    PostToTag,
    category,
  } = req.body
  try {
    const updateUser = await prisma.post.update({
      where: { id: postId },
      data: {
        tiitle,
        constent,
        authorId,
        author,
        userId,
        tagId,
        PostToTag,
        category,
      },
    })
    res.json(updateUser)
  } catch (error) {
    throw error
  }
})

postRouter.delete('/:id', async (req, res) => {
  const postId = Number(req.params.id)
  const {
    tiitle,
    constent,
    authorId,
    author,
    userId,
    tagId,
    PostToTag,
    category,
  } = req.body
  try {
    const deleteUser = await prisma.post.delete({
      where: { id: postId },
    })
    res.json(deleteUser)
  } catch (error) {
    throw error
  }
})

export default postRouter
