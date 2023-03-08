const base = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
export default {
  baseUrl: base,
  createGame: `${base}games/`,
  scores: (id) => `${base}games/${id}/scores/`,
};
