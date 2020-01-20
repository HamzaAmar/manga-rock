import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { json, urlencoded } from 'body-parser';

import route from './routes/route';
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api', route);
const { PORT, DATABASE_URI } = process.env;

mongoose
  .connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`you are connected to the port ${PORT} with success`);
    });
  })
  .catch(error => {
    console.log(error);
  });
