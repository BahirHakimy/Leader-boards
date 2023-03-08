import endpoints from './endpoints.js';
import api from './api.js';

export default async (gameID) => {
  const data = await api.get(endpoints.scores(gameID));
  return data?.result;
};
