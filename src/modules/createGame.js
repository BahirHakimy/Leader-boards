import endpoints from './endpoints.js';
import api from './api.js';
export default async (name) => {
  const data = await api.post(endpoints.createGame, { name });
  // Only returns the game id
  return data?.result.split(':')[1].trim().split(' ')[0];
};
