import connectDB from '../../db'
import UserModel from '../../dbModels/DoctorModel'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export default async function handler(req, res) {
  const { method } = req;
  await connectDB()
  switch (method) {
    case 'POST':
      // User registration
      try {
        const { name, number, address, specialisation, email, password } = req.body;
        const user = await UserModel.create({ name, number, address, specialisation, email, password });
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case 'PUT':
      // Update user profile
      try {
        const { id } = req.query;
        const { name, number, address, specialisation } = req.body;
        const user = await UserModel.findByIdAndUpdate(id, { name, number, address, specialisation }, { new: true });
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case 'POST':
      // User login
      try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
        } else {
          const isMatch = await user.comparePassword(password);

          if (!isMatch) {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
          } else {
            // Generate JWT token and send it as response
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.status(200).json({ success: true, token });
          }
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
