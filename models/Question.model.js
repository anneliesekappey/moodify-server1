import { Schema, model } from 'mongoose'

const questionSchema = new Schema(
  {
    question: {
      type: String,
    },
    options: [
      {
        option1: {
          type: String,
          value: Int32Array,
        },
        option2: {
          type: String,
          value: Int32Array,
        },
        option3: {
          type: String,
          value: Int32Array,
        },
        option4: {
          type: String,
          value: Int32Array,
        },
        option5: {
          type: String,
          value: Int32Array,
        },
      },
    ],
  },
  { timestamps: true }
)

const Question = model('Question', questionSchema)

export default Question
