import { $, sortObjectArray, showToast } from './utils.js';
import game from './game.json';
import getScores from './getScores.js';
import addScore from './addScore.js';
import createGame from './createGame.js';
import first from '../assets/M1.png';
import second from '../assets/M2.png';
import third from '../assets/M3.png';

export default class Leaderboard {
  constructor(list = $('#list'), callback) {
    this.list = list;
    this.callback = callback;
  }

  async getScores() {
    try {
      const scores = await getScores(game.ID);
      this.scores = sortObjectArray(scores, 'score', 'dec');
      this.render();
    } catch (error) {
      showToast(error?.message);
    }
  }

  async addScore(user) {
    try {
      const result = await addScore(game.ID, user);
      this.callback?.(result);
    } catch (error) {
      showToast(error?.message);
    }
  }

  async refresh() {
    this.getScores();
  }

  async createGame(name) {
    try {
      const ID = await createGame(name);
      this.callback?.(ID);
    } catch (error) {
      showToast(error?.message);
    }
  }

  getBadge(index) {
    const icons = [first, second, third];
    return  (index <= 2)? 
      `<img width="32" class="absolute -translate-x-full " src=${icons[index]} alt='badge' />`: "";
    
  }

  render() {
    this.list.innerHTML =
      this.scores?.length > 0
        ? this.scores
            .map(
              ({ user, score }, i) =>
                `<li class="relative text-xl hover:bg-[#a413] rounded-md select-none cursor-pointer py-2 px-4 flex justify-between"> 
                ${this.getBadge(
                  i
                )}
                <p>${user}</p> <span>${score}</span></li>`
            )
            .join('')
        : `<li class="text-xl hover:bg-[#a413] rounded-md select-none text-center"><p>No Record</p></li>`;
  }
}
