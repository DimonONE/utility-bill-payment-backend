import dayjs from 'dayjs';
import {UsersPost} from '../models/users.js';

export const users = app => {
  app.post('/userAuth', async (req, res) => {
    let data;
    const {email, password} = req.body;

    console.log('userId', email);
    if (!!email && !!password) {
      try {
        data = await UsersPost.findOne({
          email,
        });
      } catch (error) {
        data = {success: false, message: 'Not found'};
      }
    } else {
      data = {success: false, message: `Not query id`};
    }

    res.send({
      data,
    });
  });

  app.post('/user', async (req, res) => {
    let getUser;
    const {name, email, password} = req.body;

    console.log('req.body', req.body);

    if (!!name && !!password) {
      getUser = await UsersPost.create({
        name,
        email,
        password,
        date: dayjs().format(),
        status: 'User',
      });
    } else {
      getUser = {status: false};
    }
    res.send({data: getUser});
  });
};
