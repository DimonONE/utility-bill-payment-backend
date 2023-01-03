import {internet} from './internet.js';
import {users} from './users.js';

export const routes = app => {
  internet(app);
  users(app);
};
