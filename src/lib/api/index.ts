import { treaty } from '@elysiajs/eden';
import type { App } from 'server';

const app = treaty<App>('http://localhost:9000');

export const getUsers = async () => {
  const { data } = await app.users.get();

  console.log(data);
  return data;
};
// Get data from /user/617
