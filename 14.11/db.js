import { MongoClient } from 'mongodb'
import env from 'dotenv'

env.config()
const url = process.env.DATABASE_URL

const insertOneData = async (collection, data) => {
  try {
    const db = await MongoClient.connect(url)
    const dbo = await db.db('mydb_web')
    const filteredData = {}
    for (const key in data) {
      if (data[key] !== undefined) {
        filteredData[key] = data[key]
      }
    }
    await dbo.collection(collection).insertOne(data)
    db.close()
  } catch (e) {
    throw e
  }
}

const displayData = async (collection, params = []) => {
  try {
    const db = await MongoClient.connect(url)
    const dbo = await db.db('mydb_web')
    let result
    if (!params || params.length === 0) {
      result = await dbo.collection(collection).find().toArray()
    } else {
      result = await dbo.collection(collection).findOne(params)
    }

    db.close()
    return result
  } catch (e) {
    throw e
  }
}

export const db = {
  insertOneData,
  displayData,
}
