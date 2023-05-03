import { MongoClient } from 'mongodb';
import axios from 'axios';

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const diabetesCollection = db.collection('diabetes');

  if (req.method === 'POST') {
    const { glucose, insulin, bmi, level, phone, bp, chol } = req.body;

    // const existingDiabetes = await diabetesCollection.findOne({ glucose, insulin, bmi });

    // if (existingDiabetes) {
    //   res.status(200).json(existingDiabetes);
    //   return;
    // }

    const newDiabetes = {
      glucose,
      level,
      insulin,
      bmi,
      phone,
      bp,
      chol,
      recordedAt: new Date().toISOString(),
    };

    const result = await diabetesCollection.insertOne(newDiabetes);

    const { insertedCount } = result;
    if (insertedCount === 1) {
      // Get the most recent diabetes record
      const latestDiabetes = await diabetesCollection.findOne({}, { sort: { recordedAt: -1 } });

      // Check if the glucose level is above a certain threshold
      const glucoseThreshold = 100;
      if (latestDiabetes.glucose >= glucoseThreshold) {
        const message = `Your diabetes level is high (${latestDiabetes.glucose}). Please consult your doctor.`;

        // Send an SMS message to the user's phone number using Twilio
        // const { data: twilioResponse } = await axios.post(
        //   'https://api.twilio.com/2010-04-01/Accounts/YOUR_ACCOUNT_SID/Messages.json',
        //   {
        //     Body: message,
        //     From: 'YOUR_TWILIO_PHONE_NUMBER',
        //     To: 'USER_PHONE_NUMBER',
        //   },
        //   {
        //     auth: {
        //       username: 'YOUR_ACCOUNT_SID',
        //       password: 'YOUR_AUTH_TOKEN',
        //     },
        //     headers: {
        //       'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //   }
        // );

        // console.log(`Twilio response: ${JSON.stringify(twilioResponse, null, 2)}`);
      }
    }

    res.status(201).json(result);
  } else if (req.method === 'GET') {
    const { phone } = req.query;

    try {
      const levels = await diabetesCollection.findOne({phone}, { sort: { recordedAt: -1 } });
      
      res.send(levels)
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }

  client.close();
}
