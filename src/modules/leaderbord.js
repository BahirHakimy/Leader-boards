import { $, sortObjectArray } from './utils.js';

export default class Leaderboard {
  constructor(scores = [], list = $('#list')) {
    this.list = list;
    this.scores = scores;
  }

  addScore(user) {
    this.scores.push(user);
    this.scores = sortObjectArray(this.scores, 'score', 'dec');
    this.render();
  }

  render() {
    this.list.innerHTML = this.scores
      .map(
        ({ name, score }) => `<li class="text-xl even:bg-slate-200 py-2 px-4">${name} : ${score}</li>`,
      )
      .join('');
  }
}
