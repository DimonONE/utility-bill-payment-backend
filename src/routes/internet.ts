import dayjs from 'dayjs';
import {InternetPost} from '../models/internet.js';

export const internet = (app: { get: (arg0: string, arg1: (req: any, res: any) => Promise<void>) => void; post: (arg0: string, arg1: (req: any, res: any) => Promise<void>) => void; }) => {
  app.get('/internet', async (req, res) => {
    let data;
    const {userId} = req.query;

    if (userId) {
      data = await InternetPost.find({userId});
    } else {
      data = {success: false, message: `Not query ${userId}`};
    }

    if (!data.length) {
      data = {success: false, message: 'Not found'};
    }

    res.send({
      data: data,
    });
  });

  app.post('/internet', async (req, res) => {
    let getInternet;
    const {userName, price, provider, userId} = req.body;

    console.log('req.body', req.body);

    if (price) {
      getInternet = await InternetPost.create({
        userName,
        price,
        provider,
        userId,
        date: dayjs().format(),
      });
    } else {
      getInternet = {status: false};
    }
    res.send({data: getInternet});
  });
};
