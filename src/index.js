import './style.css';
import Leaderboard from './modules/leaderbord.js';
import { $ } from './modules/utils.js';

const showMessage = (message) => {
  const label = $('#message');
  label.textContent = message;
  setTimeout(() => {
    label.textContent = '';
  }, 5000);
};

async function init() {
  const form = $('#addForm');
  const refresh = $('#refresh');
  const leaderbord = new Leaderboard($('#list'), showMessage);

  refresh.addEventListener('click', () => {
    leaderbord.refresh();
  });

  form.addEventListener('submit', (event) => {
    const { name, score } = event.target.elements;
    event.preventDefault();
    leaderbord.addScore({ user: name.value, score: score.value });
    form.reset();
  });
  await leaderbord.getScores();
  leaderbord.render();
}

window.onload = () => {
  init();
};
