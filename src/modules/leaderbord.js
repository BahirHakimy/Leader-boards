import { $, sortObjectArray } from './utils.js';
import game from './game.json';
import getScores from './getScores.js';
import addScore from './addScore.js';
import createGame from './createGame.js';

export default class Leaderboard {
  constructor(list = $('#list'), callback) {
    this.list = list;
    this.callback = callback;
  }

  async getScores() {
    const scores = await getScores(game.ID);
    this.scores = sortObjectArray(scores, 'score', 'dec');
    this.render();
  }

  async addScore(user) {
    const result = await addScore(game.ID, user);
    this.callback?.(result);
  }

  async refresh() {
    this.getScores();
  }

  async createGame(name) {
    const ID = await createGame(name);
    this.callback?.(ID);
  }

  render() {
    this.list.innerHTML = this.scores
      .map(
        ({ user, score }) =>
          `<li class="text-xl hover:bg-[#a413] rounded-md select-none cursor-pointer py-2 px-4 flex justify-between"><p>${user}</p> <span>${score}</span></li>`
      )
      .join('');
  }
}
