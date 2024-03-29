import nextConnect from 'next-connect';
import multer from 'multer';
import connectDB from '../../db'
import Presc from '../../dbModels/Presc'

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, Date.now() + file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('file'));

apiRoute.post(async(req, res) => {
    await connectDB()
    let {name, phone, desc, type} = req.body 
    console.log(type )
    const newPresc = new Presc({ name, phone, desc, file:req.files[0].filename, type:type })

    // Save the new user to the database
    await newPresc.save() 
  res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};