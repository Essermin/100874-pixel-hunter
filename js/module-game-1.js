import createTemplate from './create-template';
import renderScreen from './render-template';
import showIntroPage from './show-intro-page';
import footerTemplate from './module-footer';
import headerTemplate from './module-header';
import game2Template from './module-game-2';
import gameStatsTemplate from './ingame-stat';

import {initialState, game1Params} from './data';

const formTemplate = (image1, image2) => {
  const template = `
    <form class="game__content">
      <div class="game__option">
        <img src="${image1}" alt="Option 1" width="468" height="458">    
        <label class="game__answer game__answer&#45;&#45;photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer&#45;&#45;paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${image2}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer&#45;&#45;photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer&#45;&#45;paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  `;

  return template;
};

const game1Template = () => {
  const images = game1Params.images;
  const template = createTemplate(`   
    <div class="game">
      ${headerTemplate(initialState)}
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      ${formTemplate(images[0], images[1])}
      <div class="stats">        
        ${gameStatsTemplate(game1Params.stats)}        
      </div>
    </div>
    ${footerTemplate}
  `);

  const gameForm = template.querySelector(`.game__content`);

  gameForm.addEventListener(`change`, () => {
    if (gameForm.querySelector(`input[name="question1"]:checked`) && gameForm.querySelector(`[name="question2"]:checked`)) {
      renderScreen(game2Template());
    }
  });

  showIntroPage(template);

  return template;
};

export default game1Template;
