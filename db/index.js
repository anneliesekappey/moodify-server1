import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    const x = await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/moodify'
    )
    console.log(`Connected to Mongo! DataBase: ${x.connections[0].name}`)
  } catch (error) {
    console.error(error)
  }
}

connectDb()
