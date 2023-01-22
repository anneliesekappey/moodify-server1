import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/moodify'

const connectDb = async () => {
  try {
    const x = await mongoose.connect(DB_URI)
    console.log(`Connected to Mongo! DataBase: ${x.connections[0].name}`)
  } catch (error) {
    console.error(error)
  }
}

connectDb()
