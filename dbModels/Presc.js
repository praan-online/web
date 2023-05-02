import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  },
  desc: {
    type: String,
  },
  file:{
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  },
  type:{
    type: String
  }
})

const PrescModel = mongoose.models.Presc || mongoose.model('Presc', UserSchema)

export default PrescModel