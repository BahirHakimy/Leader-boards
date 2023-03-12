import endpoints from './endpoints.js';
import api from './api.js';

export default async (gameID, data) => {
  const response = await api.post(endpoints.scores(gameID), data);
  return response.result;
};
