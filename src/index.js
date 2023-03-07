import './style.css';
import Leaderboard from './modules/leaderbord.js';
import { $, sortObjectArray } from './modules/utils.js';

const scores = [
  { name: 'John Doe', score: 100 },
  { name: 'Mike Smith', score: 85 },
  { name: 'Ahmad Ahmadi', score: 58 },
  { name: 'Abraham Smith', score: 87 },
  { name: 'The Rock', score: 45 },
  { name: 'Tom Cruse', score: 34 },
];

function init() {
  const form = $('#addForm');
  const leaderbord = new Leaderboard(sortObjectArray(scores, 'score', 'dec'));
  form.addEventListener('submit', (event) => {
    const { name, score } = event.target.elements;
    event.preventDefault();
    leaderbord.addScore({ name: name.value, score: score.value });
    form.reset();
  });
  leaderbord.render();
}

window.onload = () => {
  init();
};
