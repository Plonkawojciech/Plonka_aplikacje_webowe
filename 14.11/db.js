import { MongoClient } from 'mongodb'
import env from 'dotenv'

env.config()
const url = process.env.DATABASE_URL

const insertOneData = async (collection, data) => {
  try {
    const db = await MongoClient.connect(url)
    const dbo = await db.db('mydb_web')
    await dbo.collection(collection).insertOne(data)
    db.close()
  } catch (e) {
    throw e
  }
}

export const db = {
  insertOneData,
}
