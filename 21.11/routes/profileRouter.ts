import express from 'express'
import { PrismaClient } from '@prisma/client'

const profileRouter = express.Router()
const prisma = new PrismaClient()

profileRouter.get('/', async (req, res) => {
  try {
    const user = await prisma.profile.findMany()
    res.json(user)
  } catch (error) {
    throw error
  }
})
profileRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const uniqueProfile = await prisma.user.findUnique({
      where: { id },
    })
    res.json(uniqueProfile)
  } catch (error) {
    throw error
  }
})

profileRouter.post('/', async (req, res) => {
  try {
    const { user, userId, displayName, bio, status, avatarUrl, bannerUrl } =
      req.body
    const newUser = await prisma.profile.create({
      data: {
        user,
        userId,
        displayName,
        bio,
        status,
        avatarUrl,
        bannerUrl,
      },
    })
    res.json(newUser)
  } catch (error) {
    throw error
  }
})

profileRouter.put('/:id', async (req, res) => {
  const profileId = Number(req.params.id)
  const { user, userId, displayName, bio, status, avatarUrl, bannerUrl } =
    req.body
  try {
    const updateUser = await prisma.profile.update({
      where: { id: profileId },
      data: {
        user,
        userId,
        displayName,
        bio,
        status,
        avatarUrl,
        bannerUrl,
      },
    })
    res.json(updateUser)
  } catch (error) {
    throw error
  }
})

profileRouter.delete('/:id', async (req, res) => {
  const profileId = Number(req.params.id)
  const { user, userId, displayName, bio, status, avatarUrl, bannerUrl } =
    req.body
  try {
    const deleteUser = await prisma.profile.delete({
      where: { id: profileId },
    })
    res.json(deleteUser)
  } catch (error) {
    throw error
  }
})

export default profileRouter
