import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

import './db/index.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('It works')
})

import Medium from './models/Medium.model.js'

app.post('/medium', async (req, res) => {
  const { body } = req
  try {
    const newMedium = await Medium.create(body)
    res.status(201).json(newMedium)
  } catch (error) {
    res.status(400).json({ status: 400, msg: error.message })
  }
})

app.get('/medium', async (req, res) => {
  try {
    const media = await Medium.find()
    res.status(200).json(media)
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message })
  }
})

app.get('/medium/:id', async (req, res) => {
  const { id } = req.params
  try {
    const medium = await Medium.findById(id)
    if (medium) {
      res.status(200).json(medium)
    } else {
      res.status(404).json({ msg: 'Title not found' })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).json({ status: 404, msg: error })
    } else {
      res.status(500).json({ status: 500, msg: error.message })
    }
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT} port`)
})
