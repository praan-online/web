
import connectDB from '../../db'
import UserModel from '../../dbModels/UserModel'
import Doctor from '../../dbModels/DoctorModel'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  const { method } = req

  await connectDB()

  switch (method) {
    case 'POST':
      try {
        const { number, password } = req.body

        // Check if the user exists in the database
        let user = await UserModel.findOne({ number })
        if (!user) {
          user = await Doctor.findOne({ number })
        }
        
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' })
        }
        // Check if the password matches
        const passwordMatches = await user.comparePassword(password)

        if (!passwordMatches) {
          return res.status(401).json({ message: 'Invalid credentials' })
        }

        // Generate and return an access token
        const accessToken = generateAccessToken(user)

        return res.status(200).json({ accessToken, user })
      } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal server error' })
      }
    case 'PUT':
      try {
        const { name, number, password } = req.body

        // Create a new user with the provided data
        const newUser = new UserModel({ name, number, password })

        // Save the new user to the database
        await newUser.save()

        // Generate and return an access token
        const accessToken = generateAccessToken(newUser)

        return res.status(201).json({ accessToken })
      } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal server error' })
      }
    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}

function generateAccessToken(user) {
  // Define the payload for the JWT
  const payload = {
    user: {
      id: user._id,
      name: user.name,
      number: user.number,
    },
  }

  
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

  return accessToken
}