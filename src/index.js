import './style.css';
import Leaderboard from './modules/leaderbord.js';
import { $, showToast } from './modules/utils.js';
import Logo from './assets/logo.png';
import sphere from './assets/sphere.png';
import donut from './assets/donut.png';

const init = async () => {
  $('#logo').src = Logo;
  $('#sphere').src = sphere;
  $('#donut').src = donut;
  const form = $('#addForm');
  const refresh = $('#refresh');
  const leaderbord = new Leaderboard($('#list'), (msg) => showToast(msg));

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
};

window.onload = () => {
  init();
};
