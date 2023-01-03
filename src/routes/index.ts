import { Express } from 'express-serve-static-core';
import {internet} from './internet.js';
import {users} from './users.js';

export const routes = (app: Express) => {
  internet(app);
  users(app);
};
