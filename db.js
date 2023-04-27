import mongoose from 'mongoose'
async function connectDB() {
    if (mongoose.connections[0].readyState) {
      console.log('Already connected to MongoDB')
      return
    }
  
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
  
    console.log('Connected to MongoDB')
  }
  
  export default connectDB