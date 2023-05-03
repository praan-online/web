import { MongoClient } from 'mongodb';
import nc from 'next-connect';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  if (!client.isConnected()) await client.connect();
  return client.db(process.env.MONGODB_DB);
}

const handler = nc()
  .post(async (req, res) => {
    const { name, email, date } = req.body;
    const db = await connectToDatabase();
    const appointments = db.collection('appointments');
    const existingAppointment = await appointments.findOne({ date });

    if (existingAppointment) {
      res.status(400).send('An appointment already exists for that date');
    } else {
      await appointments.insertOne({ name, email, date });
      res.status(201).json({ message: 'Appointment booked!' });
    }
  })
  .use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong');
  });

export default handler;