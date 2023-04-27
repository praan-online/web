import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

UserSchema.pre('save', async function (next) {
  try {
    // Generate a salt for the password
    const salt = await bcrypt.genSalt(10)

    // Hash the password with the salt
    const passwordHash = await bcrypt.hash(this.password, salt)

    // Replace the plain-text password with the hashed password
    this.password = passwordHash

    next()
  } catch (error) {
    next(error)
  }
})

UserSchema.methods.comparePassword = async function (password) {
  try {
    // Compare the provided password with the hashed password in the database
    return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw new Error(error)
  }
}

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)

export default UserModel