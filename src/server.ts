
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {routes} from './routes/index.js';
import {connectBd} from '../config/db.js';

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

routes(app);
app.listen(port, () => {
  connectBd();

  console.log(`Example app listening on port ${port}`);
});
