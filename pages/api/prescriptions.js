import nextConnect from 'next-connect';
import connectDB from '../../db';
import Presc from '../../dbModels/Presc';

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get(async (req, res) => {
  await connectDB();
  const { phone } = req.query;
  console.log(phone)
  try {
    const presc = await Presc.find({ phone });
    if (!presc) {
      return res.status(404).json({ error: 'Prescription not found' });
    }
    res.status(200).json(presc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
