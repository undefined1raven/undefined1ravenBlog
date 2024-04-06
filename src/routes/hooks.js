import { handle } from 'sveltekit/hooks';

export const handle = async ({ event, resolve }) => {
  event.path = '/';
  return await resolve(event);
};