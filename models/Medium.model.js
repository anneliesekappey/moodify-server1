import { Schema, model } from 'mongoose'

const mediumSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    type: {
      type: String,
    },
    mood: [
      {
        type: String,
        enum: [
          'hopeful',
          'joyous',
          'excited',
          'peaceful',
          'happy',
          'melancholic',
          'angry',
          'sad',
          'hopeless',
          'bored',
        ],
      },
    ],
    year: {
      type: Date,
    },
    creator: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
)

const Medium = model('Medium', mediumSchema)

export default Medium
