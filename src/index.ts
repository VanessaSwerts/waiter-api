import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch(() => { console.log('Error to connect with the MongoDB'); });
